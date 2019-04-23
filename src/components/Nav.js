import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Navbar } from 'react-materialize'

const Nav = () => {
    return(
        <Navbar brand={<span className="brand">Waluty</span>} centerLogo alignLinks="right" fixed>
                <NavLink exact to="/">Tabela kursów</NavLink>
                <NavLink to="/calc">Kalkulator</NavLink>
                <NavLink to="/charts">Wykresy</NavLink>
                <NavLink to='/about'>O projekcie</NavLink>
        </Navbar>
    )
}

export default withRouter(Nav)