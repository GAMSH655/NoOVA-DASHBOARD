import profileImg  from '../assets/profile.png'
import HeaderStyle from './HeaderNav.module.css'
function Nav(){
     return(
         <>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
           <div className={HeaderStyle.middleDAsh}> 
              <div className={HeaderStyle.navBar}>
                  <div className={HeaderStyle.combo}>
                  <p className={HeaderStyle.dashText}>
                    dashboard
                  </p>
                  <p className={HeaderStyle.date}>
                      july : 13 : 2024
                  </p>
                  </div>
                       <div className={HeaderStyle.nextedNav}>
                       <div className={HeaderStyle.searchConatiner}>
                          <input type="search" /> <i className="fa-solid fa-search" id={HeaderStyle.searchIcon}></i>
                          <span className={HeaderStyle.gear}> <i className="fa-solid fa-gear Headerstyle.navIcons"></i></span>
                          <span className={HeaderStyle.bell}> <i className="fa-solid fa-bell "></i></span>
                          <span className={HeaderStyle.envelope}> <i className="fa-solid fa-envelope "></i></span>
                        </div>
                        <div className={HeaderStyle.profilecont}>
                          <img src={profileImg} alt="" />
                           <div className={HeaderStyle.userInfo}>
                           <p className={HeaderStyle.userName}>
                            <span className={HeaderStyle.spn}>
                            jelili aja <i className="fa-solid fa-chevron-down "></i>
                            </span>
                            <span className={HeaderStyle.span2}>
                            4764732874328
                            </span>
                           </p>
                           </div>
                        </div>
                       </div>
              </div>
        </div>
        
         </>
     )
}export default Nav