import { Button, Nav } from 'react-bootstrap'
import React from 'react'
import './main.css';
import Logo from './metropolia_m_oranssi.png';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="top-headerbar">

                <Link to="/home" className="bar-para hover:text-primary">   <img style={{ width: '100px' }} className="img-size" src={Logo} alt="logoimg" /></Link>

                <Nav.Item id="navbar" className="bar-para">
                    <NavLink className="bar-para" to="/event/mediaday-123" activeClassName="selected" >
                        Mediaday event linkki
                    </NavLink>
                </Nav.Item>
                <Nav.Item id="navbar" className="bar-para">
                    <NavLink className="bar-para" to="/calender" activeClassName="selected">
                        Schedule Calender
                    </NavLink>
                </Nav.Item>
                <input type="text" placeholder="Search here" className="search" />
                <Button className="mx-2" style={{ height: '40px', marginTop: '5px' }} variant="dark">Search</Button>

            </div><br /><br />

        </div>
    )
}

export default Header
