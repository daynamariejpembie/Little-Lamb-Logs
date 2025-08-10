'use client'
import React from "react";
import PeeButton from "@/app/components/diaper-change/PeeButton";
import PoopButton from "@/app/components/diaper-change/PoopButton";
import { useEffect, useState } from 'react';

export default function Page() {

// Fetching data from API

    const [changes, setChanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

useEffect(() => {
  fetch('/changes.json')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  })
  .then(data => {
    setChanges(data.results);
    setLoading(false);
  })
  .catch(err => {
    console.log(err);
    setLoading(false);
  });
}, []);

if (loading) return <p>Loading diaper changes...</p>;
if (changes.length === 0) return <p>No data available</p>

// Pagination 
const itemsPerPage = 5;

const startIndex = (currentPage -1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const pageItems = changes.slice(startIndex, endIndex);



return (
    <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center space-x-10 p-10">
          <PeeButton />
          <PoopButton />  
        </div>
        

        <div className="flex flex-col items-center"> 
            <h1 className="text-center text-lg py-5">Diaper Changes</h1>
            <ul className="bg-white p-10 flex flex-col items-center w-fit rounded-lg">
                {pageItems.map(change => (
                    <li key={change.id} className="py-5">
                        <p>Time: {new Date(change.time).toLocaleString()}</p>
                        <p>Wet: {change.wet ? 'Yes' : 'No'}</p>
                        <p>Solid: {change.solid ? 'Yes' : 'No'}</p>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center space-x-10 py-5">
                <button
                  onClick = {() => setCurrentPage((prev) => Math.max(prev - 1,1))}
                  disabled= {currentPage === 1}
                >
                Previous
                </button>
                <span> Page {currentPage} </span>
                <button
                  onClick = {() => setCurrentPage((prev) => prev < Math.ceil(changes.length / itemsPerPage) ? prev + 1 : prev)}
                  disabled = {currentPage === Math.ceil(changes.length / itemsPerPage)}
                >
                  Next
                </button>
            </div>
        </div>
    </div>
)
}