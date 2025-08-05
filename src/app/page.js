import Image from "next/image";
import littleLambLogsLogo from "./Images/LLL-Logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-0 md:space-y-10 lg:space-y-10 h-screen w-screen bg-cover bg-[#d1f1d1]">
      <h1 className="h-1/4 sm:py-1 text-center font-sans font-light text-3xl text-[#0A2a0a] sm:text-2xl sm:font-light md:p-0 md:text-4xl lg:text-4xl xl:p-5 content-center">Welcome</h1>
      
      <div className="flex justify-center bg-[#d1f1d1] sm:h-fit sm:w-auto md:h-fit">
        <Image
        className="p-2 sm:p-0 sm:w-1/3 sm:h-fit sm:content-center md:h-fit md:w-fit lg:w-1/2"
        src={littleLambLogsLogo}
        alt="Little Lamb Logs Logo"
        />
      </div>

      <div className="py-3 flex flex-col items-center text-[#0A2A0A] bg-[#d1f1d1] h-full sm:h-fit">
        <p className="p-5 text-center content-start sm:text-sm md:text-base lg:text-2xl">
          Welcome to Little Lamb Logs, your trusted faith-filled resource for moms on their pregnancy and postpartum journey.
        </p>
      
      <div className="flex justify-center w-full">
        <Link className="border-2 border-[#0a2a0a] p-2 text-sm sm:p-2 sm:text-xs bg-[#0a2a0a] text-white font-semibold lg:text-2xl xl:p-5" href="./welcome">
          Get Started
        </Link>
      </div>
      </div>
  
    </div>
  );
}
