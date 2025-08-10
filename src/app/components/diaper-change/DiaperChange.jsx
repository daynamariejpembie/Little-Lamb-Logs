import ToiletButtons from "./ToiletButtons";
import React from "react";

export default function DiaperChange({ data }) {
    return (
       <div>
        {JSON.stringify(data)}
        <ToiletButtons />
       </div> 
        
    )
}