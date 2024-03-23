import './MiddleDash.css'

function MiddleDash(){
    return(
       <>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
           <div className='middleDAsh'> 
              <div className="navBar">
                  <div className="combo">
                  <p className="dashText">
                    dashboard
                  </p>
                  <p className="date">
                      {Date()}
                  </p>
                  </div>
                        <div className="searchConatiner">
                          <input type="search" />
                          <span className="gear"> <i className="fa-solid fa-gear icons"></i></span>
                          <span className="bell"> <i className="fa-solid fa-bell icons"></i></span>
                          <span className="envelope"> <i className="fa-solid fa-envelope icons"></i></span>
                        </div>
              </div>
        </div>
       </>
    )
}export default MiddleDash;