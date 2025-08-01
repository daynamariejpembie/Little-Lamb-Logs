import Image from "next/image";
import littleLambLogsLogo from "./Images/frontPage.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('./Images/frontPage.png')] h-screen w-screen bg-center bg-cover bg-no-repeat sm:bg-contain sm:bg-[#d1f1d1] xl:bg-contain xl:max-h-full xl:bg-[#d1f1d1]">
      <h1 className="relative top-20 text-center font-sans font-light text-3xl text-[#0A2a0a] sm:text-3xl sm:font-light sm:top-30 lg:top-16 lg:text-4xl xl:static xl:p-20">Welcome</h1>
      
      <div className="flex flex-col items-center absolute bottom-12 text-[#0A2A0A] md:bottom-20 lg:bottom-10 xl:static xl:flex xl:justify-end xl:h-2/3">
        <p className="p-10 text-center sm:text-xl lg:text-2xl">
          Welcome to Little Lamb Logs, your trusted faith-filled resource for moms on their pregnancy and postpartum journey.
        </p>
      
      <div className="flex justify-center w-full">
        <Link className="border-2 border-[#0a2a0a] p-4 bg-[#0a2a0a] text-white font-semibold lg:text-2xl xl:p-5" href="./welcome">
          Get Started
        </Link>
      </div>
      </div>
  
    </div>
  );
}
