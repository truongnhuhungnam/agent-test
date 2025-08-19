import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { columnArticles } from "@/data/mockData"
import { useState } from "react"

const ColumnPage = () => {
  const [visibleArticles, setVisibleArticles] = useState(8)

  const loadMore = () => {
    setVisibleArticles((prev) => Math.min(prev + 4, columnArticles.length))
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-5xl px-8 mx-auto">
        {/* Recommended Articles */}
        <div className="mb-12">
          <h2 className="mb-6 text-xl font-semibold text-light">
            おすすめ記事
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {columnArticles.slice(0, 3).map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden transition-shadow cursor-pointer bg-dark-600 border-gray-400/20 hover:shadow-lg"
              >
                <div className="overflow-hidden aspect-video">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 text-sm text-gray-400">
                    {article.date}
                  </div>
                  <h3 className="mb-3 font-medium leading-relaxed text-light line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-primary-300/20 text-primary-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className="mb-8">
          <h2 className="mb-6 text-xl font-semibold text-light">
            すべての記事
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {columnArticles.slice(0, visibleArticles).map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden transition-shadow cursor-pointer bg-dark-600 border-gray-400/20 hover:shadow-lg"
              >
                <div className="overflow-hidden aspect-square">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 text-sm text-gray-400">
                    {article.date}
                  </div>
                  <h3 className="mb-3 text-sm font-medium leading-relaxed text-light line-clamp-3">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-primary-300/20 text-primary-300"
                      >
                        #{tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="text-xs text-gray-400">
                        +{article.tags.length - 2}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {visibleArticles < columnArticles.length && (
          <div className="text-center">
            <Button
              onClick={loadMore}
              className="px-8 py-3 font-medium bg-primary-300 hover:bg-primary-400 text-dark-600"
            >
              記事をもっと見る
            </Button>
          </div>
        )}

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
