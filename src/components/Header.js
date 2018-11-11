import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavItem } from 'react-materialize';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar right>
                    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
                    <NavItem href='components.html'>Components</NavItem>
                </Navbar>
            </div>
        )
    }
}

export default Header;