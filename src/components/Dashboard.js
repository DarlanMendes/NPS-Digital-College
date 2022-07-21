
import { Chart } from "react-google-charts";



const Dashboard =({gradeVoters})=> {
  
  const options = {
    
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
      
    },
  };
 
  

  var data =[
    ["nota","",{ role: 'style' }],
    ["Nota 1",eval(gradeVoters[0].grade), 'color: red'],
    ["Nota 2",eval(gradeVoters[1].grade), 'color: red'],
    ["Nota 3",eval(gradeVoters[2].grade), 'color: red'],
    ["Nota 4",eval(gradeVoters[3].grade), 'color: red'],
    ["Nota 5",eval(gradeVoters[4].grade), 'color: red'],
    ["Nota 6",eval(gradeVoters[5].grade), 'color: red'],
    ["Nota 7",eval(gradeVoters[6].grade), 'color: yellow'],
    ["Nota 8",eval(gradeVoters[7].grade), 'color: yellow'],
    ["Nota 9",eval(gradeVoters[8].grade), 'color: green'],
    ["Nota 10",eval(gradeVoters[9].grade), ' color: green']    
  ];

  
// ei cara, cade o meet 

  return (
    <div className='dashboard-Container'>
      <Chart
        chartType="ColumnChart"
        width="790px"
        height="340px"
        fontSize="5px"
        
        data={data}
        options={options}
      />

    </div>
    );
    
  
}

export default Dashboard;