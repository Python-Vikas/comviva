import React from 'react';

const Sidebar = () => {
    return (
   <>
   <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
              <a href="#" className="nav_logo"> 
                <i className='bx bx-layer nav_logo-icon'></i> 
                <span className="nav_logo-name">
                  <img src="/images/logo.png" alt="" />  
                </span> 
              </a>
              <div className="nav_list"> 
                  <a href="#" className="nav_link active"> 
                    <i className='bx bx-grid-alt nav_icon'></i> 
                    <span className="nav_name">Dashboard</span> 
                  </a> 
                  {/* <a href="#" className="nav_link"> 
                    <i className='bx bx-user nav_icon'></i> 
                    <span className="nav_name">Users</span> 
                  </a> 
                  <a href="#" className="nav_link"> 
                    <i className='bx bx-message-square-detail nav_icon'></i> 
                    <span className="nav_name">Messages</span> 
                  </a> 
                  <a href="#" className="nav_link"> 
                    <i className='bx bx-bookmark nav_icon'></i> 
                    <span className="nav_name">Bookmark</span> 
                  </a> 
                  <a href="#" className="nav_link"> 
                      <i className='bx bx-folder nav_icon'></i> 
                      <span className="nav_name">Files</span> 
                  </a> 
                  <a href="#" className="nav_link"> 
                    <i className='bx bx-bar-chart-alt-2 nav_icon'></i> 
                    <span className="nav_name">Stats</span> 
                  </a>  */}
                  <a href="#" className="nav_link"> 
            <i className='bx bx-log-out nav_icon'></i> 
            <span className="nav_name">SignOut</span> 
          </a>
              </div>
          </div>
          
        </nav>
    </div>
   </>
    );
  };
  
  export default Sidebar;