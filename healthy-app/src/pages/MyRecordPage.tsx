import BodyWeightChart from "@/components/BodyWeightChart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { bodyRecords, diaryEntries, exerciseRecords } from "@/data/mockData"
import { useState } from "react"

const MyRecordPage = () => {
  const [visibleDiaryEntries, setVisibleDiaryEntries] = useState(8)

  const loadMore = () => {
    setVisibleDiaryEntries((prev) => Math.min(prev + 8, diaryEntries.length))
  }

  // Get visible diary entries
  const visibleEntries = diaryEntries.slice(0, visibleDiaryEntries)

  return (
    <div className="min-h-screen pb-16 pt-14">
      <div className="max-w-5xl px-4 lg:px-8 mx-auto space-y-8 lg:space-y-14">
        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          <div
            className="p-4 lg:p-6 transition-opacity cursor-pointer bg-primary-300 hover:opacity-80"
            onClick={() => {
              const el = document.getElementById("body-record")
              if (el) {
                el.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <div className="relative bg-dark-500">
              <img
                src="src/assets/photo/MyRecommend-1.jpg"
                alt="BODY RECORD"
                className="aspect-square object-cover w-full h-[180px] lg:size-[240px] mix-blend-luminosity opacity-25 object-left"
              />
              <div className="text-center space-y-[8px] lg:space-y-[11px] absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
                <h3 className="font-inter text-lg lg:text-[25px] leading-[22px] lg:leading-[30px] tracking-[.13px] text-primary-300">
                  BODY RECORD
                </h3>
                <p className="text-xs lg:text-sm font-light text-light bg-primary-400 p-[2px] w-[120px] lg:w-[160px] text-center">
                  自分のカラダの記録
                </p>
              </div>
            </div>
          </div>
          <div
            className="p-4 lg:p-6 transition-opacity cursor-pointer bg-primary-300 hover:opacity-80"
            onClick={() => {
              const el = document.getElementById("my-exercise")
              if (el) {
                el.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <div className="relative bg-dark-500">
              <img
                src="src/assets/photo/MyRecommend-2.jpg"
                alt="MY EXERCISE"
                className="aspect-square object-cover w-full h-[180px] lg:size-[240px] mix-blend-luminosity opacity-25 object-left"
              />
              <div className="text-center space-y-[8px] lg:space-y-[11px] absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
                <h3 className="font-inter text-lg lg:text-[25px] leading-[22px] lg:leading-[30px] tracking-[.13px] text-primary-300">
                  MY EXERCISE
                </h3>
                <p className="text-xs lg:text-sm font-light text-light bg-primary-400 p-[2px] w-[120px] lg:w-[160px] text-center">
                  自分の運動の記録
                </p>
              </div>
            </div>
          </div>
          <div
            className="p-4 lg:p-6 transition-opacity cursor-pointer bg-primary-300 hover:opacity-80 sm:col-span-2 lg:col-span-1"
            onClick={() => {
              const el = document.getElementById("my-diary")
              if (el) {
                el.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <div className="relative bg-dark-500">
              <img
                src="src/assets/photo/MyRecommend-3.jpg"
                alt="MY DIARY"
                className="aspect-square object-cover w-full h-[180px] lg:size-[240px] mix-blend-luminosity opacity-25"
              />
              <div className="text-center space-y-[8px] lg:space-y-[11px] absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
                <h3 className="font-inter text-lg lg:text-[25px] leading-[22px] lg:leading-[30px] tracking-[.13px] text-primary-300">
                  MY DIARY
                </h3>
                <p className="text-xs lg:text-sm font-light text-light bg-primary-400 p-[2px] w-[120px] lg:w-[160px] text-center">
                  自分の日記
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Body Fat Percentage Chart */}
        <Card
          id="body-record"
          className="p-0 bg-dark-500 h-[250px] lg:h-[304px] overflow-hidden rounded-none border-0 gap-0 shadow-none"
        >
          <CardHeader className="flex pt-4 lg:pt-6 pb-0 pl-4 lg:pl-6">
            <h3 className="text-light font-inter text-sm lg:text-[15px] leading-[16px] lg:leading-[18px] tracking-[.15px] w-[80px] lg:w-[96px]">
              BODY RECORD
            </h3>
            <p className="text-light font-inter text-lg lg:text-[22px] leading-[22px] lg:leading-[27px] tracking-[.11px]">
              2021.05.21
            </p>
          </CardHeader>
          <CardContent className="h-[160px] lg:h-[195px] px-6 lg:px-11">
            <BodyWeightChart data={bodyRecords} sort />
          </CardContent>
        </Card>

        {/* Exercise Records */}
        <Card
          id="my-exercise"
          className="gap-0 p-0 overflow-hidden border-0 rounded-none shadow-none bg-dark-500"
        >
          <CardHeader className="flex pt-3 lg:pt-4 pb-0 pl-4 lg:pl-6">
            <h3 className="text-light font-inter text-sm lg:text-[15px] leading-[16px] lg:leading-[18px] tracking-[.15px] w-[80px] lg:w-[96px]">
              MY EXERCISE
            </h3>
            <p className="text-light font-inter text-lg lg:text-[22px] leading-[22px] lg:leading-[27px] tracking-[.11px]">
              2021.05.21
            </p>
          </CardHeader>
          <CardContent className="px-4 lg:px-6 pt-1 pb-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 overflow-y-auto gap-x-4 lg:gap-x-10 max-h-48">
              {exerciseRecords.map((exercise) => (
                <div
                  key={exercise.id}
                  className="flex items-center justify-between py-[2px] pr-3 border-b border-gray-400"
                >
                  <div className="flex items-center space-x-2 lg:space-x-4">
                    <div className="rounded-full size-[5px] lg:size-[7px] bg-light"></div>
                    <div>
                      <div className="font-light text-xs lg:text-[15px] leading-[16px] lg:leading-[22px] tracking-[.08px] text-light">
                        {exercise.name}
                      </div>
                      <div className="text-xs lg:text-[15px] leading-[16px] lg:leading-[18px] tracking-[.08px] text-primary-300">
                        {exercise.calories}kcal
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm lg:text-[18px] leading-[18px] lg:leading-[22px] tracking-[.09px] font-inter text-primary-300">
                      {exercise.duration}min
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Diary Section */}
        <Card
          id="my-diary"
          className="gap-0 p-0 overflow-hidden border-0 rounded-none shadow-none text-dark-500"
        >
          <CardHeader className="flex p-0">
            <h3 className="font-inter text-lg lg:text-[22px] leading-[22px] lg:leading-[27px] tracking-[.151px]">
              MY DIARY
            </h3>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {visibleEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="p-3 lg:p-4 border-2 border-gray-300"
                >
                  <p className="text-base lg:text-[18px] font-inter leading-[20px] lg:leading-[22px] tracking-[.09px]">
                    {entry.date}
                    <span className="block">{entry.time}</span>
                  </p>
                  <p className="text-xs leading-[15px] lg:leading-[17px] tracking-[.06px] whitespace-pre-line line-clamp-[7]">
                    {entry.content}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          {/* Load More Button */}
          {visibleDiaryEntries < diaryEntries.length && (
            <CardFooter className="justify-center px-0 pt-4 lg:pt-6">
              <Button
                className="px-1 py-3 h-12 lg:h-14 w-[240px] lg:w-[296px] text-sm lg:text-base"
                onClick={loadMore}
              >
                自分の日記をもっと見る
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}

export default MyRecordPage
