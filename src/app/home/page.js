import React from 'react'
import Link from 'next/link';

export default function Home() {

  return (
    <div>
      <h1 className="text-center text-xl p-5">Dashboard</h1>
      <div className="p-10">
        <Link href="./home/shepherding" className="bg-[#0a2a0a] text-[#d1f1d1] p-5">Shepherding</Link>
        <Link href="./home/members" className="bg-[#0a2a0a] text-[#d1f1d1] p-5">Mommy Lambs</Link>
      </div>
    </div>
  )
}
