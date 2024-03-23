import profileImg  from '../assets/profile.png'
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
                      july : 13 : 2024
                  </p>
                  </div>
                       <div className="nextedNav">
                       <div className="searchConatiner">
                          <input type="search" /> <i className="fa-solid fa-search searchIcon"></i>
                          <span className="gear"> <i className="fa-solid fa-gear navIcons"></i></span>
                          <span className="bell"> <i className="fa-solid fa-bell navIcons"></i></span>
                          <span className="envelope"> <i className="fa-solid fa-envelope navIcons"></i></span>
                        </div>
                        <div className="profilecont">
                          <img src={profileImg} alt="" />
                           <div className="userInfo">
                           <p className="userName">jelili aja <i className="fa-solid fa-chevron-down searchIcon"></i></p>
                          <p className="userAccount">4764732874328</p>
                           </div>
                        </div>
                       </div>
              </div>
        </div>
       </>
    )
}export default MiddleDash;