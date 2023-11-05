function Navigation({ currentPage, handlePageChange }) {
    return (
        <div>

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
    );
}

export default Navigation;