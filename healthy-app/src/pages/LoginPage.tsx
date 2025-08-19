import { useState } from "react"
import { Navigate, useNavigate, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Redirect if already authenticated
  if (isAuthenticated) {
    const from = (location.state as any)?.from?.pathname || "/"
    return <Navigate to={from} replace />
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const success = await login(username, password)
      if (success) {
        const from = (location.state as any)?.from?.pathname || "/"
        navigate(from, { replace: true })
      } else {
        setError("Invalid username or password")
      }
    } catch (err) {
      setError("An error occurred during login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-500 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-dark-600 border-gray-400/20 shadow-2xl">
          <CardHeader className="text-center pb-4">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <img
                src="src/assets/logo.svg"
                alt="Healthy"
                className="w-32 h-12 mx-auto mb-4"
              />
              <h1 className="text-2xl font-normal text-light mb-2">
                Welcome Back
              </h1>
              <p className="text-sm text-gray-300 font-light">
                Please sign in to access your health dashboard
              </p>
            </motion.div>
          </CardHeader>

          <CardContent className="space-y-6">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="text-sm font-light text-light"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-500 border border-gray-400/30 rounded-sm text-light placeholder-gray-400 focus:outline-none focus:border-primary-300 transition-colors"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-light text-light"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-500 border border-gray-400/30 rounded-sm text-light placeholder-gray-400 focus:outline-none focus:border-primary-300 transition-colors"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-500/10 border border-red-500/20 rounded-sm"
                >
                  <p className="text-sm text-red-400">{error}</p>
                </motion.div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 h-12 bg-gradient-to-b from-primary-300 to-primary-400 hover:from-primary-400 hover:to-primary-500 text-light font-light rounded-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-light border-t-transparent rounded-full"
                  />
                ) : (
                  "Sign In"
                )}
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="pt-4 border-t border-gray-400/20"
            >
              <div className="bg-dark-500/50 p-4 rounded-sm">
                <p className="text-xs text-gray-300 text-center mb-2">
                  Demo Credentials:
                </p>
                <div className="space-y-1 text-center">
                  <p className="text-sm text-primary-300 font-mono">
                    Username: <span className="text-light">admin</span>
                  </p>
                  <p className="text-sm text-primary-300 font-mono">
                    Password: <span className="text-light">admin</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default LoginPage
