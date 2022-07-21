import { Chart} from "react-google-charts";

const Dashboard2 = ({gradeVoters}) => {
  console.log(gradeVoters);
  const data = [
    ["Grupos", "Votos"],
    ["Detratores", eval(gradeVoters[0].grade)+eval(gradeVoters[1].grade)+eval(gradeVoters[2].grade)+eval(gradeVoters[3].grade)+eval(gradeVoters[4].grade)+eval(gradeVoters[5].grade) ],
    ["Passivos", eval(gradeVoters[6].grade)+eval(gradeVoters[7].grade)],
    ["Promotores", eval(gradeVoters[8].grade)+eval(gradeVoters[9].grade)],
  ];

  const options = {
    title: "NPS",
    legend:"Percentual de detratores, passivos e promotores",
    sliceVisibilityThreshold: 0.0, // 20%
    chartArea:{left:15,top:30,right:0,bottom:30,width:'100%',height:'100%',padding:'0'},
    colors:['#cc0000','#dbbd00','green'],
    fontSize:25
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"550px"}
      height={"340px"}
      
    />
  );
}

export default Dashboard2;
