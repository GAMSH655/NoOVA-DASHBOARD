import chartStyle from "../components/Chart.module.css"
import LinearScaleBase from "chart.js/dist/scales/scale.linearbase";
import { Doughnut } from "react-chartjs-2";

function PieChart() {
  return (
     <div>
         <div className={chartStyle.tag}>
      <h className={chartStyle.stats}>statistic flow</h>
        
        <select name="months" id="cars">
        <option value="1">january</option>
        <option value="2">february</option>
        <option value="march">march</option>
        <option value="audi">April</option>
        </select>
         </div>
         <div className={chartStyle.chartDiv}>
        <img src={Graph} alt="" className={chartStyle.Graph} />
        
        <div className={chartStyle.doughnutDiv}>
           
        </div>
         </div>
     </div>    
  );
}
export default PieChart;