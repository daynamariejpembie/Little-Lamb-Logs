import React from 'react'
import Link from 'next/link';

export default function Home() {

  return (
    <div>
      <h1 className="text-center text-xl p-5 md:text-3xl">Dashboard</h1>
      <div className="flex justify-center md:flex-col md:justify-start md:space-y-5 items-center p-10 space-x-5 h-screen ">
        <Link href="./home/shepherding" className="bg-[#0a2a0a] text-[#d1f1d1] py-5 px-10 text-sm md:text-2xl">Shepherding</Link>
        <Link href="./home/members" className="bg-[#0a2a0a] text-[#d1f1d1] py-5 px-10 text-sm md:text-2xl">Mommy Lambs</Link>
      </div>
    </div>
  )
}
