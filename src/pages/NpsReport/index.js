import './index.css'
import { useEffect, useState,useRef } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../Api';
import NPSdetails from '../../components/NPSdetails';
import NPSdisplay from '../../components/NPSdisplay';
import Dashboard from '../../components/Dashboard';
import Dashboard2 from '../../components/Dashboard2';
import { GoGraph } from "react-icons/go";
import {ImTable} from "react-icons/im";


const NpsReport = ({isAuth,votes, setVotes, setVote }) => {
    
    const [seeDashboard, setSeeDashboard] = useState(false);
    const [readDB, setReadDB] = useState(false);
    const [detractors, setDetractors] = useState(0);
    const [passives, setPassives] = useState(0);
    const [promoters, setPromoters] = useState(0);
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [nps, setNPS] = useState(0);
    const [gradeVoters, setGradeVoters] = useState([{ class: "Nota 1", grade: 0, color: "#dc4242" },
    { class: "Nota 2", grade: 0, color: "#dc4242" },
    { class: "Nota 3", grade: 0, color: "#dc4242" },
    { class: "Nota 4", grade: 0, color: "#dc4242" },
    { class: "Nota 5", grade: 0, color: "#dc4242" },
    { class: "Nota 6", grade: 0, color: "#dc4242" },
    { class: "Nota 7", grade: 0, color: "#f0c055" },
    { class: "Nota 8", grade: 0, color: "#f0c055" },
    { class: "Nota 9", grade: 0, color: "green" },
    { class: "Nota 10", grade: 0, color: "green" }]);


    // Aquisição das notas no banco de dados---------------------------------------------

    const ListVotes = async () => {
        const querySnapshot = await getDocs(collection(db, "voteUser"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setList([]);
            list.push(doc.data());
        });
        Listed();

    }
    const handleDashboard = () => {
        setSeeDashboard(!seeDashboard);
    }
    const handleChoice = () => {
        
        
        setReadDB(!readDB);
        setGradeVoters([{ class: "Nota 1", grade: 0, color: "#dc4242" },
        { class: "Nota 2", grade: 0, color: "#dc4242" },
        { class: "Nota 3", grade: 0, color: "#dc4242" },
        { class: "Nota 4", grade: 0, color: "#dc4242" },
        { class: "Nota 5", grade: 0, color: "#dc4242" },
        { class: "Nota 6", grade: 0, color: "#dc4242" },
        { class: "Nota 7", grade: 0, color: "#f0c055" },
        { class: "Nota 8", grade: 0, color: "#f0c055" },
        { class: "Nota 9", grade: 0, color: "green" },
        { class: "Nota 10", grade: 0, color: "green" }])
        
    }
    const SetUpVotes = () => {

        if (gradeVoters) {
            Listed();
        }
    }


    // Separação e classificação das notas ----------------------------------------
    const Listed = () => {
        let qt1 = 0; let qt2 = 0; let qt3 = 0; let qt4 = 0; let qt5 = 0; let qt6 = 0; let qt7 = 0; let qt8 = 0; let qt9 = 0; let qt10 = 0;
        if (readDB) {
            list.forEach((item) => {
                switch (parseInt(item.vote)) {
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
            })
        }
        else {
            qt1=gradeVoters[0].grade;
            qt2=gradeVoters[1].grade;
            qt3=gradeVoters[2].grade;
            qt4=gradeVoters[3].grade;
            qt5=gradeVoters[4].grade;
            qt6=gradeVoters[5].grade;
            qt7=gradeVoters[6].grade;
            qt8=gradeVoters[7].grade;
            qt9=gradeVoters[8].grade;
            qt10=gradeVoters[9].grade;
        }
       
        setGradeVoters([{ class: "Nota 1", grade: qt1, color: "#ec4242" },
        { class: "Nota 2", grade: qt2, color: "#eb4242" },
        { class: "Nota 3", grade: qt3, color: "#df4242" },
        { class: "Nota 4", grade: qt4, color: "#dc4242" },
        { class: "Nota 5", grade: qt5, color: "#dc4242" },
        { class: "Nota 6", grade: qt6, color: "#dc4242" },
        { class: "Nota 7", grade: qt7, color: "#f0c055" },
        { class: "Nota 8", grade: qt8, color: "#f0c055" },
        { class: "Nota 9", grade: qt9, color: "green" },
        { class: "Nota 10", grade: qt10, color: "green" }])



        setDetractors(eval(qt1) + eval(qt2) + eval(qt3) + eval(qt4) + eval(qt5) + eval(qt6));
        setPassives(eval(qt7) + eval(qt8));
        setPromoters(eval(qt9) + eval(qt10));
        setTotal(eval(qt1) + eval(qt2) + eval(qt3) + eval(qt4) + eval(qt5) + eval(qt6) + eval(qt7) + eval(qt8) + eval(qt9) + eval(qt10));


    }
    //------Garantia de serão carregados os dados quando houver mudanças---------------------------------------------------
    useEffect(() => {
        if(!localStorage.getItem("UserId")){ window.location.pathname="/"};
        setVotes([{ class: "Nota de 1 a 6", gradeLength: detractors, totalGradeLength: total, bgColor: "#dc4242" },
        { class: "Nota de 7 a 8", gradeLength: passives, totalGradeLength: total, bgColor: "#f0c955" },
        { class: "Nota de 9 a 10", gradeLength: promoters, totalGradeLength: total, bgColor: "green" }]);

        setNPS((((promoters - detractors) * 100) / total).toFixed(2));


    }, [detractors, passives, promoters, nps]);


    //--------------------------renderização - da - página ---------------------------

    return (

        <div className='mainResults'>
           {localStorage.getItem("UserId")&&
           <>
            <div className="top-Container">
                <div className="header-Container">
                    <h2>Resultados NPS</h2>
                    <button className='btn-toggle-dashboard'
                        onClick={handleDashboard}> {seeDashboard ? "Visualizar tabela demonstrativa" : "Visualizar gráficos"}
                                                    {seeDashboard?<ImTable/>:<GoGraph/>}
                    </button>
                </div>
                <div className='dashContainer'>
                    <div className="dshbrd" style={{ display: !seeDashboard && "none" }}><Dashboard gradeVoters={gradeVoters} /></div>
                    <div className='dash2' style={{ display: !seeDashboard && "none" }}> <Dashboard2 gradeVoters={gradeVoters} /> </div>
                </div>
                <main className='main-Display' style={{ display: seeDashboard && "none" }}>
                    <div className="NPS-display-left">
                        <NPSdetails votes={votes} setVote={setVote} />
                    </div>
                    <div className="NPS-display-right">
                        <NPSdisplay nps={nps} />
                    </div>
                </main>
                <div className="btn-select-set">
                    <div className="btn-select-set-text">
                        <h3>Escolha a forma como deseja calcular o NPS</h3>
                    </div>
                    <div className="btn-select-set-button">
                        <button className="btn-select-set-item-l" onClick={handleChoice} disabled={readDB ? false : true}>Manualmente</button>
                        <button className="btn-select-set-item-r" onClick={handleChoice} disabled={!readDB ? false : true}>Listar BD</button>
                    </div>
                </div>
            </div>
            <div className='Display-individual-grades'>
                {gradeVoters.map((note, index) =>
                (<div className="group-grade" key={index}>
                    <h3 className='individual-grade' style={({ backgroundColor: note.color })}>{note.class}</h3>
                  {readDB? <div className='individual-grade-text' > {note.grade} </div>
                  :<input className='input-individual-grade' type="number" min="0" placeholder={note.grade}  onChange={(e) => { note.grade = (e.target.value)}}></input>}
                </div>))}


                <div className="btn-calculate-nps">
                    <button className="btn-report" onClick={ListVotes} style={{ display: !readDB && 'none' }}>Calcular NPS</button>
                    <button className="btn-report-set-up" onClick={SetUpVotes} style={{ display: readDB && 'none' }}>Calcular NPS</button>
                </div>
            </div>
            </>
           } 
        </div>

    );
}
export default NpsReport;