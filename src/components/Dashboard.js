import './Dashboard.css'
import { Chart } from "react-google-charts";



const Dashboard =()=> {
  
  const options = {
   
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
      
    },
  };
 
  

  var data =[
    ["nota","sit",{ role: 'style' }],
    ["Nota 1",333, 'color: red'],
    ["Nota 2",222, 'color: red'],
    ["Nota 3",111, 'color: red'],
    ["Nota 4",100, 'color: red'],
    ["Nota 5",100, 'color: red'],
    ["Nota 6",100, 'color: red'],
    ["Nota 7",100, 'color: gray'],
    ["Nota 8",100, 'color: gray'],
    ["Nota 9",1000, 'color: green'],
    ["Nota 10",1000, ' color: green']    
  ];

  
// ei cara, cade o meet 

  return (
    <div className='dashboard-Container'>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="200px"
       
        
        data={data}
        options={options}
      />

    </div>
    );
    
  
}

export default Dashboard;