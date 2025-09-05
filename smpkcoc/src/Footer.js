import './App.css';
import './index.css';
import Outline from "./img/outline_logo.png";
import { Header, Facebook, Whatsapp, Youtube } from './designKit/Navbar.js';
import { Link } from 'react-router-dom';
import PK from './img/popeKyrillos.svg';
import SM from './img/stMina.svg';

export function Footer() {
    return (
            <footer>
                <Header textColor="var(--sixthly)" title="" color="var(--sixthly)" />

                <span>
                    <img src={Outline} class="outline" alt="outlineLogo" />

                    <ol>
                        <h2>Our Parish</h2>
                        <Link to="/LiveStream"><p>LiveStream</p></Link>
                        <Link to="/Location"><p>Location</p></Link>
                    </ol>

                    <ol>
                        <h2>Our Faith</h2>
                        <Link to="/COC"><p>The Coptic Orthodox Church</p></Link>
                        <Link to="/PT"><p>H.H Pope Tawadros II</p></Link>
                    </ol>

                    <ol>
                        <h2>Contact</h2>
                        <a href="tel: +14254447844"><p>+1 (425) 444 7844</p></a>
                        <a href="mailto:info@smpkchurch.com"><p>info@smpkchurch.com</p></a>

                        <ul>
                            <Facebook fill="var(--sixthly)" />
                            <Whatsapp fill="var(--sixthly)" />
                            <Youtube fill="var(--sixthly)" />
                        </ul>
                    </ol>
                </span>

                <img className="PK002" src={PK} alt="PK" />
                <img className="SM002" src={SM} alt="SM" />
            </footer>
    )
}

export default function init() {
    return (
        <Footer />
    )
}