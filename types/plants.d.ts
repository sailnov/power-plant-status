type PowerPlant = {
    id: number;
    name: string;
    status: "ON" | "OFF" | "ERR";
    webcamImagePath: string[];
    monthly_generations: (number | null)[];
    monthly_utilization: (number | null)[];
    daily_generations: (number | null)[];
    daily_utilization: (number | null)[];
    hourly_generations: (number | null)[];
    hourly_utilization: (number | null)[];
};
