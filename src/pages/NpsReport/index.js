import './index.css'
import { useEffect, useState } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../Api';
import NPSdetails from '../../components/NPSdetails';
import NPSdisplay from '../../components/NPSdisplay';
import Dashboard from '../../components/Dashboard';



const NpsReport = ({ votes, setVotes, setVote }) => {

    const [readDB, setReadDB] = useState(false);
    const [detractors, setDetractors] = useState(0);
    const [passives, setPassives] = useState(0);
    const [promoters, setPromoters] = useState(0);
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [nps, setNPS] = useState(0);
    const [gradeVoters, setGradeVoters] = useState([{ class: "Nota 1", grade: 0, color: "red" },
    { class: "Nota 2", grade: 0, color: "red" },
    { class: "Nota 3", grade: 0, color: "red" },
    { class: "Nota 4", grade: 0, color: "red" },
    { class: "Nota 5", grade: 0, color: "red" },
    { class: "Nota 6", grade: 0, color: "red" },
    { class: "Nota 7", grade: 0, color: "yellow" },
    { class: "Nota 8", grade: 0, color: "yellow" },
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

        console.log("raed Db", readDB, list);
        Listed();

    }

    const handleChoice = () => {
        setReadDB(!readDB);
        setGradeVoters([{ class: "Nota 1", grade: 0, color: "red" },
        { class: "Nota 2", grade: 0, color: "red" },
        { class: "Nota 3", grade: 0, color: "red" },
        { class: "Nota 4", grade: 0, color: "red" },
        { class: "Nota 5", grade: 0, color: "red" },
        { class: "Nota 6", grade: 0, color: "red" },
        { class: "Nota 7", grade: 0, color: "yellow" },
        { class: "Nota 8", grade: 0, color: "yellow" },
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
                console.log("entrou db")
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
            gradeVoters.forEach((item) => {

                switch ((item.class)) {
                    case 'Nota 1':
                        qt1 = item.grade;
                        break;
                    case 'Nota 2':
                        qt2 = item.grade;
                        break;
                    case 'Nota 3':
                        qt3 = item.grade;
                        break;
                    case 'Nota 4':
                        qt4 = item.grade;
                        break;
                    case 'Nota 5':
                        qt5 = item.grade;
                        break;
                    case 'Nota 6':
                        qt6 = item.grade;
                        break;
                    case 'Nota 7':
                        qt7 = item.grade;
                        break;
                    case 'Nota 8':
                        qt8 = item.grade;
                        break;
                    case 'Nota 9':
                        qt9 = item.grade;
                        break;
                    case 'Nota 10':
                        qt10 = item.grade;
                        break;

                }
            })

        }
        setGradeVoters([{ class: "Nota 1", grade: qt1, color: "red" },
        { class: "Nota 2", grade: qt2, color: "red" },
        { class: "Nota 3", grade: qt3, color: "red" },
        { class: "Nota 4", grade: qt4, color: "red" },
        { class: "Nota 5", grade: qt5, color: "red" },
        { class: "Nota 6", grade: qt6, color: "red" },
        { class: "Nota 7", grade: qt7, color: "yellow" },
        { class: "Nota 8", grade: qt8, color: "yellow" },
        { class: "Nota 9", grade: qt9, color: "green" },
        { class: "Nota 10", grade: qt10, color: "green" }])



        setDetractors(eval(qt1) + eval(qt2) + eval(qt3) + eval(qt4) + eval(qt5) + eval(qt6));
        setPassives(eval(qt7) + eval(qt8));
        setPromoters(eval(qt9) + eval(qt10));
        setTotal(eval(qt1) + eval(qt2) + eval(qt3) + eval(qt4) + eval(qt5) + eval(qt6) + eval(qt7) + eval(qt8) + eval(qt9) + eval(qt10));

        console.log("notas", typeof (qt1), qt2, qt3, qt4, qt5, qt6, qt7, qt8, qt9, qt10)
    }
    //------Garantia de serão carregados os dados quando houver mudanças---------------------------------------------------
    useEffect(() => {
        setVotes([{ class: "Nota de 1 a 6", gradeLength: detractors, totalGradeLength: total, bgColor: "red" },
        { class: "Nota de 7 a 8", gradeLength: passives, totalGradeLength: total, bgColor: "yellow" },
        { class: "Nota de 9 a 10", gradeLength: promoters, totalGradeLength: total, bgColor: "green" }]);

        setNPS((((promoters - detractors) * 100) / total).toFixed(2));

        console.log(gradeVoters)
    }, [detractors, passives, promoters, nps]);


    //--------------------------renderização - da - página ---------------------------

    return (

        <div className='mainResults'>
            <header>Resultados NPS</header>
            <Dashboard/>    
            <main className='main-Display'>
                <div className="NPS-display-left">
                    <NPSdetails votes={votes} setVote={setVote} />
                </div>
                <div className="NPS-display-right">
                    <NPSdisplay nps={nps} />
                </div>
            </main>
            <div className="btn-select-set">
                <h3>Escolha a forma como deseja calcular o NPS</h3>
                <button className="btn-select-set-item-l" onClick={handleChoice} disabled={readDB ? false : true}>Manualmente</button>
                <button className="btn-select-set-item-r" onClick={handleChoice} disabled={!readDB ? false : true}>Listar BD</button>

            </div>
            <div className='Display-individual-grades'>
                {gradeVoters.map((note, index) =>
                (<div className="group-grade" key={index}>
                    <h3 className='individual-grade' style={({ backgroundColor: note.color })}>{note.class}</h3>
                    <input className='input-individual-grade' type="number" placeholder={note.grade} onChange={(e) => { note.grade = (e.target.value) }}></input>
                </div>))}
            </div>

            <div className="btn-calculate-nps">
                <button className="btn-report" onClick={ListVotes} style={{ display: !readDB && 'none' }}>Calcular NPS</button>
                <button className="btn-report-set-up" onClick={SetUpVotes} style={{ display: readDB && 'none' }}>Calcular NPS</button>
            </div>
        </div>

    );
}
export default NpsReport;