// pages/index.js

import { useState } from "react";


export default function Home() {
    const [pingResult, setPingResult] = useState("");

    const handlePing = async () => {
        const startTime = new Date();
        const response = await fetch("/api/ping"); // We'll create this API route next
        const endTime = new Date();
        const latency = endTime - startTime;
        const result = await response.json();
        setPingResult(`Response: ${result.message}, Latency: ${latency}ms`);
    };

    return (
        <div>
            <style jsx>{`
                div {
                    text-align: center;
                    margin-top: 50px;
                }
                button {
                    background-color: #0070f3;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
        `}</style>
            <h1>Ping Test</h1>
            <button onClick={handlePing}>Ping</button>
            <p>{pingResult}</p>
        </div>
    );
}
