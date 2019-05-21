import React from 'react';
import './navbar.css';
import {Navbar, Nav, NavItem, NavLink, NavbarBrand} from 'shards-react';

class Navigation extends React.Component {
    render(){
        return(
            <Navbar type='dark' theme='primary' expand='md'>
                <NavbarBrand href="#">InternBoat</NavbarBrand>

                <Nav navbar>
                    <NavItem>
                        <NavLink active href="#">
                            About
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;