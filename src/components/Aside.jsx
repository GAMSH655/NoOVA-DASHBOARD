import './Aside.css'
import Logo from '../assets/Logo.png'

function AsideBAr (){
     return (
         <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
               <div className='asideBar'>
                    {/* <h3 className="logotext"> <i class="fa-solid fa-desktop"> nova days </i></h3> */}
                 <img src={Logo} alt=""   className='logo' />
                  <div className="menuContainer">
                      <p className="menu"><i className="fa-solid fa-house icons"></i>dashboard</p>
                      <p className="menu"><i className="fa-brands fa-telegram icons"></i> payments</p>
                      <p className="menu"><i className="fa-solid fa-wallet icons"></i> wallets</p>
                      <p className="menu"><i className="fa-solid fa-user icons"></i> profile</p>
                      <p className="menu"><i className="fa-solid fa-gear icons"></i> settings</p>
                  </div>
                  <p className="menu2"><i class="fa-solid fa-door-open"></i> log out</p>
               </div>
         </div>
     )
}export default AsideBAr;