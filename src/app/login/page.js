import Link from 'next/link';
import { promises as fs } from 'fs';

export default async function Login() {
    
    return (
        <div className="bg-[#D1F1D1] h-screen flex items-center justify-center">
          <form action="/home" className="flex flex-col space-y-4 text-white border-2 rounded-xl border-[#0a2a0a] bg-[#0a2a0a] p-5">
            <label htmlFor="username">Username</label>
            <input className="text-black" id="username" name="username" required />
            <label htmlFor="password" >Password</label>
            <input className="text-black" type="password" id="password" name="password" required />
            <div className="flex justify-center">
              <button type="submit" className="hover:text-black hover:bg-[#d1f1d1] hover:rounded-md w-fit p-2">Submit</button>
            </div>
            <Link href="/signup" className="hover:underline">
              Don't have an account? Sign-Up
            </Link>
          </form>
         
        </div>
    )
}