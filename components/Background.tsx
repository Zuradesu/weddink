"use client";

import { motion } from "framer-motion";

export default function Background() {
return ( <div className="fixed inset-0 z-0 overflow-hidden bg-[#2c241d]">

```
  {/* VIDEO */}
  <motion.video
    className="absolute inset-0 h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 1.5,
      ease: "easeOut",
    }}
  >
    <source
      src="/videos/rawr.mp4"
      type="video/mp4"
    />
  </motion.video>

  {/* SOFT DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/20" />

  {/* WARM JAVANESE TONE */}
  <div className="absolute inset-0 bg-[#5b4630]/20 mix-blend-multiply" />

  {/* VIGNETTE */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(25,18,12,0.35)_100%)]" />

</div>

  )
};
