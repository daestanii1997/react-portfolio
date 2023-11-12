import { useState } from 'react';
import Header from './Header';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume'
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    // Function to render each page
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
    <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <main>{renderPage()}</main>
        <Footer />
    </div>
    );
}