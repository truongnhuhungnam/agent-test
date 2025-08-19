import { AnimatedGrid, AnimatedGridItem } from "@/components/AnimatedGrid"
import AnimatedButton from "@/components/AnimatedButton"
import BodyWeightChart from "@/components/BodyWeightChart"
import CircularProgress from "@/components/CircularProgress"
import PageTransition from "@/components/PageTransition"
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
    <PageTransition>
      <div className="min-h-screen pb-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Achievement Rate Chart */}
          <Card className="p-0 w-full lg:w-[42.188vw] h-[200px] lg:h-[312px] overflow-hidden rounded-none border-0 relative shadow-none">
            <CardContent className="h-full p-0 cover-primary after:bg-opacity-[99.88] after:mix-blend-soft-light">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage: "url(/photo/d01.jpg)",
                }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center lg:p-8">
                <div className="mb-2 lg:mb-4">
                  {/* Animated Circular Progress */}
                  <div className="relative">
                    <span className="text-base lg:text-lg font-normal text-light leading-[22px] absolute top-1/2 left-1/2 -translate-x-[45px] -translate-y-[10px] z-[1]">
                      05/21
                    </span>
                    <CircularProgress
                      percentage={75}
                      size={120}
                      strokeWidth={3}
                      className="lg:hidden"
                    />
                    <CircularProgress
                      percentage={75}
                      size={181}
                      strokeWidth={3}
                      className="hidden lg:block"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Body Weight Chart */}
          <Card className="p-0 bg-dark-600 w-full lg:w-[57.812vw] h-[200px] lg:h-[312px] overflow-hidden rounded-none border-0 shadow-none">
            <CardContent className="h-full px-4 py-3 lg:px-16">
              <BodyWeightChart data={bodyRecords} />
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="p-4 lg:p-6">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-16">
            <Button
              variant="hexagon"
              onClick={() => handleMealTypeFilter("morning")}
              className={`${
                selectedMealType === "morning" ? "ring-2 ring-primary-300" : ""
              } scale-75 lg:scale-100`}
            >
              <div className="relative flex flex-col items-center z-[1]">
                <div className="mb-1 text-2xl">
                  <img
                    src="src/assets/icons/icon_knife.svg"
                    alt=""
                    className="size-[42px] lg:size-[56px]"
                  />
                </div>
                <span className="text-base leading-6 lg:text-xl">Morning</span>
              </div>
            </Button>
            <Button
              variant="hexagon"
              onClick={() => handleMealTypeFilter("lunch")}
              className={`${
                selectedMealType === "lunch" ? "ring-2 ring-primary-300" : ""
              } scale-75 lg:scale-100`}
            >
              <div className="relative flex flex-col items-center z-[1]">
                <div className="mb-1 text-2xl">
                  <img
                    src="src/assets/icons/icon_knife.svg"
                    alt=""
                    className="size-[42px] lg:size-[56px]"
                  />
                </div>
                <span className="text-base leading-6 lg:text-xl">Lunch</span>
              </div>
            </Button>
            <Button
              variant="hexagon"
              onClick={() => handleMealTypeFilter("dinner")}
              className={`${
                selectedMealType === "dinner" ? "ring-2 ring-primary-300" : ""
              } scale-75 lg:scale-100`}
            >
              <div className="relative flex flex-col items-center z-[1]">
                <div className="mb-1 text-2xl">
                  <img
                    src="src/assets/icons/icon_knife.svg"
                    alt=""
                    className="size-[42px] lg:size-[56px]"
                  />
                </div>
                <span className="text-base leading-6 lg:text-xl">Dinner</span>
              </div>
            </Button>
            <Button
              variant="hexagon"
              onClick={() => handleMealTypeFilter("snack")}
              className={`${
                selectedMealType === "snack" ? "ring-2 ring-primary-300" : ""
              } scale-75 lg:scale-100`}
            >
              <div className="relative flex flex-col items-center z-[1]">
                <div className="mb-1 text-2xl">
                  <img
                    src="src/assets/icons/icon_cup.svg"
                    alt=""
                    className="size-[42px] lg:size-[56px]"
                  />
                </div>
                <span className="text-base leading-6 lg:text-xl">Snack</span>
              </div>
            </Button>
          </div>
        </div>

        {/* Meal History */}
        <div className="max-w-5xl px-4 mx-auto lg:px-8">
          <Card className="p-0 border-0 rounded-none shadow-none gap-7">
            <CardContent className="p-0">
              <AnimatedGrid className="grid grid-cols-2 gap-1 lg:gap-2 md:grid-cols-4">
                {visibleMealRecords.map((meal) => (
                  <AnimatedGridItem key={meal.id}>
                    <div className="relative text-center">
                      <div className="overflow-hidden aspect-square">
                        <img
                          src={meal.image}
                          alt={`Meal ${meal.id}`}
                          className="object-cover w-full h-full transition-transform cursor-pointer hover:scale-105"
                        />
                      </div>
                      <div className="text-xs lg:text-[15px] text-light bg-primary-300 font-inter absolute bottom-0 left-0 p-1 lg:p-2">
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
                  </AnimatedGridItem>
                ))}
              </AnimatedGrid>
            </CardContent>
            {/* Load More Button */}
            {visibleMeals < filteredMealRecords.length && (
              <CardFooter className="justify-center p-0">
                <AnimatedButton
                  className="px-1 py-3 h-12 lg:h-14 w-[240px] lg:w-[296px] text-sm lg:text-base bg-gradient-to-b from-primary-300 to-primary-400 text-light font-light rounded-sm transition-colors hover:from-primary-400 hover:to-primary-500"
                  onClick={loadMore}
                >
                  記録をもっと見る
                </AnimatedButton>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </PageTransition>
  )
}

export default TopPage
