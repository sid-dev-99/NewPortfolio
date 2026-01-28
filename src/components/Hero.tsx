// "use client";
// import React, { useState, useEffect } from "react";
// import { BackgroundBeams } from "./ui/background-beams";
// import { Button } from "./ui/moving-border";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const [displayText, setDisplayText] = useState("");
//   const fullText = "Hi, I'm Siddharth";

//   useEffect(() => {
//     let index = 0;
//     const typeInterval = setInterval(() => {
//       if (index < fullText.length) {
//         setDisplayText(fullText.slice(0, index + 1));
//         index++;
//       } else {
//         clearInterval(typeInterval);
//       }
//     }, 80);

//     return () => clearInterval(typeInterval);
//   }, []);

//   return (
//     <div className="min-h-[60vh] sm:h-[40rem] w-full rounded-2xl bg-neutral-950 relative flex flex-col items-center justify-center antialiased px-4 overflow-hidden">
//       <div className="max-w-2xl mx-auto p-4 z-10 flex flex-col items-center text-center">
//         {/* Floating Avatar */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="relative mb-6 sm:mb-8"
//         >
//           <motion.div
//             animate={{
//               y: [0, -8, 0],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//             className="relative"
//           >
//             {/* Glow ring */}
//             <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 rounded-full opacity-50 blur-lg animate-pulse" />

//             <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
//               <Image
//                 src="/profile.jpeg"
//                 alt="Siddharth Sharma"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Typing Animation Heading */}
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="relative z-10 text-3xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-200 to-neutral-400 text-center font-sans font-bold min-h-[1.2em]"
//         >
//           {displayText}
//           <motion.span
//             animate={{ opacity: [1, 0] }}
//             transition={{ repeat: Infinity, duration: 0.7 }}
//             className="inline-block w-[3px] h-[0.9em] ml-1 bg-gradient-to-b from-violet-400 to-fuchsia-500 rounded-full align-middle"
//           />
//         </motion.h1>

//         {/* Subtitle with gradient underline */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className="mt-4 sm:mt-6"
//         >
//           <p className="text-neutral-400 max-w-lg mx-auto text-sm sm:text-base text-center relative z-10 px-2 leading-relaxed">
//             A <span className="text-neutral-200 font-medium">22yo developer</span> living in Bangalore, India.
//             <br className="hidden sm:block" />
//             {" "}I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-medium">premium web applications</span> with modern technologies.
//           </p>
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7, duration: 0.5 }}
//           className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 z-10"
//         >
//           <Button
//             borderRadius="1.75rem"
//             className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm sm:text-base px-6 py-2"
//           >
//             Download CV
//           </Button>
//           <a
//             href="#projects"
//             className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-neutral-300 text-sm sm:text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
//           >
//             View Projects
//             <span className="text-lg">→</span>
//           </a>
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 0.5 }}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//             className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
//           >
//             <motion.div
//               animate={{ opacity: [1, 0], y: [0, 12] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//               className="w-1.5 h-1.5 bg-white/60 rounded-full"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//       <BackgroundBeams />
//     </div>
//   );
// };

// export default Hero;
