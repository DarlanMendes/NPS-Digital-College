import {Link} from 'react-router-dom';
import './NPSdetails.css';
const NPSdetails =({setVote,votes})=>{




    return(
        <div >
            {votes.map((item, key) => (
                    <div key={key} className="Item" onClick={() => { setVote(item) }}>

                        <Link to="/detailed" >
                        
                            <div className='title'style={{backgroundColor:item.bgColor}}>
                                <h3>{item.class}</h3>
                                <h3> Total Geral de notas </h3>
                                <h3> % </h3>
                            </div>
                            <div className='subtitle' style={{backgroundColor:item.bgColor}} >
                                <h3> {item.gradeLength} notas</h3>
                                <h3> {item.totalGradeLength>=1?item.totalGradeLength:0}</h3>
                                <h3>{item.totalGradeLength>=1?(((item.gradeLength) / (item.totalGradeLength) * 100 )).toFixed(2):0}</h3>
                            </div>

                        </Link>
                    </div>
                ))}
        </div>

    );
}
export default NPSdetails;