import { useEffect, useState } from "react"

interface CircularProgressProps {
  percentage: number
  size?: number
  strokeWidth?: number
  className?: string
}

const CircularProgress = ({
  percentage,
  size = 180,
  strokeWidth = 8,
  className = "",
}: CircularProgressProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset =
    circumference - (animatedPercentage / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="transparent"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#FFFFFF"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all ease-out duration-2000"
          style={{
            filter: "drop-shadow(0 0 6px rgba(255, 204, 33, 0.4))",
          }}
        />
      </svg>

      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center translate-x-[30px]">
        <span className="text-white text-[25px] leading-[30px]">
          {Math.round(animatedPercentage)}%
        </span>
      </div>
    </div>
  )
}

export default CircularProgress
