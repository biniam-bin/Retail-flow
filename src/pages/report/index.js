import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Report() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Revenue",
        data: [65, 59, 80, 81, 56, 55, 40, 35, 51, 42, 23, 62],
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgb(75, 192, 192)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
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
    <Flex width="100%" flexDir="column">
      <Flex alignItems="start" flexDir="column">
        <Heading size="lg">Report</Heading>
        <Flex my="1rem" alignItems="center">
          <Text>Year</Text>
          <FormControl>
            <NumberInput
              size="sm"
              width="5rem"
              p="0"
              mx="1rem"
              defaultValue={2024}
            >
              <NumberInputField size="sm" m="0" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Flex width="100%">
            <Box
              bg="#007bff"
              color="white"
              borderRadius={5}
              cursor="pointer"
              my="1.2rem"
              p="0.5rem 1rem"
            >
              <Text fontSize="sm" size="xl">
                Apply
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex width="100%" height="80">
        <Bar data={data} options={options} />
      </Flex>
      <Flex></Flex>
    </Flex>
  );
}

export default Report;
