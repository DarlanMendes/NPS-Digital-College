const Detailed =({vote})=>{
    console.log("votes", vote);
    return(
        <div>Página de detalhes - <br/> classe de notas {vote.class} - <br/>quantidade de notas {vote.gradeLength} </div>
    );
}
export default Detailed;
