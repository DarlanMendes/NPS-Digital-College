import './NPSdisplay.css';
import smile from '../../src/assets/img/smileNPS.png'
const NPSdisplay = ({ nps }) => {


    return (

        <div className="Container-NPS-display">
            <div className='NPS-display-title'>
                <img src={smile} />
                <div className='NPS-display-title-text'> zona de <h2>EXCELÊNCIA</h2>
                </div>
            </div>
            <hr />
            <div className='NPS-display-result'>  {nps ? nps : 0}  </div>
            <div className='NPS-display-text'>  text </div>
        </div>

    );
}
export default NPSdisplay;