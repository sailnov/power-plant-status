"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
        type PlantListItem = {
            id: number
            name: string
        }
        const [plants, setPlants] = useState<PlantListItem[] | null>(null);
        useEffect(() => {
            let isMounted = true;
            let prevData: PlantListItem[] | null = null;
            const fetchData = async () => {
                try {
                    const res = await fetch(`/api/plants.json?_=${Date.now()}`);
                    const data: PlantListItem[] = await res.json();
                    // データが変わった場合のみ更新
                    if (JSON.stringify(data) !== JSON.stringify(prevData)) {
                        prevData = data;
                        if (isMounted) setPlants(data);
                    }
                } catch {
                    if (isMounted) setPlants(null);
                }
            };
            fetchData();
            const timer = setInterval(fetchData, 100000); // 100秒ごとにポーリング
            return () => {
                isMounted = false;
                clearInterval(timer);
            };
        }, []);
        if (!plants) {
            return <p>Loading…</p>;
        }
    return (
        <div className="p-6 max-w-6xl mx-auto w-full">
            <h1 className="text-xl font-bold mb-1">発電量・設備利用率データ</h1>
            <ul className="list-disc pl-6 mb-6">
                {plants.map((plant) => (
                    <li key={plant.id}>
                        <Link
                            className="text-blue-600"
                            href={`/data?id=${plant.id}`}
                        >
                            {plant.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <h1 className="text-xl font-bold mb-1">発電所監視カメラ（まだ工事中）</h1>
            <ul className="list-disc pl-6 mb-6">
                {plants.map((plant) => (
                    <li key={plant.id}>
                        <Link
                            className="text-blue-600"
                            href={`/webcam?id=${plant.id}`}
                        >
                            {plant.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
