import { motion } from "framer-motion";
import Landing from "./Landing";

function App() {
  return (
    <>
      <Landing />
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
