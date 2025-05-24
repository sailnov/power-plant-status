"use client";
import { use, useEffect, useState } from "react";
import { CompositeChart } from "@mantine/charts";
import Image from "next/image";

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default function PowerPlantDetails({ params }: PageProps) {
    const { id } = use(params);
    const [plant, setPlant] = useState<PowerPlant | null>(null);
    useEffect(() => {
        let isMounted = true;
        let prevData: PowerPlant | null = null;
        const fetchData = async () => {
            try {
                const res = await fetch(`/data/power-plants/${id}.json?_=${Date.now()}`);
                const data: PowerPlant = await res.json();
                // データが変わった場合のみ更新
                if (JSON.stringify(data) !== JSON.stringify(prevData)) {
                    prevData = data;
                    if (isMounted) setPlant(data);
                }
            } catch {
                // エラーは無視
            }
        };
        fetchData();
        const timer = setInterval(fetchData, 10000); // 10秒ごとにポーリング
        return () => {
            isMounted = false;
            clearInterval(timer);
        };
    }, [id]);
    if (!plant) return <p>Loading…</p>;
    const monthlyChart = plant.monthly_generations.map((value, index) => {
        const generation = value;
        const utilization = plant.monthly_utilization[index];
        return { key: `${index + 1}月`, generation, utilization };
    });
    const dailyChart = plant.daily_generations.map((value, index) => {
        const generation = value;
        const utilization = plant.daily_utilization[index];
        return { key: `${index + 1}日`, generation, utilization };
    });
    const hourlyChart = plant.hourly_generations.map((value, index) => {
        const generation = value;
        const utilization = plant.hourly_utilization[index];
        return { key: `${index}時`, generation, utilization };
    });
    return (
        <div className="max-w-6xl w-full mx-auto p-6">
            <h1 className="text-xl font-bold mb-4">{plant.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-y-4">
                    <h3 className="text-lg font-bold text-center">現在の状態: {plant.status === "ON" ? "稼働中" : plant.status === "OFF" ? "停止中" : "異常停止"}</h3>
                    <Image
                        width={1195}
                        height={550}
                        src="/PS01_ON.jpg"
                        alt="稼働中"
                    />
                </div>
                <div className="flex flex-col gap-y-4">
                    <h3 className="text-lg font-bold text-center">月間発電量</h3>
                    <CompositeChart
                        h={300}
                        data={monthlyChart}
                        dataKey={"key"}
                        maxBarWidth={30}
                        series={[
                            { name: "generation", color: "var(--chart-1)", type: "bar", label: "発電量" },
                            { name: "utilization", color: "var(--color-amber-500)", type: "line", yAxisId: "right", label: "設備利用率" },
                        ]}
                        curveType="natural"
                        withRightYAxis
                        yAxisLabel="発電量（kWh）"
                        rightYAxisLabel="設備利用率（%）"
                        rightYAxisProps={{ domain: [0, 1] }}
                    />
                    <p className="text-sm text-muted-foreground text-center">2025年</p>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h3 className="text-lg font-bold text-center">今月の発電量</h3>
                    <CompositeChart
                        h={300}
                        data={dailyChart}
                        dataKey={"key"}
                        maxBarWidth={30}
                        series={[
                            { name: "generation", color: "var(--chart-1)", type: "bar", label: "発電量" },
                            { name: "utilization", color: "var(--color-amber-500)", type: "line", yAxisId: "right", label: "設備利用率" },
                        ]}
                        curveType="monotone"
                        withRightYAxis
                        yAxisLabel="発電量（kWh）"
                        rightYAxisLabel="設備利用率（%）"
                        rightYAxisProps={{ domain: [0, 1] }}
                    />
                    <p className="text-sm text-muted-foreground text-center">2025年</p>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h3 className="text-lg font-bold text-center">本日の発電量</h3>
                    <CompositeChart
                        h={300}
                        data={hourlyChart}
                        dataKey={"key"}
                        maxBarWidth={30}
                        series={[
                            { name: "generation", color: "var(--chart-1)", type: "bar", label: "発電量" },
                            { name: "utilization", color: "var(--color-amber-500)", type: "line", yAxisId: "right", label: "設備利用率" },
                        ]}
                        curveType="monotone"
                        withRightYAxis
                        yAxisLabel="発電量（kWh）"
                        rightYAxisLabel="設備利用率（%）"
                        rightYAxisProps={{ domain: [0, 1] }}
                    />
                    <p className="text-sm text-muted-foreground text-center">2025年</p>
                </div>
            </div>
        </div>
    );
}
