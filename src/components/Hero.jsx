import React from 'react'

function Hero() {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(/hero.png)",
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-xl">
      <h1 className="mb-5 text-5xl font-bold">Hello there ..!</h1>
      <p className="mb-5">
      I'm Kavindu Lakshan — a passionate and creative developer and designer behind KCodz. I specialize in crafting modern web and mobile solutions using tools like React, Flutter, Laravel, and .NET. My mission is to turn ideas into meaningful digital experiences with clean design, solid code, and user-focused functionality.
      </p>
      <button className="btn btn-primary">Explore Services</button>
    </div>
  </div>
</div>
  )
}

export default Hero