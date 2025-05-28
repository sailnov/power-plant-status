"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// TODO
// 現状では画像の更新をポーリングして **いない**
// また、発電データのポーリングは必要ない

export default function PowerPlantWebcam() {
    //queryからIDを取得
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [plant, setPlant] = useState<PowerPlant | null>(null);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
    useEffect(() => {
        let isMounted = true;
        let prevData: PowerPlant | null = null;
        const fetchData = async () => {
            try {
                const res = await fetch(`/data/${id}.json?_=${Date.now()}`);
                const data: PowerPlant = await res.json();
                // データが変わった場合のみ更新
                if (JSON.stringify(data) !== JSON.stringify(prevData)) {
                    prevData = data;
                    if (isMounted) setPlant(data);
                    if (isMounted) setLastUpdated(new Date());
                }
            } catch {
                if (isMounted) setPlant(null);
            }
        };
        fetchData();
        const timer = setInterval(fetchData, 10000); // 10秒ごとにポーリング
        return () => {
            isMounted = false;
            clearInterval(timer);
        };
    }, [id]);
    if (!id) {
        return <p>Invalid power plant ID</p>;
    }
    if (!plant) {
        return <p>Loading…</p>;
    }
    return (
        <div className="max-w-6xl w-full mx-auto p-6">
            <div className="mb-4">
                <h1 className="text-xl font-bold">{plant.name}</h1>
                <p className="text-sm text-muted-foreground">最終更新: {lastUpdated ? lastUpdated.toLocaleString() : "不明"}</p>
            </div>

            <div className={`grid grid-cols-1 gap-6 ${plant.webcamImagePath.length > 1 ? "md:grid-cols-2" : ""}`}>
                {plant.webcamImagePath.map((webcam, index) => (
                    <a
                        href={webcam}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="col-span-1 hover:opacity-90"
                    >
                        <Image
                            src={webcam}
                            alt={`Webcam ${index + 1}`}
                            width={1280}
                            height={720}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
