import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { bodyRecords, mealRecords } from "@/data/mockData"
import CircularProgress from "@/components/CircularProgress"
import BodyWeightChart from "@/components/BodyWeightChart"

const TopPage = () => {
  // Get recent meal records (last 8)
  const recentMeals = mealRecords.slice(0, 8)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="flex">
        {/* Achievement Rate Chart */}
        <Card className="p-0 w-[42.188vw] h-[312px] overflow-hidden rounded-none border-0 relative">
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
        <Card className="p-0 bg-dark-600 w-[57.812vw] h-[312px] overflow-hidden rounded-none border-0">
          <CardContent className="h-full px-16 py-3">
            <BodyWeightChart data={bodyRecords} />
          </CardContent>
        </Card>
      </div>

      <div className="px-6 py-8">
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-12 lg:grid-cols-4">
          <Button className="h-20 text-lg font-medium bg-primary-300 hover:bg-primary-400 text-dark-600">
            <div className="text-center">
              <div className="mb-1 text-2xl">📊</div>
              <div>体重グラフ</div>
            </div>
          </Button>
          <Button className="h-20 text-lg font-medium bg-primary-400 hover:bg-primary-500 text-light">
            <div className="text-center">
              <div className="mb-1 text-2xl">🍽️</div>
              <div>食事記録</div>
            </div>
          </Button>
          <Button className="h-20 text-lg font-medium bg-primary-500 hover:bg-primary-400 text-light">
            <div className="text-center">
              <div className="mb-1 text-2xl">🏃</div>
              <div>運動記録</div>
            </div>
          </Button>
          <Button className="h-20 text-lg font-medium bg-primary-300 hover:bg-primary-400 text-dark-600">
            <div className="text-center">
              <div className="mb-1 text-2xl">📝</div>
              <div>日記</div>
            </div>
          </Button>
        </div>

        {/* Meal History */}
        <Card className="bg-dark-600 border-gray-400/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-light">食事の記録</h2>
              <Button
                variant="outline"
                className="border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-dark-600"
              >
                記録をもっと見る
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
              {recentMeals.map((meal) => (
                <div key={meal.id} className="text-center">
                  <div className="mb-2 overflow-hidden rounded-lg aspect-square">
                    <img
                      src={meal.image}
                      alt={`Meal ${meal.id}`}
                      className="object-cover w-full h-full transition-transform cursor-pointer hover:scale-105"
                    />
                  </div>
                  <div className="text-xs text-gray-400">
                    <div>{meal.date}</div>
                    <div>{meal.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TopPage
