import './index.css'
import { useEffect, useState } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../Api';
import NPSdetails from '../../components/NPSdetails';
import NPSdisplay from '../../components/NPSdisplay';

const NpsReport = ({ votes, setVotes, setVote }) => {

    const [detractors, setDetractors] = useState(0);
    const [passives, setPassives] = useState(0);
    const [promoters, setPromoters] = useState(0);
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [nps,setNPS] = useState(0);
    const [gradeVoters, setGradeVoters]= useState([])
    const ListVotes = async () => {
        
            const querySnapshot = await getDocs(collection(db, "voteUser"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setList([]);
            list.push(doc.data()); 
        });
        Listed();
    
    }

    const Listed = () => {
            let qt1=0;let qt2= 0;let qt3=0;let qt4=0;let qt5=0;let qt6=0;let qt7=0;let qt8=0;let qt9=0;let qt10 = 0;
            list.forEach((item) => {
                switch(parseInt(item.vote)){
                    case 1:
                        qt1 = qt1 + 1;
                        console.log(qt1);
                    break;
                    case 2:
                        qt2 = qt2 + 1;
                    break;
                    case 3:
                        qt3 = qt3 + 1;
                    break;
                    case 4:
                        qt4 = qt4 + 1;
                    break;
                    case 5:
                        qt5 = qt5 + 1;
                       
                    break;
                    case 6:
                        qt6 = qt6 + 1;
                    break;
                    case 7:
                        qt7 = qt7 + 1;
                    break;
                    case 8:
                        qt8 = qt8 + 1;
                    break;
                    case 9:
                        qt9 = qt9 + 1;
                    break;
                    case 10:
                        qt10 = qt10 + 1;
                    break;

                }
                setGradeVoters([{class:"Nota 1",grade:qt1},
                                {class:"Nota 2",grade:qt2},
                                {class:"Nota3",grade:qt3},
                                {class:"Nota 4",grade:qt4},
                                {class:"Nota 5",grade:qt5},
                                {class:"Nota 6",grade:qt6},
                                {class:"Nota 7",grade:qt7},
                                {class:"Nota 8",grade:qt8},
                                {class:"Nota 9",grade:qt9},
                                {class:"Nota10",grade:qt10}])
                
            })
        
        setDetractors(qt1+qt2+qt3+qt4+qt5+qt6);
        setPassives(qt7+qt8);
        setPromoters(qt9+qt10);
        setTotal(qt1+qt2+qt3+qt4+qt5+qt6+qt7+qt8+qt9+qt10);

    }


   




    useEffect(() => {
        setVotes([{ class: "Nota de 1 a 6", gradeLength: detractors, totalGradeLength: total },
        { class: "Nota de 7 a 8", gradeLength: passives, totalGradeLength: total },
        { class: "Nota de 9 a 10", gradeLength: promoters, totalGradeLength: total }])
        setNPS(((promoters-detractors)*100)/total);
        console.log("d", detractors, "p", passives, "p", promoters, "n", nps);
    }, [detractors, passives, promoters,nps]);





    return (

        <div className='mainResults'>
            <header>Resultados NPS</header>
            <main>
            <div className="NPS-display-left">
                <NPSdetails votes={votes} setVote={setVote} />
            </div>
            <div className="NPS-display-right">
                <NPSdisplay nps={nps}/>
            </div>
            </main>
            {gradeVoters&&gradeVoters.map((note,index)=>(<h3 key={index}><h3>{note.class}</h3><hr/><br/>{note.grade}</h3>))}
            <button className="btn-report" onClick={ListVotes}>{total>0?"Recarregar Lista":"Listar"}</button>
        </div>

    );
}
export default NpsReport;