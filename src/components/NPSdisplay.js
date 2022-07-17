import './NPSdisplay.css';

const NPSdisplay=({nps})=>{

    
    return(
        
        <div className="Container-NPS-display">
            {nps?nps:0}
        </div>

    );
}
export default NPSdisplay;