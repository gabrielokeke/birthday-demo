"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ChevronDown, Gift, Sparkles } from "lucide-react"

export default function Page1() {
  const router = useRouter()

  return (
    <main className="min-h-screen relative overflow-hidden bg-black">

      {/* Fixed background image */}
      <div 
        className="fixed inset-0 bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/bd.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }} 
      />

      {/* Birthday gradient overlay */}
      <div className="fixed inset-0 bg-linear-to-b from-black/80 via-transparent to-black/90 z-0" />
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-yellow-900/20 to-black/70 z-0" />

      {/* Floating sparkles */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">

        <motion.div className="max-w-2xl space-y-8">

          {/* Birthday header icon */}
          <div className="flex justify-center mb-8">
            <Gift className="w-10 h-10 text-yellow-400" fill="currentColor" />
          </div>


          {/* Letter */}
          <div className="backdrop-blur-md bg-white/5 p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl text-center">

            <div className="text-white/95 text-lg md:text-xl leading-relaxed space-y-6">


              <p>
                I look at this photo and I wonder if you still recognize the child you once were.
              </p>

              <p>
                That dreamy look. That almost innocent smile. That quiet shyness that didn’t yet know everything life would teach.
              </p>

              <p>
                You had time to be carefree, to believe everything was simple… before life showed you its realities.
              </p>

              <p>
                There were disappointments. Silences. Moments that leave their mark.
              </p>

              <p className="text-yellow-200">
                But nothing ever managed to take away that light inside you.
              </p>


              <div className="pt-4 border-t border-white/10 mt-8">


                <p>
                  I didn’t know the child you were.
                </p>

                <p>
                  But today, I get to celebrate the person you have become.
                </p>

                <p className="font-medium text-xl text-yellow-100 pt-4">
                  And your birthday is proof of how far you’ve come.
                </p>


              </div>


            </div>


          </div>


          {/* Continue button */}
          <button
            onClick={() => router.push("/page2")}
            className="group w-full mt-12 flex flex-col items-center gap-3 hover:scale-105 transition-all duration-300"
          >

            <div className="backdrop-blur-sm bg-yellow-500/20 px-8 py-3 rounded-full border border-yellow-300/40">

              <span className="text-yellow-100 text-sm tracking-widest uppercase">

                Continue

              </span>

            </div>


            <ChevronDown className="w-8 h-8 text-yellow-300" />


          </button>


          {/* Footer */}
          <p className="text-center text-white/40 text-sm italic pt-8">

            Your birthday story continues...

          </p>


        </motion.div>


      </div>


    </main>
  )
}
