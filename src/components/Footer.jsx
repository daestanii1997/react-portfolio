import './style.css';

export default function Footer() {
    return (
        <footer>
            <a href='https://github.com/daestanii1997'>
                <img className='footer-images' src='github-icon.png' style={{borderRadius: '30px'}} ></img>
            </a>

            <a href='www.linkedin.com/in/dae-stanii-spackman-280b5a182'>
                <img className='footer-images' src='linkedin-logo.png' style={{borderRadius: '10px'}} ></img>
            </a>

            <a href='https://stackexchange.com/users/29841091/dae'>
                <img className='footer-images' src='stact-logo.png' style={{borderRadius: '10px'}} ></img>
            </a>

        </footer>
    )
}