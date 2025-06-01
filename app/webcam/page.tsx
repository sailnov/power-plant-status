"use client";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";


export default function PowerPlantWebcam() {
    //queryからIDを取得
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [plant, setPlant] = useState<PowerPlant | null>(null);
    const [images, setImages] = useState<string[]>([]);
    const [displayImages, setDisplayImages] = useState<string[]>([]); // キャッシュバスター付きURL
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
    const contentLengthsRef = useRef<Record<string, number | null>>({});
    const intervalsRef = useRef<NodeJS.Timeout[]>([]);

    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            const res = await fetch(`/data/${id}.json`);
            const data: PowerPlant = await res.json();
            setPlant(data);
            setImages(data.webcamImagePath);
        };
        fetchData();
    }, [id]);

    // 画像監視ロジック
    useEffect(() => {
        // クリーンアップ
        intervalsRef.current.forEach(clearInterval);
        intervalsRef.current = [];
        if (!images.length) {
            setDisplayImages([]);
            return;
        }
        // 初期化
        const newDisplayImages = images.map((img) => `${img}?_=${Date.now()}`);
        setDisplayImages(newDisplayImages);
        // 各画像ごとに監視
        images.forEach((img, idx) => {
            let prevLength: number | null = null;
            const checkImage = async () => {
                try {
                    const res = await fetch(img, { method: "OPTIONS" });
                    const len = res.headers.get("content-length");
                    const numLen = len ? parseInt(len, 10) : null;
                    if (prevLength === null) {
                        prevLength = numLen;
                        contentLengthsRef.current[img] = numLen;
                    } else if (numLen !== null && numLen !== prevLength) {
                        prevLength = numLen;
                        contentLengthsRef.current[img] = numLen;
                        // 画像URLを更新（キャッシュバスター）
                        setDisplayImages((prev) => {
                            const updated = [...prev];
                            updated[idx] = `${img}?_=${Date.now()}`;
                            return updated;
                        });
                        setLastUpdated(new Date());
                    }
                } catch {
                    // エラー時は何もしない
                }
            };
            checkImage();
            const interval = setInterval(checkImage, 10000);
            intervalsRef.current.push(interval);
        });
        return () => {
            intervalsRef.current.forEach(clearInterval);
            intervalsRef.current = [];
        };
    }, [images]);

    if (!plant) {
        return <p>Loading…</p>;
    }
    return (
        <div className="w-full md:p-6 min-h-screen flex flex-col">
            <div className="mb-4 max-md:p-6">
                <h1 className="text-xl font-bold">{plant.name}</h1>
                <p className="text-sm text-muted-foreground">最終更新: {lastUpdated ? lastUpdated.toLocaleString() : "不明"}</p>
            </div>

            <div className={`grid grid-cols-1 gap-6 w-full h-full flex-grow ${images.length > 1 ? "md:grid-cols-2" : ""}`}>
                {displayImages.map((webcam, index) => (
                    <a
                        href={images[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="col-span-1 hover:opacity-90"
                    >
                        <div className="relative w-full h-full min-h-[40vh]">
                            <Image
                                src={webcam}
                                alt={`Webcam ${index + 1}`}
                                fill
                                objectFit="contain"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
