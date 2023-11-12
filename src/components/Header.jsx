import './style.css';

function Navigation({ currentPage, handlePageChange }) {
    return (

        <header>
        <img id='header-img' src='images2.png'></img>

        <p id='header-text'>Dae'Stanii Spackman</p>

        <div id='nav-bar'>

        <a href="#about"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >About</a>

        <a href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >Contact</a>

        <a href="#Portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >Portfolio</a>

        <a href="#Resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >Resume</a>

        </div>
        </header>
    );
}

export default Navigation;