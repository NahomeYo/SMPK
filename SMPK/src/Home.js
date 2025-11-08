import './App.css';
import './index.css';
import PK from './img/popeKyrillos.png';
import SM from './img/stMina.png';
import Phone from './img/callSvg.svg';
import Mail from './img/mailSvg.svg';
import Check from "./img/check.svg";
import Address from './img/locationSvg.svg';
import DonationBox from './img/donationBox.svg';
import aMina from './img/aMina.png';
import CalenderImg from "./img/calendarBackdrop.png"
import Cross from './img/cross.svg';
import foreground from './img/fore.svg';
import background from './img/back.svg';
import mountains from './img/mountains.svg';
import { Header, IconHeader, SecondaryButton, SectionBox } from './designKit/Navbar.js';
import { EventTab } from './fetchData.js';
import { useState, useEffect } from 'react';
import { HomeDisplay } from './Gallery.js';

export function Home() {
    const [currentSlide, nextSlide] = useState(0);

    let dateObject = new Date();
    let month = dateObject.getMonth();
    let day = dateObject.getDate();
    let monthString;

    useEffect(() => {
        const lengthyTab = document.querySelectorAll('.lengthyTab');
        let tabSquare = document.createElement('div');
        tabSquare.style.width = '1rem';
        tabSquare.style.height = '1rem';
        tabSquare.style.margin = '0';
        tabSquare.style.padding = '0';
        tabSquare.style.background = 'var(--fifthly)';
        tabSquare.style.position = 'absolute';
        tabSquare.style.left = '0';
        tabSquare.style.top = '0';

        if (lengthyTab) {
            lengthyTab.forEach((tab) => {
                let clone001 = tabSquare.cloneNode(true);
                tab.append(clone001);

                let clone002 = clone001.cloneNode(true);
                clone002.style.position = 'absolute';
                clone002.style.width = '1rem';
                clone002.style.height = '1rem';
                clone002.style.margin = '0';
                clone002.style.padding = '0';
                clone002.style.background = 'var(--fifthly)';
                clone002.style.position = 'absolute';
                clone002.style.left = '100%';
                clone002.style.transform = 'translateX(-100%)';
                clone002.style.top = '0';
                tab.append(clone002);
            })
        }
    }, [])

    switch (month) {
        case 0:
            monthString = <h1>Jan</h1>;
            break;
        case 1:
            monthString = <h1>Feb</h1>;
            break;
        case 2:
            monthString = <h1>Mar</h1>;
            break;
        case 3:
            monthString = <h1>Apr</h1>;
            break;
        case 4:
            monthString = <h1>May</h1>;
            break;
        case 5:
            monthString = <h1>Jun</h1>;
            break;
        case 6:
            monthString = <h1>Jul</h1>;
            break;
        case 7:
            monthString = <h1>Aug</h1>;
            break;
        case 8:
            monthString = <h1>Sep</h1>;
            break;
        case 9:
            monthString = <h1>Oct</h1>;
            break;
        case 10:
            monthString = <h1>Nov</h1>;
            break;
        case 11:
            monthString = <h1>Dec</h1>;
            break;
        default:
            monthString = <h1></h1>;
    }

    const slideshow = document.querySelectorAll(".slideImg");

    function leftClick() {
        nextSlide((prev) => {
            if (prev === 0) {
                return slideshow.length - 1;
            } else if (prev > 0) {
                return prev - 1;
            } else {
                return 0;
            }
        })
    }

    function rightClick() {
        nextSlide((prev) => {
            if (prev === 0) {
                return prev + 1;
            } else if (prev === slideshow.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        })
    }

    function renderCross() {
        let crosses = [];

        for (let i = 0; i < slideshow.length; i++) {
            crosses.push(<img key={i}
                src={Cross}
                style={{ width: i === currentSlide ? '50px' : '', transition: 'width 0.5s var(--motion)', opacity: i === currentSlide ? '100%' : '75%' }}
                alt="crossIcon" />);
        }

        return crosses;
    }

    let iconImg = document.querySelectorAll('.iconHeader img');

    iconImg.forEach((img) => {
        img.classList.add('iconSize');
    });

    return (
        <>
            <article className="landingScreen">
                <button onClick={leftClick}>
                    <svg width="100" height="50">
                        <polyline className='line' points="100 0 50 25 100 50" stroke="var(--thirdly)" stroke-width="15" fill="none" />
                    </svg>
                </button>

                <span className="pageTitle">
                    <t>ST. MINA & POPE KYRILLOS VI</t>
                    <h1>COPTIC ORTHODOX CHURCH</h1>
                </span>

                <button onClick={rightClick}>
                    <svg width="100" height="50">
                        <polyline className='line' points="0 0 50 25 0 50" stroke="var(--thirdly)" stroke-width="15" fill="none" />
                    </svg>
                </button>

                <div className="crossContainer" style={{ zIndex: 1 }}>
                    {renderCross()}
                </div>

                <span style={{ position: "absolute", left: 0, top: 0, zIndex: 0 }}>
                    <HomeDisplay />
                </span>
            </article>

            <article className="todaysEventsContainer" style={{ background: 'var(--secondary)', gap: 'var(--space)' }}>
                <Header textColor="var(--thirdly)" title="Today's events" color="var(--thirdly)" />

                <span style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', zIndex: '5' }}>
                    <div className="date" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', height: '100%', width: 'min-content', padding: "var(--space)" }}>
                        <ul style={{ display: 'flex', flexDirection: 'column', listStyle: "none", width: "100%", height: "100%", zIndex: 1, justifyContent: "center", alignContent: "center", padding: "0 1rem", background: "var(--thirdly)", borderRadius: "var(--space)", transform: "translateY(20px)" }}>
                            <li>{monthString}</li>
                            <li style={{ textAlign: "center" }}><t>{day}</t></li>
                        </ul>
                        <img className="imgBox" src={CalenderImg} alt="calender" style={{ width: '100%' }} />
                    </div>

                    <div className="tabs" style={{ display: 'flex', flexDirection: 'column', width: '80%', justifyContent: 'space-between' }}>
                        <EventTab color="var(--thirdly)" />
                    </div>
                </span>

                <div style={{ width: "30%", position: "absolute", left: 0 }}>
                    <img className="PK" style={{ transform: "translateX(-50px)" }} src={PK} alt="PK" />
                </div>

                <div style={{ width: "30%", position: "absolute", right: 0 }}>
                    <img className="SM" src={SM} alt="SM" />
                </div>
            </article>

            <article className="ourChurch">
                <Header textColor="var(--sixthly)" title="Our Church" color="var(--sixthly)" />

                <span className="articleSpan" style={{ zIndex: 3 }}>
                    <div className="lengthyTab">
                        <div class="tabHeader">
                            <li>
                                <img src={aMina} alt="stMina" />
                                <li>
                                    <h1>Fr. Mina Adib</h1>
                                    <p>Priest</p>
                                </li>
                            </li>
                        </div>

                        <IconHeader imgSrc={Mail} header="abounaMinaAdeeb@gmail.com" alt="mail" />
                        <IconHeader imgSrc={Phone} header="+1 (000) 000 0000" alt="phone" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                    </div>

                    <div className="lengthyTab">
                        <div class="tabHeader">
                            <li>
                                <li>
                                    <p>We are located in</p>
                                    <h1>Woodinville, WA</h1>
                                </li>
                            </li>
                        </div>
                        <IconHeader imgSrc={Phone} header="+1 (425) 444 7844" alt="phone" link="tel: +14254447844" />
                        <IconHeader imgSrc={Mail} header="info@smpkchurch.com" link="mailto:info@smpkchurch.com" alt="email" />
                        <IconHeader imgSrc={Address} header="21910 SR-9 Woodinville, WA 98072" alt="address" />

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2680.1395074274856!2d-122.14775068829961!3d47.79813137461208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490092cbcb21def%3A0xfefd1461ba589f76!2s21910%20WA-9%2C%20Woodinville%2C%20WA%2098072!5e0!3m2!1sen!2sus!4v1749763780543!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, margin: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </span>

                <span className="articleSpanRow" style={{ zIndex: 3 }}>
                    <SectionBox link="/COC" img="https://live.staticflickr.com/65535/54585598164_34d2b6fb18_z.jpg" header="Faith" paragraph="Explore the Coptic Orthodox Faith and learn more about the history and life of the Church." />
                    <SectionBox link="/Ministries" img="https://live.staticflickr.com/65535/54585412136_0cb4a303d5_z.jpg" header="Ministries" paragraph="Explore the Coptic Orthodox Faith and learn more about the history and life of the Church." />
                    <SectionBox link="/Calendar" img="https://live.staticflickr.com/65535/54196299343_c10026bd7b_z.jpg" header="Calendar" paragraph="Explore the Coptic Orthodox Faith and learn more about the history and life of the Church." />
                </span>

                <img style={{ zIndex: -2, bottom: '0%' }} className="scene" src={foreground} alt="fore" />
                <img style={{ zIndex: -3, bottom: '-2.5%' }} className="scene" src={background} alt="back" />
                <img style={{ zIndex: -4, bottom: '-5%' }} className="scene" src={mountains} alt="mountain" />

            </article>

            <article className="donationSection" style={{ margin: '2rem 0' }}>
                <Header textColor="var(--fifthly)" title="Donate" color="var(--fifthly)" />
                <p style={{ color: 'var(--fifthly)', textAlign: 'center' }}>He who sows sparingly will also reap sparingly, and he who sows bountifully will also reap bountifully <br />
                    <h2 className="verse">II Corinthians 9:6</h2>
                </p>

                <span className="articleSpan">
                    <div className="lengthyTab">
                        <SecondaryButton content="Paypal" />
                        <p>Donations can be sent as one-time or recurring. <b>SMPK is charged a 2% fee on all donations through Paypal.</b></p>
                    </div>

                    <div className="lengthyTab">
                        <IconHeader imgSrc={DonationBox} header="Donation Box" alt="donation" />
                        <p>Use the donation box at the back of the church. Place your cash in an envelope with your full name for a donation receipt.</p>
                        <IconHeader imgSrc={Check} header="Mail a Check" alt="check" />
                        <p>Use the donation box at the back of the church. Place your cash in an envelope with your full name for a donation receipt.</p>
                    </div>
                </span>

            </article>
        </>
    )
}

export default function Init() {
    return (
        <>
            <Home />
        </>
    )
}