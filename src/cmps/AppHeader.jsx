import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import lotus from "../assets/imgs/lotus.svg";


export function AppHeader() {


    return (
        <section className="app-header full">
            <section className="app-header-content">
                <img className="logo" src={lotus} />
                <nav>
                    <a>דרכי התקשרות</a>
                    <a>המלצות</a>
                    <a>סוגי יוגה</a>
                    <a>בית</a>
                </nav>
            </section>
        </section>
    );
}
