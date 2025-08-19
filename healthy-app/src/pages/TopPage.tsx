import BodyWeightChart from "@/components/BodyWeightChart"
import CircularProgress from "@/components/CircularProgress"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { bodyRecords, mealRecords } from "@/data/mockData"
import { useState } from "react"

const TopPage = () => {
  const [visibleMeals, setVisibleMeals] = useState(8)
  const [selectedMealType, setSelectedMealType] = useState<string | null>(null)

  const loadMore = () => {
    setVisibleMeals((prev) => Math.min(prev + 8, filteredMealRecords.length))
  }

  // Filter meals by selected type
  const filteredMealRecords = selectedMealType
    ? mealRecords.filter((meal) => meal.type === selectedMealType)
    : mealRecords

  // Get visible meal records
  const visibleMealRecords = filteredMealRecords.slice(0, visibleMeals)

  const handleMealTypeFilter = (mealType: string) => {
    setSelectedMealType(selectedMealType === mealType ? null : mealType)
    setVisibleMeals(8) // Reset to show first 8 meals
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <div className="flex">
        {/* Achievement Rate Chart */}
        <Card className="p-0 w-[42.188vw] h-[312px] overflow-hidden rounded-none border-0 relative shadow-none">
          <CardContent className="h-full p-0">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover filter brightness-200 saturate-150"
              style={{
                backgroundImage: "url(/photo/d01.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
              <div className="mb-4">
                {/* Animated Circular Progress */}
                <div className="relative">
                  <span className="text-lg font-normal text-light leading-[22px] absolute top-1/2 left-[calc(50%-48px)] -translate-x-1/2 -translate-y-1/2 z-[1]">
                    05/21
                  </span>
                  <CircularProgress
                    percentage={75}
                    size={181}
                    strokeWidth={3}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Body Weight Chart */}
        <Card className="p-0 bg-dark-500 w-[57.812vw] h-[312px] overflow-hidden rounded-none border-0 shadow-none">
          <CardContent className="h-full px-16 py-3">
            <BodyWeightChart data={bodyRecords} />
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="p-6">
        <div className="flex justify-center gap-16 mb-8">
          <Button
            variant="hexagon"
            onClick={() => handleMealTypeFilter("morning")}
            className={
              selectedMealType === "morning" ? "ring-2 ring-primary-300" : ""
            }
          >
            <div className="relative flex flex-col items-center z-[1]">
              <div className="mb-1 text-2xl">
                <img
                  src="src/assets/icons/icon_knife.svg"
                  alt=""
                  className="size-[56px]"
                />
              </div>
              <span className="text-xl leading-6">Morning</span>
            </div>
          </Button>
          <Button
            variant="hexagon"
            onClick={() => handleMealTypeFilter("lunch")}
            className={
              selectedMealType === "lunch" ? "ring-2 ring-primary-300" : ""
            }
          >
            <div className="relative flex flex-col items-center z-[1]">
              <div className="mb-1 text-2xl">
                <img
                  src="src/assets/icons/icon_knife.svg"
                  alt=""
                  className="size-[56px]"
                />
              </div>
              <span className="text-xl leading-6">Lunch</span>
            </div>
          </Button>
          <Button
            variant="hexagon"
            onClick={() => handleMealTypeFilter("dinner")}
            className={
              selectedMealType === "dinner" ? "ring-2 ring-primary-300" : ""
            }
          >
            <div className="relative flex flex-col items-center z-[1]">
              <div className="mb-1 text-2xl">
                <img
                  src="src/assets/icons/icon_knife.svg"
                  alt=""
                  className="size-[56px]"
                />
              </div>
              <span className="text-xl leading-6">Dinner</span>
            </div>
          </Button>
          <Button
            variant="hexagon"
            onClick={() => handleMealTypeFilter("snack")}
            className={
              selectedMealType === "snack" ? "ring-2 ring-primary-300" : ""
            }
          >
            <div className="relative flex flex-col items-center z-[1]">
              <div className="mb-1 text-2xl">
                <img
                  src="src/assets/icons/icon_cup.svg"
                  alt=""
                  className="size-[56px]"
                />
              </div>
              <span className="text-xl leading-6">Snack</span>
            </div>
          </Button>
        </div>
      </div>

      {/* Meal History */}
      <div className="max-w-5xl px-8 mx-auto">
        <Card className="p-0 border-0 rounded-none shadow-none gap-7">
          <CardContent className="p-0">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {visibleMealRecords.map((meal) => (
                <div key={meal.id} className="relative text-center">
                  <div className="overflow-hidden aspect-square">
                    <img
                      src={meal.image}
                      alt={`Meal ${meal.id}`}
                      className="object-cover w-full h-full transition-all cursor-pointer hover:scale-105"
                    />
                  </div>
                  <div className="text-[15px] text-light bg-primary-300 font-inter absolute bottom-0 left-0 p-2">
                    <span>
                      {new Date(meal.date)
                        .toLocaleDateString("en-US", {
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace("/", ".")}
                    </span>
                    .<span className="capitalize">{meal.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          {/* Load More Button */}
          {visibleMeals < filteredMealRecords.length && (
            <CardFooter className="justify-center p-0">
              <Button className="px-1 py-3 h-14 w-[296px]" onClick={loadMore}>
                記録をもっと見る
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}

export default TopPage
