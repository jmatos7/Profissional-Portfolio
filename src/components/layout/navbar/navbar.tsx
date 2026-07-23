import Container from "@/components/commons/Container/container";

import "./navbar.scss";

function Navbar() {
    return (
        <header className="navbar">
            <Container>
                <nav className="navbar__content">
                    <a href="/" className="navbar__logo">
                        João Matos
                    </a>

                    <ul className="navbar__links">
                        <li className="navbar__item">
                            <a href="#about" className="navbar__link">
                                About
                            </a>
                        </li>

                        <li className="navbar__item">
                            <a href="#skills" className="navbar__link">
                                Skills
                            </a>
                        </li>

                        <li className="navbar__item">
                            <a href="#projects" className="navbar__link">
                                Projects
                            </a>
                        </li>

                        <li className="navbar__item">
                            <a href="#contact" className="navbar__link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Navbar;