import { useState } from "react";
export default function Batsman(){
    const [runs,SetRuns]  =useState(0);
    const [sixes,SetSixes]  =useState(0);

    function handleSingles(){
        const updatedrun = runs + 1;
        SetRuns(updatedrun);
    }
    function handleFours(){
        const updatedrun = runs + 4;
        SetRuns(updatedrun);
    }
    function handleSixes(){
        const updatedrun = runs + 6;
        SetRuns(updatedrun);
        const updatedsix = sixes + 1;
        SetSixes(updatedsix);
    }
    return(
        <div>
            {
                runs >= 50 && <p>Half century done bai</p>
            }
            <h3>Player : Bangu</h3>
            <p><small>Six: {sixes}</small></p>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFours}>Four</button>
            <button onClick={handleSixes}>Six </button>
        </div>
    )
}