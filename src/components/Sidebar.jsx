import React from 'react'

function Sidebar() {
  return <>
  <ul className="navbar-nav sidebar titleName " style={{backgroundColor:' #F5F5F5'}} id="accordionSidebar">






{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active border-left border-primary">
    <a className="nav-link d-flex align-items-center justify-content-start gap-3" href="index.html">
  
        <span className=' text-center  Notes' style={{color:'navy',}}>Notes App</span></a>
</li>




{/* Lab Test */}
<li className="nav-item " style={{backgroundColor:'navy',borderRadius:'8px'}}>
    <a className="nav-link d-flex align-items-center justify-content-start gap-3" href="#" >
    
    <span className=' side_list '><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <mask id="mask0_209_5" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
    <rect width="32" height="32" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_209_5)">
    <path d="M10.6666 24H21.3333V21.3333H10.6666V24ZM10.6666 18.6667H21.3333V16H10.6666V18.6667ZM7.99998 29.3333C7.26665 29.3333 6.63887 29.0722 6.11665 28.55C5.59442 28.0278 5.33331 27.4 5.33331 26.6667V5.33332C5.33331 4.59999 5.59442 3.97221 6.11665 3.44999C6.63887 2.92777 7.26665 2.66666 7.99998 2.66666H18.6666L26.6666 10.6667V26.6667C26.6666 27.4 26.4055 28.0278 25.8833 28.55C25.3611 29.0722 24.7333 29.3333 24 29.3333H7.99998ZM17.3333 12V5.33332H7.99998V26.6667H24V12H17.3333Z" fill="#F5F5F5"/>
  </g>
</svg> &nbsp;<span className='notes'>Notes</span> </span>
    </a>
    
    
</li>


</ul>

  </>
}

export default Sidebar