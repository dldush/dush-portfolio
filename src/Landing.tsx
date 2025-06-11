import { motion } from "framer-motion";

function Landing() {
  return (
    <>
      <header className="flex flex-col w-full h-screen justify-start items-center font-['Impact']">
        <div className="w-full h-full flex flex-col justify-start items-center gap-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[clamp(2rem,19vw,20rem)] font-bold text-primary">
              LEE YEONHO
            </h1>
            <span className="flex justify-end text-tertiary w-full px-5 -mt-20">
              2025 July
            </span>
            <img
              src="/images/profile.png"
              alt="profile"
              className="absolute mt-175 w-[70%] h-[70%] object-cover z-20"
            />
          </div>
          <div className="flex flex-row justify-between w-full z-10 px-27">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-primary">
                  Kyunghee Univ.
                </h2>
                <h3 className="text-lg text-primary">Economics</h3>
                <h3 className="text-secondary">2015.03 ~ 2022.02</h3>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-primary">AOMG</h2>
                <h3 className="text-lg text-primary">A&R/Marketing</h3>
                <h3 className="text-secondary">2021.12 ~ 2022.08</h3>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-primary">
                  SAMSUNG SW Academy
                </h2>
                <h2 className="text-2xl font-bold text-primary">For Youth</h2>
                <h3 className="text-secondary">2024.06 ~ 2025.06</h3>
              </div>
            </div>
            <div className="flex flex-col">
              <a
                href="https://github.com/dldush"
                target="_blank"
                rel="noopener noreferrer" //NOTE - window.opener 방지
                className="text-2xl font-bold text-primary"
              >
                Github
              </a>
              <a
                href="https://dush.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-primary"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full z-30">
          <div className="text-tertiary flex flex-row flex-wrap justify-center text-4xl mb-24 w-full px-20">
            <div className="flex flex-row gap-13">
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
            </div>
            <div className="flex flex-row gap-13">
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
        </div>
      </header>
    </>
  );
}

export default Landing;
