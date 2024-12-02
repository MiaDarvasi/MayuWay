import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // useLocation for detecting route changes
import logo from "../assets/imgs/logo.png";

export function AppHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Hook to get the current route location

    useEffect(() => {
        // Handle scroll state
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

    useEffect(() => {
        // This effect will run every time the location (route) changes.
        // It checks if there's a hash in the URL and scrolls to the target element.
        if (location.hash) {
            const targetElement = document.getElementById(location.hash.slice(1)); // Remove '#' from the hash
            if (targetElement) {
                // Scroll to the element with the given id
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]); // Re-run the effect when the route changes

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <section className={`app-header full ${scrolled ? 'scrolled' : ''}`}>
            <section className="app-header-content">
                <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>

                <div className="hamburger-icon" onClick={toggleMenu}>
                    &#9776;
                </div>

                <nav className="nav-links">
                    <Link to="/yoga">סגנונות יוגה</Link>
                    <Link to="/#services">השירותים שלי</Link>
                    <Link to="/#study">ההכשרות שלי</Link>
                    <Link to="/#about">קצת עליי</Link>
                    <Link to="/">בית</Link>
                    <Link to="/#connect" className="connect-btn">דברו איתי</Link>
                </nav>
            </section>

            {menuOpen && (
                <div className="dropdown-menu">
                    <div className="menu-items">
                        <Link to="/" onClick={() => setMenuOpen(false)}>בית</Link>
                        <hr />
                        <Link to="/#about" onClick={() => setMenuOpen(false)}>קצת עליי</Link>
                        <hr />
                        <Link to="/#study" onClick={() => setMenuOpen(false)}>ההכשרות שלי</Link>
                        <hr />
                        <Link to="/#services" onClick={() => setMenuOpen(false)}>השירותים שלי</Link>
                        <hr />
                        <Link to="/yoga" onClick={() => setMenuOpen(false)}>סגנונות יוגה</Link>
                        <hr />
                        <Link to="/#connect" onClick={() => setMenuOpen(false)} className="connect-btn">דברו איתי</Link>
                    </div>
                </div>
            )}
        </section>
    );
}
