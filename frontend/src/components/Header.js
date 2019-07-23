import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to='/'>
                    <img src={logo} className="icon" alt="InstaClone" />
                </Link>
                <Link to='/new'>
                    <img src={camera} className="icon" alt="Enviar publicação" />
                </Link>
            </div>
        </header>
    )
}
