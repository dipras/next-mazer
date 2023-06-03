'use client';
import {ApexOptions} from 'apexcharts';
import ApexChart from "@/app/helpers/ApexChart";

export const VisitorChart = () => {
    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        fill: {
            colors: ['#435ebe'],
            opacity: 1
        },
        stroke: {
            colors: ['#435ebe']
        }
    };
    const series = [
        {
            name: "sales",
            data: [9, 20, 30, 20, 10, 20, 30, 20, 10, 20, 30, 20],
        },
    ];


    return (
        <ApexChart options={options} series={series} type="bar" height={300} />
    )
}

export const ProfileVisitChart = () => {
    const series = [70, 30];


    return (
        <ApexChart series={series} type="donut" options={{
            labels: ['Male', 'Female']
        }} />
    )
}

export const ChartEurope = () => {
    var optionsEurope: ApexOptions = {
        chart: {
            height: 80,
            type: "area",
            toolbar: {
                show: false,
            },
        },
        colors: ["#5350e9"],
        stroke: {
            width: 2,
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: "datetime",
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z",
                "2018-09-19T07:30:00.000Z",
                "2018-09-19T08:30:00.000Z",
                "2018-09-19T09:30:00.000Z",
                "2018-09-19T10:30:00.000Z",
                "2018-09-19T11:30:00.000Z",
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    }

    const series = [
        {
            name: "series1",
            data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605],
        },
    ]


    return (
        <ApexChart options={optionsEurope} series={series} type="area" height={80} />
    )
}

export const ChartAmerica = () => {
    var optionsEurope: ApexOptions = {
        chart: {
            height: 80,
            type: "area",
            toolbar: {
                show: false,
            },
        },
        colors: ["#008b75"],
        stroke: {
            width: 2,
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: "datetime",
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z",
                "2018-09-19T07:30:00.000Z",
                "2018-09-19T08:30:00.000Z",
                "2018-09-19T09:30:00.000Z",
                "2018-09-19T10:30:00.000Z",
                "2018-09-19T11:30:00.000Z",
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    }

    const series = [
        {
            name: "series1",
            data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605],
        },
    ]


    return (
        <ApexChart options={optionsEurope} series={series} type="area" height={80} />
    )
}


export const ChartIndonesia = () => {
    var optionsEurope: ApexOptions = {
        chart: {
            height: 80,
            type: "area",
            toolbar: {
                show: false,
            },
        },
        colors: ["#dc3545"],
        stroke: {
            width: 2,
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: "datetime",
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z",
                "2018-09-19T07:30:00.000Z",
                "2018-09-19T08:30:00.000Z",
                "2018-09-19T09:30:00.000Z",
                "2018-09-19T10:30:00.000Z",
                "2018-09-19T11:30:00.000Z",
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    }

    const series = [
        {
            name: "series1",
            data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605],
        },
    ]


    return (
        <ApexChart options={optionsEurope} series={series} type="area" height={80} />
    )
}