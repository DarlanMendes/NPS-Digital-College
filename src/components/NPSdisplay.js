import { useState,useEffect } from "react";

const NPSdisplay=({nps})=>{

    const[npsDisplay,setNpsDisplay]= useState([])

    useEffect(()=>{
        setNpsDisplay([{ class: "Nota de 1 a 6", gradeLength:1, totalGradeLength: 1 },
        { class: "Nota de 7 a 8", gradeLength: 2, totalGradeLength: 2 },
        { class: "Nota de 9 a 10", gradeLength: 3, totalGradeLength: 3 }])

    },[])
    return(
        <div>{nps}</div>

    );
}
export default NPSdisplay;