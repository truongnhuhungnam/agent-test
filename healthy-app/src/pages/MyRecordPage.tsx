import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { bodyRecords, exerciseRecords, diaryEntries } from "@/data/mockData"

const MyRecordPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-light mb-2">MY RECORD</h1>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Button className="h-20 bg-primary-300 hover:bg-primary-400 text-dark-600 font-medium text-lg">
            <div className="text-center">
              <div className="text-2xl mb-1">📊</div>
              <div>BODY RECORD</div>
            </div>
          </Button>
          <Button className="h-20 bg-primary-400 hover:bg-primary-500 text-light font-medium text-lg">
            <div className="text-center">
              <div className="text-2xl mb-1">🏃</div>
              <div>MY EXERCISE</div>
            </div>
          </Button>
          <Button className="h-20 bg-primary-500 hover:bg-primary-400 text-light font-medium text-lg">
            <div className="text-center">
              <div className="text-2xl mb-1">📝</div>
              <div>MY DIARY</div>
            </div>
          </Button>
          <Button className="h-20 bg-primary-300 hover:bg-primary-400 text-dark-600 font-medium text-lg">
            <div className="text-center">
              <div className="text-2xl mb-1">⚖️</div>
              <div>体重グラフ</div>
            </div>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Body Fat Percentage Chart */}
          <Card className="bg-dark-600 border-gray-400/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-light">
                  BODY RECORD
                </h2>
                <div className="text-sm text-gray-400">2021.05.21</div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Button
                    size="sm"
                    className="bg-primary-300 hover:bg-primary-400 text-dark-600 font-medium"
                  >
                    日
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-dark-600"
                  >
                    週
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-dark-600"
                  >
                    月
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-dark-600"
                  >
                    年
                  </Button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={bodyRecords}>
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#FFFFFF", fontSize: 12 }}
                    />
                    <YAxis
                      domain={["dataMin - 2", "dataMax + 2"]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#FFFFFF", fontSize: 12 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="weight"
                      stroke="#FFCC21"
                      strokeWidth={3}
                      dot={{ fill: "#FFCC21", strokeWidth: 2, r: 5 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="bodyFat"
                      stroke="#8FE9D4"
                      strokeWidth={3}
                      dot={{ fill: "#8FE9D4", strokeWidth: 2, r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Exercise Records */}
          <Card className="bg-dark-600 border-gray-400/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-light">
                  MY EXERCISE
                </h2>
                <div className="text-sm text-gray-400">2021.05</div>
              </div>
              <div className="space-y-4 max-h-64 overflow-y-auto">
                {exerciseRecords.map((exercise) => (
                  <div
                    key={exercise.id}
                    className="flex items-center justify-between py-3 border-b border-gray-400/20"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                      <div>
                        <div className="text-light font-medium">
                          {exercise.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {exercise.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary-300 font-semibold">
                        {exercise.calories}kcal
                      </div>
                      <div className="text-sm text-gray-400">
                        {exercise.duration}min
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Diary Section */}
        <Card className="bg-dark-600 border-gray-400/20 mt-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-light">MY DIARY</h2>
              <div className="text-sm text-gray-400">2021.05</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {diaryEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="border-l-4 border-primary-300 pl-4"
                >
                  <div className="text-sm text-gray-400 mb-2">{entry.date}</div>
                  <p className="text-light text-sm leading-relaxed whitespace-pre-line">
                    {entry.content}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MyRecordPage
