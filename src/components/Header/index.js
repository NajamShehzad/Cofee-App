import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
                Header Component
                    <div>
                    <NavLink exact to='/' activeStyle={{ fontSize: '1.5em' }}  >
                        Home
                        </NavLink>
                    <br />
                    <NavLink to='/login' activeStyle={{ fontSize: '1.5em' }} >
                        Login
                        </NavLink>
                </div>
            </div>
        )
    }
}
export default Header;