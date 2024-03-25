import profileImg  from '../assets/profile.png'
import './MiddleDash.module.css'
 import Nav from '../components/HeaderNav'
 import Grid from '../components/GridComp'
 import Chart from "../components/Chart"
function MiddleDash(){
  
    return(
       <>
        <div>
        <Nav />
        <Grid />
        <Chart />
        </div>
        
       </>
    )
}export default MiddleDash;