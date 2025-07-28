import Image from "next/image";
import littleLambLogsLogo from "./Images/LLL-logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <h1 className="text-center font-bold">Little Lamb Logs</h1>

      <Image
        src={littleLambLogsLogo}
        alt="Little Lamb Logs Logo"
      />
      <div className="flex flex-col items-center">
        <h2>Welcome</h2>
        <p>
          Welcome to Little Lamb Logs, your trusted faith-filled resource for moms on their pregnancy and postpartum journey.
        </p>
      </div>
      <div>
        <Link href="./welcome">
          Get Started
        </Link>
      </div>
      
  
    </div>
  );
}
