 import Gridstyles from './Grid.module.css'
const GridAspect=()=>{
 return (
    <> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
    <div className={Gridstyles.flexContainer}>
          <div className={Gridstyles.flexBox1}>
              <p className={Gridstyles.account}>
                   account balance <span className={Gridstyles.eye}> <i className="fa-solid fa-eye "></i></
                   span>
              </p>
              <p className={Gridstyles.money}>
                   <span className={Gridstyles.naira}>N</span>20,000,000
              </p>
              <p className={Gridstyles.account2}> account number</p>
              <p className={Gridstyles.jelili}>jelili-ajao - 446476272 <i class="fa-sharp fa-regular fa-copy"></i></p>
              <div className={Gridstyles.btnCont}>
                  <button>
                  <i className="fa-brands fa-telegram icons"></i> Send money
                  </button>
                  <button>
                  <i class="fa-sharp fa-solid fa-square-plus"></i> Add money
                  </button>
              </div>
          </div>
         
    </div>
   </>
 )
   
} 
export default GridAspect