 import  AppStyle from'./App.module.css'
 import Aside from './components/Aside'
 import MiddleDash from './components/MiddleDash'
 import Grid from './components/GridComp'
 import Nav  from './components/HeaderNav'
function App() {

  return (
    <>
      <div className={AppStyle.mainDash} >
      <Aside />
      <MiddleDash />
      </div>
        
    </>
  )
}

export default App
