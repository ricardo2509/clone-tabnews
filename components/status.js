import React, { useState, useEffect } from "react";
import s from "/pages/style.module.css";

const Status = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dbVersion, setDbVersion] = useState("1");
    const [maxConn, setMaxConn] = useState(1);
    const [openConn, setOpenConn] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const host =
                    process.env.NODE_ENV === "development"
                        ? process.env.NEXT_PUBLIC_HOST
                        : "";
                console.log(
                    "Fetching status data... ==>" +
                        process.env.NEXT_PUBLIC_HOST +
                        " --- " +
                        process.env.HOST_NAME,
                );
                const response = await fetch(host + "/api/v1/status");

                setIsLoading(false);

                const responseBody = await response.json();
                const updated_at_is = new Date(
                    responseBody.updated_at,
                ).toISOString();
                const dbVersion = responseBody.dependencies.database.version;
                setDbVersion(responseBody.dependencies.database.version);
                setMaxConn(responseBody.dependencies.database.max_connections);
                setOpenConn(
                    responseBody.dependencies.database.open_connections,
                );
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts

    if (isLoading) {
        return <p>Loading data...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <div>
                <label className={`${s.label} ${s.w40} ${s.fl}`}>
                    Version DB:
                </label>
                <label className={`${s.label} ${s.w20} ${s.fl}`}>
                    {dbVersion}
                </label>
            </div>
            <div>
                <label className={`${s.label} ${s.w40} ${s.fl}`}>
                    Max Connections:{" "}
                </label>
                <label className={`${s.label} ${s.w20} ${s.fl}`}>
                    {maxConn}
                </label>
            </div>
            <div>
                <label className={`${s.label} ${s.w40} ${s.fl}`}>
                    Open Connections
                </label>
                <label className={`${s.label} ${s.w20} ${s.fl}`}>
                    {openConn}
                </label>
            </div>
        </div>
    );
};

export default Status;
