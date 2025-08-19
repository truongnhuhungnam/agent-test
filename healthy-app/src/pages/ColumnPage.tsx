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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-light mb-2">COLUMN</h1>
          <p className="text-gray-400">健康に関するコラムをお届けします</p>
        </div>

        {/* Recommended Articles */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-light mb-6">
            おすすめ記事
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columnArticles.slice(0, 3).map((article) => (
              <Card
                key={article.id}
                className="bg-dark-600 border-gray-400/20 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="text-sm text-gray-400 mb-2">
                    {article.date}
                  </div>
                  <h3 className="text-light font-medium mb-3 line-clamp-2 leading-relaxed">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-300/20 text-primary-300 text-xs rounded-full"
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
          <h2 className="text-xl font-semibold text-light mb-6">
            すべての記事
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {columnArticles.slice(0, visibleArticles).map((article) => (
              <Card
                key={article.id}
                className="bg-dark-600 border-gray-400/20 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="text-sm text-gray-400 mb-2">
                    {article.date}
                  </div>
                  <h3 className="text-light font-medium mb-3 line-clamp-3 text-sm leading-relaxed">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-300/20 text-primary-300 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="text-gray-400 text-xs">
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
              className="bg-primary-300 hover:bg-primary-400 text-dark-600 font-medium px-8 py-3"
            >
              記事をもっと見る
            </Button>
          </div>
        )}

        {/* Categories */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-light mb-6">カテゴリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
                className="bg-dark-600 border-gray-400/20 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-3 flex items-center justify-center`}
                  >
                    <span className="text-dark-600 font-bold text-lg">
                      {category.count}
                    </span>
                  </div>
                  <h3 className="text-light font-medium text-sm">
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
