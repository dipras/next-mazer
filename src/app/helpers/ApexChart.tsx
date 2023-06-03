'use client';
import {useState, useEffect} from 'react';
import {Props} from 'react-apexcharts';


function ApexChart(props: Props) {
    const [Chart, setChart] = useState<any>();
    const hasType = typeof props?.type !== "undefined";

    useEffect(() => {
        import("react-apexcharts").then((mod) => {
            setChart(() => mod.default);
        });
    }, []);

    return hasType && Chart && <Chart {...props} />;
}

export default ApexChart;