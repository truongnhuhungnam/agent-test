import React, { useRef, useState, useMemo } from "react"
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

type TimePeriod = "日" | "週" | "月" | "年"

interface BodyWeightChartProps {
  data: BodyRecord[]
  sort?: boolean
}

const BodyWeightChart: React.FC<BodyWeightChartProps> = ({ data, sort }) => {
  const chartRef = useRef<ChartJS<"line">>(null)
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("年")

  // Filter data based on selected time period
  const filteredData = useMemo(() => {
    switch (selectedPeriod) {
      case "日":
        // For daily view, show last 7 days of data
        return data.slice(-7)
      case "週":
        // For weekly view, show last 4 weeks of data
        return data.slice(-4)
      case "月":
        // For monthly view, show all data (default)
        return data
      case "年":
        // For yearly view, show data grouped by quarters or all data
        return data
      default:
        return data
    }
  }, [data, selectedPeriod])

  const chartData = {
    labels: filteredData.map((record) => record.date),
    datasets: [
      {
        label: "体重",
        data: filteredData.map((record) => record.weight),
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
        data: filteredData.map((record) => record.bodyFat),
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
        min:
          Math.min(...filteredData.map((d) => Math.min(d.weight, d.bodyFat))) -
          2,
        max:
          Math.max(...filteredData.map((d) => Math.max(d.weight, d.bodyFat))) +
          2,
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

  const timePeriods: TimePeriod[] = ["日", "週", "月", "年"]

  return (
    <div className="w-full h-full">
      {/* Chart */}
      <div className="h-full">
        <Line ref={chartRef} data={chartData} options={options} />
      </div>

      {/* Time period filter buttons */}
      {sort && (
        <div className="flex gap-4 py-2">
          {timePeriods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-[1px] rounded-full transition-colors font-light text-[15px] leading-[22px] tracking-[.08px] w-[56px] ${
                selectedPeriod === period
                  ? "bg-[#FFCC21] text-white"
                  : "bg-white text-primary-300"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default BodyWeightChart
