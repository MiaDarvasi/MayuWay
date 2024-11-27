import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/imgs/logo.png";

export function AppHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <section className={`app-header full ${scrolled ? 'scrolled' : ''}`}>
            <section className="app-header-content">
                <Link to={"/"}><img className="logo" src={logo} alt="Logo" /></Link>

                <div className="hamburger-icon" onClick={toggleMenu}>
                    &#9776;
                </div>

                <nav className="nav-links">
                    <a href="#connect">דברו איתי</a>
                    <a>המלצות שלי</a>
                    <Link to="/yoga">סגנונות יוגה</Link>
                    <Link to="/">בית</Link>
                </nav>
            </section>

            {menuOpen && (
                <div className="dropdown-menu">
                    <div className="menu-items">
                        <Link to="/" onClick={() => setMenuOpen(false)}>בית</Link>
                        <hr />
                        <Link to="/yoga" onClick={() => setMenuOpen(false)}>סגנונות יוגה</Link>
                        <hr />
                        <a onClick={() => setMenuOpen(false)}>המלצות שלי</a>
                        <hr />
                        <a href="#connect" onClick={() => setMenuOpen(false)}>דברו איתי</a>
                    </div>
                </div>
            )}
        </section>
    );
}
