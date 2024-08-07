import React from 'react'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import { FaBoxOpen } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";


ChartJS.register(CategoryScale, ArcElement, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
function Dashboard() {
    return (
        <Flex flexDir="column" width="100%">
            <Flex width="100%">
                <Card title="Total Products" amount={118} increase={false} percent={3.8} />
                <Card title="Total Transactions" amount={118} increase={true} percent={14.2} />
                <Card title="Total Profit" amount={118} increase={false} percent={1.4} />
                <Card title="Total Brands" amount={118} increase={true} percent={6.5} />

            </Flex>
            <Flex mt="2rem">
                <Box bg="#fff" boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" p="0.8rem" mx="1rem" borderRadius="5px" width="60%">
                    <LineGraph />
                </Box>
                <Box bg="#fff" boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" p="0.8rem" mx="1rem" borderRadius="5px" width="40%">
                    <DoughnutGraph />
                </Box>
            </Flex>
        </Flex>
    )
}

function Card({ title, amount, increase, percent }) {
    return (
        <Box bg="#fff" boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" p="0.8rem" mx="1rem" borderRadius="5px" width="100%">
            <Flex flexDir="column">
                <Flex alignItems="center">
                    <FaBoxOpen color="tomato" />
                    <Text ml="1rem" color="gray">{title}</Text>
                </Flex>
                <Flex mt="1rem" alignItems="center">
                    <Text fontSize="2xl">{amount}</Text>
                    <Spacer />
                    <Flex flexDir="column">
                        {increase ? (<Flex alignItems="center" color='green'>
                            <FaArrowTrendUp fontSize="sm" />
                            <Text ml="0.5rem" fontSize="sm">{percent}%</Text>
                        </Flex>) : (<Flex alignItems="center" color='red'>
                            <FaArrowTrendDown fontSize="sm" />
                            <Text ml="0.5rem" fontSize="sm">{percent}%</Text>
                        </Flex>)}

                        <Text fontSize="xs" color="lightgray">this week</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}


const LineGraph = () => {

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Orders',
            data: [20, 16, 23, 15, 26, 12, 15, 17, 23, 18, 28, 36],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const options = {
        scales: {
            x: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                ticks: {

                    font: {
                        family: "Nunito",
                        size: 12,
                    },
                },
            },
            y: {

                min: 0,
                ticks: {
                    font: {
                        family: "Nunito",
                        size: 12,
                    },
                },
            },
        },
        maintainAspectRatio: false,
        responsive: true,
    };


    return (

        <Line height="300rem" id="home" options={options} data={data} />

    );
};

const DoughnutGraph = () => {
    const data = {
        labels: [
            'Shirt',
            'Dress',
            'Hat'
        ],
        datasets: [{
            label: 'Quantity',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
            ],
            hoverOffset: 4
        }]
    };
    return (
        <Doughnut data={data} />
    )
}

export default Dashboard