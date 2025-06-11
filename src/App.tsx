import { motion } from "framer-motion";

function App() {
  return (
    <>
      <header className="flex flex-col w-full h-screen justify-start items-center">
        <div className="w-full h-full flex flex-col justify-start items-center">
          <h1 className="text-[clamp(2rem,19vw,20rem)] font-bold text-primary font-['Impact']">
            LEE YEONHO
          </h1>
          <img
            src="/images/profile.png"
            alt="profile"
            className="absolute mt-50 w-[70%] h-[70%] object-cover z-20"
          />
          <div className="flex flex-row justify-between w-full z-10 px-27">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-primary font-['Impact']">
                  Kyunghee Univ.
                </h2>
                <h3 className="text-lg text-primary font-['Impact']">
                  Economics
                </h3>
                <h3 className="text-secondary font-['Impact']">
                  2015.03 ~ 2022.02
                </h3>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-primary font-['Impact']">
                  AOMG
                </h2>
                <h3 className="text-lg text-primary font-['Impact']">
                  A&R/Marketing
                </h3>
                <h3 className="text-secondary font-['Impact']">
                  2021.12 ~ 2022.08
                </h3>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-primary font-['Impact']">
                  SAMSUNG SW Academy
                </h2>
                <h2 className="text-2xl font-bold text-primary font-['Impact']">
                  For Youth
                </h2>
                <h3 className="text-secondary font-['Impact']">
                  2024.06 ~ 2025.06
                </h3>
              </div>
            </div>
            <div className="flex flex-col">
              <a
                href="https://github.com/dldush"
                target="_blank"
                rel="noopener noreferrer" //NOTE - window.opener 방지
                className="text-2xl font-bold text-primary font-['Impact']"
              >
                Github
              </a>
              <a
                href="https://dush.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-primary font-['Impact']"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full z-30">
          <div className="text-tertiary font-['Impact'] flex flex-row gap-13 text-4xl mb-24 w-full justify-center [-webkit-text-emphasis:none]">
            <span>f</span>
            <span>r</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>-</span>
            <span>e</span>
            <span>n</span>
            <span>d</span>
            <span> </span>
            <span>d</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </div>
        </div>
      </header>
      <main className="flex flex-col w-full h-screen justify-start items-center px-20 pt-10">
        <div className="flex flex-col w-full h-full justify-start items-center">
          <h1 className="text-4xl font-bold text-primary font-['Impact']">
            About
          </h1>
        </div>
      </main>
    </>
  );
}

export default App;
