import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function ProgressChart() {
    const data = [
        { date: "2025-09-10", steps: 1000 },
        { date: "2025-09-11", steps: 2000 },
        { date: "2025-09-12", steps: 3000 },
    ];

    return (
        <div className="w-full h-[300px] bg-white p-4 rounded-2xl shadow-md">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="steps"
                        stroke="#8884d8"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ProgressChart;