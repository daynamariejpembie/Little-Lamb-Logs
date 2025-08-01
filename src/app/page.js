import Image from "next/image";
import littleLambLogsLogo from "./Images/frontPage.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('./Images/frontPage.png')] h-screen w-screen bg-center bg-cover bg-no-repeat xl:bg-contain xl:max-h-full xl:bg-[#d1f1d1]">
      <h1 className="relative top-20 text-center font-sans font-light text-3xl text-[#0A2a0a] sm:text-5xl sm:font-light sm:top-36 lg:text-7xl xl:static xl:p-20">Welcome</h1>
      
      <div className="flex flex-col items-center absolute bottom-12 space-y-10 text-[#0A2A0A] md:bottom-20 lg:bottom-36 xl:static xl:flex xl:justify-end xl:h-3/4">
        <p className="p-10 text-center sm:text-xl md:text-2xl lg:text-4xl">
          Welcome to Little Lamb Logs, your trusted faith-filled resource for moms on their pregnancy and postpartum journey.
        </p>
      
      <div className="flex justify-center w-full">
        <Link className="border-2 border-[#0a2a0a] p-4 bg-[#0a2a0a] text-white font-semibold md:text-2xl md:p-7 lg:text-4xl lg:p-9" href="./welcome">
          Get Started
        </Link>
      </div>
      </div>
  
    </div>
  );
}
