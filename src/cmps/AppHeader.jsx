import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from "../assets/imgs/logo.png";

export function AppHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`app-header full ${scrolled ? 'scrolled' : ''}`}>
            <section className="app-header-content">
                <img className="logo" src={logo} alt="Logo" />
                <nav>
                    <a href="#connect">דברו איתי</a>
                    <a>המלצות שלי</a>
                    <a><Link to={"/yoga"}>סגנונות יוגה</Link></a>
                    <a href="#home"><Link to={"/"}>בית</Link></a>
                </nav>
            </section>
        </section>
    );
}
