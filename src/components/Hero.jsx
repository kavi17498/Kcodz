import React from 'react'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion'
import Animation from '../assets/Animation.json'

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex justify-between items-center w-full px-10 text-white">
        {/* Left Side - Animated Text and Button */}
        <div className="max-w-xl text-left">
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 text-5xl font-bold"
          >
            Hello there ..!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="mb-5"
          >
            I'm Kavindu Lakshan — a passionate and creative developer and
            designer behind KCodz. I specialize in crafting modern web and
            mobile solutions using tools like React, Flutter, Laravel, and
            .NET. My mission is to turn ideas into meaningful digital
            experiences with clean design, solid code, and user-focused
            functionality.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6 }}
            className="bg-[#FF914C] hover:bg-[#e57f3e] text-white font-semibold py-2 px-4 rounded"
          >
            Explore Services
          </motion.button>
        </div>

        {/* Right Side - Lottie Animation */}
        <div className="hidden md:block w-150">
          <Lottie animationData={Animation} loop={true} />
        </div>
      </div>
    </div>
  )
}

export default Hero
