"use client";
import { useEffect, useState } from "react";
import { CompositeChart } from "@mantine/charts";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function PowerPlantData() {
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
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();
    return (
        <div className="w-full md:p-6">
            <div className="mb-4 max-md:p-6">
                <h1 className="text-xl font-bold">{plant.name}</h1>
                <p className="text-sm text-muted-foreground">最終更新: {lastUpdated ? lastUpdated.toLocaleString() : "不明"}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-y-4">
                    <h3 className="text-lg font-bold text-center">
                        現在の状態:{" "}
                        <span className={`${plant.status === "ON" ? "text-green-500" : plant.status === "OFF" ? "text-blue-500" : plant.status === "ERR" ? "text-red-500" : "text-gray-500"}`}>
                            {plant.status === "ON" ? "稼働中" : plant.status === "OFF" ? "停止中" : plant.status === "ERR" ? "異常" : "不明"}
                        </span>
                    </h3>
                    <div className="relative w-full h-full max-md:h-64">
                        <Image
                            fill
                            src={`/PS01_${plant.status}.jpg`}
                            alt={plant.status}
                            objectFit="contain"

                        />
                    </div>
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
                        rightYAxisProps={{ domain: [0, 100] }}
                    />
                    <p className="text-sm text-muted-foreground text-center">{currentYear}年</p>
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
                        rightYAxisProps={{ domain: [0, 100] }}
                    />
                    <p className="text-sm text-muted-foreground text-center">
                        {currentYear}年{currentMonth}月
                    </p>
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
                        rightYAxisProps={{ domain: [0, 100] }}
                    />
                    <p className="text-sm text-muted-foreground text-center">
                        {currentYear}年{currentMonth}月{currentDay}日
                    </p>
                </div>
            </div>
        </div>
    );
}
