import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';



const Navbar = () => {
    const [showNavRight, setShowNavRight] = useState(false);
  
 
  return (

    <MDBNavbar expand='lg' dark bgColor='primary'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>Admin Dashboard</MDBNavbarBrand>
      <MDBNavbarToggler
        type='button'
        data-target='#navbarColor02'
        aria-controls='navbarColor02'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowNavRight(!showNavRight)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>
      <MDBCollapse show={showNavRight} navbar>
        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
          <MDBNavbarItem className='active'>
            <MDBNavbarLink aria-current='page' href='/dashboard'>
              Home
            </MDBNavbarLink>
          </MDBNavbarItem>
          
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>Logout</MDBNavbarLink>
          </MDBNavbarItem>
         
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>


  )
}

export default Navbar;
