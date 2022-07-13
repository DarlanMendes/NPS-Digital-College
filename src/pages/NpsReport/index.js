import './index.css'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const NpsReport = ({ setVotes, setVote}) => {
    
    useEffect(()=>{
        setVotes([{ class: "Nota de 1 a 6", gradeLength: 30, totalGradeLength: 100 },
        { class: "Nota de 7 a 8", gradeLength: 25, totalGradeLength: 100 },
        { class: "Nota de 9 a 10", gradeLength: 45, totalGradeLength: 100 }])
    },[]);
    return (
       
        <div className='mainResults'>
            <header>Resultados NPS</header>
            <div>

                    {votes.map((item, key) => (
                        <div key={key} className="Item">
                            
                            <Link to="/detailed" >
                            <div className='title'onClick={()=>{setVote(item)}}>
                                <h3>{item.class}</h3>
                                <h3> Total Geral de notas </h3>
                                <h3> % </h3>
                            </div>
                            <div className='subtitle'>
                                <h3> {item.gradeLength} notas</h3>
                                <h3> {item.totalGradeLength}</h3>
                                <h3>{(item.gradeLength) / (item.totalGradeLength) * 100}</h3>
                            </div>
                            </Link>
                        </div>
                    ))}

               


            </div>
        </div>
        
    );
}
export default NpsReport;