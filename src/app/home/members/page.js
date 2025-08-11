'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Page() {

    // Fetching data from API

    const [members, setMembers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=21&gender=female')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        })
        .then(data => {
            setMembers(data.results);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading Mommy Lambs...</p>;
    if (members.length === 0) return <p>No data available</p>


    return (
        <div>
          <div className="px-10 py-5">
            <Link href="/home">Back</Link>
          </div>
           <ul className="grid grid-cols-2 sm:grid-cols-3">
            {members.map(member => (
                <li key={member.login.username} className="flex flex-col items-center p-2">
                    <Image
                    src={member.picture.medium}
                    alt = "Member Photo"
                    width={100}
                    height={100}
                    className="w-3/4 p-2 xl:p-4"
                    />
                    <div className="flex flex-col items-center text-sm md:text-xl xl:text-3xl">
                     <p>{member.name.first} {member.name.last}</p>
                     <p>{member.location.state}, {member.location.country}</p>
                     <p>Age: {member.dob.age}</p>   
                    </div>
                    
                    
                </li>
            ))}
           </ul>
        </div>
    )
}