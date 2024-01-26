import './style.css';

export default function Footer() {
    return (
        <footer>
            <a href='https://github.com/daestanii1997'>
                <img className='footer-images' src='github-icon.png' alt='github icon' style={{borderRadius: '30px'}} ></img>
            </a>

            <a href='https://www.linkedin.com/in/daestaniispackman/'>
                <img className='footer-images' src='linkedin-logo.png' alt='linked in icon' style={{borderRadius: '10px'}} ></img>
            </a>

            <a href='https://stackexchange.com/users/29841091/dae'>
                <img className='footer-images' src='stact-logo.png' alt='stack exchange icon' style={{borderRadius: '10px'}} ></img>
            </a>

        </footer>
    )
}