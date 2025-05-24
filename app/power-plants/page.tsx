"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PowerPlants() {
    type PowerPlant = {
        id: number;
        name: string;
    };
    const [plants, setPlants] = useState<PowerPlant[] | null>(null);

    useEffect(() => {
        fetch("/data/power-plants.json")
            .then((res) => res.json())
            .then(setPlants)
            .catch(console.error);
    }, []);

    if (!plants) return <p>Loading…</p>;
    return (
        <div className="w-full max-w-5xl mx-auto p-6">
            <ul className="list-disc">
                {plants.map((plant) => (
                    <li key={plant.id}>
                        <Link href={`/power-plants/${plant.id}`}>{plant.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
