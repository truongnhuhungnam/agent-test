import React, { useRef } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import type { ChartOptions } from "chart.js"
import { Line } from "react-chartjs-2"
import type { BodyRecord } from "@/data/mockData"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface BodyWeightChartProps {
  data: BodyRecord[]
}

const BodyWeightChart: React.FC<BodyWeightChartProps> = ({ data }) => {
  const chartRef = useRef<ChartJS<"line">>(null)

  const chartData = {
    labels: data.map((record) => record.date),
    datasets: [
      {
        label: "体重",
        data: data.map((record) => record.weight),
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
        pointBackgroundColor: "#FFCC21",
        pointBorderColor: "#FFCC21",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.1,
      },
      {
        label: "体脂肪率",
        data: data.map((record) => record.bodyFat),
        borderColor: "#8FE9D4",
        backgroundColor: "#8FE9D4",
        pointBackgroundColor: "#8FE9D4",
        pointBorderColor: "#8FE9D4",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.1,
      },
    ],
  }

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        borderColor: "#FFCC21",
        borderWidth: 1,
        cornerRadius: 4,
        displayColors: true,
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || ""
            const value = context.parsed.y
            const unit = label === "体重" ? "kg" : "%"
            return `${label}: ${value}${unit}`
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "#777777",
        },
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 12,
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
        min: Math.min(...data.map((d) => Math.min(d.weight, d.bodyFat))) - 2,
        max: Math.max(...data.map((d) => Math.max(d.weight, d.bodyFat))) + 2,
      },
    },
    elements: {
      point: {
        hoverBorderWidth: 2,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  }

  return (
    <div className="h-full w-full">
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  )
}

export default BodyWeightChart
