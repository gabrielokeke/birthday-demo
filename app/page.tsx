"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Gift } from "lucide-react"

export default function PasswordPage() {
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState<"idle" | "error" | "success" | "loading">("idle")
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password === "demo123") {
      setStatus("success")
      setTimeout(() => setStatus("loading"), 1000)
      setTimeout(() => {
        localStorage.setItem("auth", "true")
        router.push("/page1")
      }, 2500)
    } else {
      setStatus("error")
    }
  }

  return (
    <main className="min-h-screen bg-black relative flex items-center justify-center px-6 text-white overflow-hidden">

      {/* Background image */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/bd.jpg')",
          backgroundSize: "cover"
        }} 
      />

      {/* Birthday gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-yellow-900/40 to-black/80 z-0" />

      {/* Floating gifts */}
      {mounted && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400/20"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 50,
                rotate: Math.random() * 360 
              }}
              animate={{ 
                y: -100,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                rotate: Math.random() * 360 + 360
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
            >
              <Gift className="w-8 h-8" fill="currentColor" />
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 w-full max-w-md"
      >

        {/* Birthday header */}
        <div className="text-center mb-12 space-y-4">

          <Gift className="w-12 h-12 mx-auto text-yellow-400 mb-4" fill="currentColor" />

          <h1 className="text-4xl md:text-5xl font-light tracking-wider">
            Happy Birthday
          </h1>

          <p className="text-lg text-white/70 italic">
            A special message written just for your birthday
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl"
        >

          <div className="space-y-2">

            <label className="text-sm text-white/80 uppercase">
              Enter the password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white outline-none border border-white/20 focus:border-yellow-400/50"
              disabled={status === "loading"}
            />

          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-yellow-400 to-yellow-600 text-black py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all uppercase text-sm"
            disabled={status === "loading"}
          >

            {status === "loading"
              ? "Preparing your birthday surprise..."
              : "Unlock"}
              
          </button>

          {status === "error" && (
            <p className="text-yellow-300 text-sm text-center italic">
              Not quite right... Try again, birthday star.
            </p>
          )}

          {status === "success" && (
            <p className="text-green-300 text-sm text-center italic">
              Perfect... Your birthday surprise awaits.
            </p>
          )}

        </form>

        <p className="text-center mt-8 text-white/50 text-sm italic">
          Every word here was written to celebrate you 🎉
        </p>

      </motion.div>

    </main>
  )
}
