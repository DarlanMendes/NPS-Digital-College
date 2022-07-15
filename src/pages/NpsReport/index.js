import './index.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDocs,collection } from "firebase/firestore";
import { db } from '../../Api';

const NpsReport = ({ votes, setVotes, setVote }) => {

    const[detractors,setDetractors]=useState('0');
    const[passives,setPassives]=useState(0);
    const[promoters, setPromoters]= useState(0);
    const[list, setList]= useState([]);
    const[total,setTotal]=useState();

    const Listed =()=>{let detractor=0; let passive= 0;let promoter=0;
            list.forEach((item)=>{
                if(parseInt(item.vote)<7){
                    console.log(item);
                    detractor= detractor+1;
                }
                if(parseInt(item.vote)>6 &&parseInt(item.vote)<9){
                    console.log(item);
                    passive= passive+1;
                }
                if(parseInt(item.vote)>8){
                    console.log(item);
                    promoter= promoter+1;
                }
            })
        setDetractors(detractor);   
        setPassives(passive);
        setPromoters(promoter);
        setTotal(detractor+passive+promoter)
    }
    

    const ListVotes = async () => {
        const querySnapshot = await getDocs(collection(db, "voteUser"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            
            list.push(doc.data());
        });
      Listed()
    }




    useEffect(() => {
         setVotes([{ class: "Nota de 1 a 6", gradeLength: detractors, totalGradeLength:total },
           { class: "Nota de 7 a 8", gradeLength: passives, totalGradeLength: total },
           { class: "Nota de 9 a 10", gradeLength: promoters, totalGradeLength: total}])
        
        console.log("d",detractors,"p",passives,"p",promoters);
    }, [detractors,passives,promoters]);
    return (

        <div className='mainResults'>
            <header>Resultados NPS</header>
            <div>
          
                {votes.map((item, key) => (
                    <div key={key} className="Item" onClick={() => { setVote(item) }}>

                        <Link to="/detailed" >
                        
                            <div className='title'>
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
            <button onClick={ListVotes}>Listar</button>
        </div>

    );
}
export default NpsReport;