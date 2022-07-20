import './Dashboard.css'
import { Chart } from "react-google-charts";


const Dashboard =()=> {
  
  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };
  const data = [
    ["Year","Nota 1", "Nota 2", "Nota 3", "Nota 4", "Nota 5","Nota 6","Nota 7", "Nota 8", "Nota 9","Nota 10"],
    ["Nota",1000, 400, 1000, 400, 200,20,1000, 400, 200,20],
    
  ];
  
// ei cara, cade o meet 

  return (
    <div className='dashboard-Container'>
      <Chart
        chartType="Bar"
        width="80%"
        height="400px"

        data={data}
        options={options}
      />

    </div>
    );
    
  
}

export default Dashboard;