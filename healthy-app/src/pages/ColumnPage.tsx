import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { columnArticles } from "@/data/mockData"
import { useState } from "react"
import { Link } from "react-router-dom"

const ColumnPage = () => {
  const [visibleArticles, setVisibleArticles] = useState(8)

  const loadMore = () => {
    setVisibleArticles((prev) => Math.min(prev + 4, columnArticles.length))
  }

  return (
    <div className="min-h-screen pb-16 pt-14">
      <div className="max-w-5xl px-8 mx-auto space-y-14">
        {/* Recommended Articles */}
        <div className="grid grid-cols-4 gap-8">
          <div className="px-2 py-6 text-center bg-dark-600">
            <h3 className="font-normal text-primary-300 text-[22px] leading-[27px] tracking-[.11px] font-inter mb-4 relative after:w-[56px] after:h-[1px] after:bg-light after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2">
              RECOMMENDED COLUMN
            </h3>
            <p className="text-light text-lg leading-[26px] font-light">
              オススメ
            </p>
          </div>
          <div className="px-2 py-6 text-center bg-dark-600">
            <h3 className="font-normal text-primary-300 text-[22px] leading-[27px] tracking-[.11px] font-inter mb-4 relative after:w-[56px] after:h-[1px] after:bg-light after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2">
              RECOMMENDED DIET
            </h3>
            <p className="text-light text-lg leading-[26px] font-light">
              ダイエット
            </p>
          </div>
          <div className="px-2 py-6 text-center bg-dark-600">
            <h3 className="font-normal text-primary-300 text-[22px] leading-[27px] tracking-[.11px] font-inter mb-4 relative after:w-[56px] after:h-[1px] after:bg-light after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2">
              RECOMMENDED BEAUTY
            </h3>
            <p className="text-light text-lg leading-[26px] font-light">美容</p>
          </div>
          <div className="px-2 py-6 text-center bg-dark-600">
            <h3 className="font-normal text-primary-300 text-[22px] leading-[27px] tracking-[.11px] font-inter mb-4 relative after:w-[56px] after:h-[1px] after:bg-light after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2">
              RECOMMENDED HEALTH
            </h3>
            <p className="text-light text-lg leading-[26px] font-light">健康</p>
          </div>
        </div>

        {/* All Articles */}
        <div className="mb-8">
          <div className="grid grid-cols-1 gap-x-2 gap-y-[18px] md:grid-cols-2 lg:grid-cols-4">
            {columnArticles.slice(0, visibleArticles).map((article) => (
              <Card
                key={article.id}
                className="gap-0 p-0 overflow-hidden border-0 rounded-none shadow-none cursor-pointer"
              >
                <div className="relative overflow-hidden h-[144px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                  <div className="text-[15px] text-light leading-[24px] bg-primary-300 font-inter absolute bottom-0 left-0 px-2 inline-flex gap-4">
                    <span>{article.date}</span>
                    <span>{article.time}</span>
                  </div>
                </div>
                <CardContent className="text-dark-500 py-[6px] px-0">
                  <h3 className="text-[15px] font-light leading-[22px] tracking-[.08px] line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-primary-400 leading-[22px] tracking-[.06px] font-light"
                      >
                        #{tag}
                      </span>
                    ))}
                    {article.tags.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{article.tags.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {visibleArticles < columnArticles.length && (
            <div className="text-center">
              <div className="flex justify-center mt-[24px]">
                <Button
                  onClick={loadMore}
                  className="px-1 py-3 h-14 w-[296px]"
                  asChild
                >
                  <Link to="#">コラムをもっと見る</Link>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="mt-16">
          <h2 className="mb-6 text-xl font-semibold text-light">カテゴリー</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {[
              { name: "栄養・食事", count: 12, color: "bg-primary-300" },
              { name: "運動・フィットネス", count: 8, color: "bg-primary-400" },
              { name: "睡眠・休息", count: 6, color: "bg-primary-500" },
              { name: "メンタルヘルス", count: 10, color: "bg-primary-300" },
              {
                name: "美容・アンチエイジング",
                count: 7,
                color: "bg-primary-400",
              },
              { name: "健康管理", count: 15, color: "bg-primary-500" },
            ].map((category, index) => (
              <Card
                key={index}
                className="transition-shadow cursor-pointer bg-dark-600 border-gray-400/20 hover:shadow-lg"
              >
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-3 flex items-center justify-center`}
                  >
                    <span className="text-lg font-bold text-dark-600">
                      {category.count}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-light">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColumnPage
