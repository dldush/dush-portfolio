import { motion } from "framer-motion";

function App() {
  return (
    <>
      <header className="relative w-full h-screen flex justify-center items-center">
        <div className="relative w-full h-full flex justify-center items-center">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute text-[clamp(2rem,16vw,20rem)] font-['Impact'] z-10 top-[20%] -translate-y-1/2 text-[#c71f1a]"
          >
            LEE YEONHO
          </motion.h1>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/images/profile.png"
            alt="profile"
            className="absolute w-[70%] h-[70%] object-cover z-20"
          />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row justify-between w-full z-10"
          >
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#c71f1a] font-['Impact']">
                  Kyunghee Univ.
                </h2>
                <h3 className="text-lg text-[#c71f1a] font-['Impact']">
                  Economics
                </h3>
                <h3 className="text-lg text-[#c71f1a] font-['Impact']">
                  2023.03 ~ 2027.02
                </h3>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#c71f1a] font-['Impact']">
                  AOMG
                </h2>
                <h3 className="text-lg text-[#c71f1a] font-['Impact']">
                  A&R/Marketing
                </h3>
                <h3 className="text-lg text-[#c71f1a] font-['Impact']">
                  2025.03 ~ 2025.06
                </h3>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#c71f1a] font-['Impact']">
                  SAMSUNG SW Academy
                </h2>
                <h2 className="text-2xl font-bold text-[#c71f1a] font-['Impact']">
                  For Youth
                </h2>
                <h3 className="text-lg text-[#c71f1a] font-['Impact']">
                  2025.03 ~ 2025.06
                </h3>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-[#c71f1a] font-['Impact']">
                Github
              </h2>
              <h2 className="text-2xl font-bold text-[#c71f1a] font-['Impact']">
                Blog
              </h2>
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
}

export default App;
