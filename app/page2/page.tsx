"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { Gift, Sparkles } from "lucide-react"

export default function Page2() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <main className="min-h-screen relative overflow-auto bg-black">


      {/* Background image */}
      <div 
        className="fixed inset-0 bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/bd.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }} 
      />


      {/* Birthday overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-0" />



      {/* Floating sparkles */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        {[...Array(20)].map((_, i) => (

          <motion.div
            key={i}
            className="absolute text-yellow-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1, 0.5],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="w-3 h-3" />
          </motion.div>

        ))}

      </div>




      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 py-20 flex flex-col items-center justify-start">

        <div className="max-w-3xl w-full space-y-8">


          {/* Header */}
          <div className="flex items-center justify-center gap-4 mb-8">

            <Gift className="w-6 h-6 text-yellow-400" fill="currentColor" />

            <div className="text-2xl text-yellow-100 font-light italic">
              Happy Birthday
            </div>

            <Gift className="w-6 h-6 text-yellow-400" fill="currentColor" />

          </div>



          {/* Letter */}
          <div className="backdrop-blur-md bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">


            <div className="text-white/95 text-lg md:text-xl leading-relaxed space-y-6">


              <p className="text-yellow-200 italic">
                Today is not just a date.
              </p>

              <p>
                Today is the celebration of your existence.
              </p>

              <p>
                I simply want to show you, through my eyes, the person you are.
              </p>



              <div className="pt-4 border-l-2 border-yellow-400/40 pl-6">

                <p>
                  You are rare — and that is not an exaggeration.
                </p>

                <p>
                  There is something about you that cannot be copied.
                </p>

              </div>



              <p>
                You kept your inner light.
              </p>

              <p>
                Not in weakness.
              </p>

              <p className="text-yellow-200">
                But in strength.
              </p>



              <p>
                You carry dreams.
              </p>

              <p>
                You carry purpose.
              </p>



              <div className="pt-4 border-l-2 border-yellow-400/40 pl-6">

                <p>
                  You are deep.
                </p>

                <p>
                  And that depth is a gift to this world.
                </p>

              </div>



              <p>
                You are still becoming.
              </p>

              <p className="text-yellow-200 font-medium">
                And that is the beauty of today.
              </p>



              <div className="pt-6">

                <p>
                  Today, I celebrate your journey.
                </p>

                <p>
                  Your strength.
                </p>

                <p>
                  Your existence.
                </p>

              </div>



              <div className="pt-6 border-t border-white/10 space-y-3">

                <p className="text-yellow-200">
                  The world is better because you were born.
                </p>

                <p className="text-yellow-200">
                  And your story is still being written.
                </p>

              </div>



              <p className="font-medium text-xl text-yellow-100 pt-6">

                Happy Birthday.

              </p>



              <div className="pt-8 italic text-white/70 text-base border-t border-white/10">

                <p>
                  I wanted to surprise you in another way…
                </p>

                <p>
                  But your real birthday gift is still coming.
                </p>

              </div>



            </div>



          </div>




          {/* Signature */}
          <div className="text-right backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">

            <Gift className="w-8 h-8 text-yellow-400 mb-2 ml-auto" fill="currentColor" />


            <p className="text-white/90 text-2xl md:text-3xl font-light italic">

              With all my heart,

            </p>


            <p className="text-yellow-200">

              Happy Birthday 🎉

            </p>


          </div>



          <div className="h-20" />


        </div>


      </div>


    </main>

  )

}
