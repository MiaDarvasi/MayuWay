import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import lotus from "../assets/imgs/lotus.svg";
import logo from "../assets/imgs/logo.png";



export function AppHeader() {


    return (
        <section className="app-header full">
            <section className="app-header-content">
                <img className="logo" src={logo} />
                <nav>
                    <a>דרכי התקשרות</a>
                    <a>המלצות שלי</a>
                    <a>סגנונות יוגה</a>
                    <a>בית</a>
                </nav>
            </section>
        </section>
    );
}
