import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { Badge } from "./ui/badge"
import { useAuth } from "@/contexts/AuthContext"

const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { isAuthenticated, logout, user } = useAuth()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const menus = [
    {
      id: 1,
      name: "自分の記録",
      path: "/record",
      icon: "/icons/icon_memo.svg",
    },
    {
      id: 2,
      name: "チャレンジ",
      path: "#",
      icon: "/icons/icon_challenge.svg",
    },
    {
      id: 3,
      name: "お知らせ",
      path: "#",
      icon: "/icons/icon_info.svg",
      notification: "1",
    },
  ]

  const footerMenus = [
    { id: 1, name: "会員登録", path: "/" },
    { id: 2, name: "運営会社", path: "/" },
    { id: 3, name: "利用規約", path: "/" },
    { id: 4, name: "個人情報の取扱について", path: "/" },
    { id: 5, name: "特定商取引法に基づく表記", path: "/" },
    { id: 6, name: "お問い合わせ", path: "/" },
  ]

  // Additional menu items for the dropdown
  const dropdownMenus = isAuthenticated
    ? [
        {
          id: 4,
          name: "自分の記録",
          path: "/record",
        },
        {
          id: 5,
          name: "体重グラフ",
          path: "/",
        },
        { id: 6, name: "目標", path: "/" },
        {
          id: 7,
          name: "選択中のコース",
          path: "/",
        },
        {
          id: 8,
          name: "コラム一覧",
          path: "/column",
        },
        { id: 9, name: "設定", path: "/" },
      ]
    : [
        {
          id: 8,
          name: "コラム一覧",
          path: "/column",
        },
      ]

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
    navigate("/column")
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Header */}
      <header className="bg-dark-500 fixed top-0 left-0 right-0 z-[50] shadow-[0_3px_6px_rgba(0,0,0,0.1608)]">
        <div className="max-w-5xl px-4 mx-auto lg:px-8">
          <div className="flex items-center justify-between h-12 lg:h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="transition-all hover:opacity-80">
                <h1>
                  <img
                    src="src/assets/logo.svg"
                    alt="Healthy"
                    className="w-[100px] lg:w-[144px] h-[44px] lg:h-[64px]"
                  />
                </h1>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex items-center">
              {/* Desktop Navigation */}
              <div className="items-center hidden md:flex">
                {isAuthenticated ? (
                  <>
                    {menus.map((menu) => (
                      <Link
                        key={menu.id}
                        to={menu.path}
                        className={`flex items-center pl-2 pr-4 py-2 text-sm lg:text-base font-light transition-colors w-32 lg:w-40 ${
                          isActive(menu.path)
                            ? "text-primary-400"
                            : "text-light hover:text-primary-400"
                        }`}
                      >
                        <div className="relative">
                          <img
                            src={menu.icon}
                            alt={menu.name}
                            className="size-5 lg:size-6 mr-[6px] lg:mr-[8px]"
                          />
                          {menu.notification && (
                            <Badge className="absolute text-xs -top-1 -right-1">
                              {menu.notification}
                            </Badge>
                          )}
                        </div>
                        <span className="hidden lg:inline">{menu.name}</span>
                      </Link>
                    ))}
                    <div className="flex items-center py-2 pl-2 pr-4 text-sm font-light lg:text-base text-primary-300">
                      <span className="hidden lg:inline">
                        Welcome, {user?.username}
                      </span>
                    </div>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center py-2 pl-2 pr-4 text-sm font-light transition-colors lg:text-base text-light hover:text-primary-400"
                  >
                    <span>Login</span>
                  </Link>
                )}
              </div>

              {/* Menu button with dropdown */}
              <div className="relative ml-2 lg:ml-4" ref={menuRef}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-1 lg:p-2 hover:bg-primary-400/5"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? (
                    <img
                      src="/icons/icon_close.svg"
                      alt="Menu"
                      className="size-5 lg:size-6"
                    />
                  ) : (
                    <img
                      src="/icons/icon_menu.svg"
                      alt="Menu"
                      className="size-5 lg:size-6"
                    />
                  )}
                </Button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div className="absolute right-0 top-full w-[240px] lg:w-[280px] bg-gray-400 z-50 hidden lg:block">
                    <div>
                      {dropdownMenus.map((menu) => (
                        <Link
                          key={menu.id}
                          to={menu.path}
                          className="flex items-center px-6 lg:px-8 py-[18px] lg:py-[23px] text-base lg:text-lg font-light text-light border-t border-b hover:bg-dark-600/25 transition-colors border-t-light/15 border-b-dark-600/25"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {menu.name}
                        </Link>
                      ))}
                      {isAuthenticated && (
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-6 lg:px-8 py-[18px] lg:py-[23px] text-base lg:text-lg font-light text-primary-400 border-t hover:bg-dark-600/25 transition-colors border-t-light/15"
                        >
                          Logout
                        </button>
                      )}
                      {!isAuthenticated && (
                        <Link
                          to="/login"
                          className="flex items-center px-6 lg:px-8 py-[18px] lg:py-[23px] text-base lg:text-lg font-light text-primary-400 border-t hover:bg-dark-600/25 transition-colors border-t-light/15"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Login
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden border-t border-gray-400/20 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-600">
            {isAuthenticated ? (
              <>
                {menus.map((menu) => (
                  <Link
                    key={menu.id}
                    to={menu.path}
                    className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(menu.path)
                        ? "text-primary-300 bg-dark-500"
                        : "text-light hover:text-primary-300 hover:bg-dark-500"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img
                      src={menu.icon}
                      alt={menu.name}
                      className="mr-3 size-5"
                    />
                    {menu.name}
                  </Link>
                ))}
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center px-3 py-2 text-sm font-medium transition-colors text-light hover:text-primary-300 hover:bg-dark-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}

            {/* Additional mobile menu items */}
            <div className="pt-2 mt-2 border-t border-gray-400/20">
              {dropdownMenus.map((menu) => (
                <Link
                  key={menu.id}
                  to={menu.path}
                  className="flex items-center px-3 py-2 text-sm font-medium transition-colors text-light hover:text-primary-300 hover:bg-dark-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.name}
                </Link>
              ))}
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-3 py-2 text-sm font-medium transition-colors text-primary-400 hover:text-primary-300 hover:bg-dark-500"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-screen pb-16 mt-12 pt-14 lg:mt-16">
        <Outlet />
      </main>

      {/* Scroll to top button */}
      <div
        className="fixed z-50 transition-opacity cursor-pointer bottom-8 lg:bottom-1/3 right-4 lg:right-16 hover:opacity-80"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src="src/assets/icons/to_top.svg"
          alt="Scroll to top"
          className="size-10 lg:size-12"
        />
      </div>

      {/* Footer */}
      <footer className="py-8 bg-dark-600 lg:py-14">
        <div className="max-w-5xl px-4 mx-auto lg:px-8">
          <div className="flex flex-wrap gap-4 lg:gap-[45px]">
            {footerMenus.map((menu) => (
              <Link
                key={menu.id}
                to={menu.path}
                className="text-light font-light hover:text-primary-300 transition-colors text-[10px] lg:text-[11px] tracking-[.03px]"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
