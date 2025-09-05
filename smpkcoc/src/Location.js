import { Header, Title, IconHeader } from './designKit/Navbar.js';
import { useEffect } from 'react';
import Phone from './img/callSvg.svg';
import Mail from './img/mailSvg.svg';
import Address from './img/locationSvg.svg';
import './App.css';
import './index.css';

export const Location = (props) => {
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

    return (
        <article className="article" style={{ paddingTop: props.height, width: '80vw', margin: '0vw 5vw' }} >
            <Header textColor="var(--sixthly)" title="Location" color="var(--sixthly)" />
            <span style={{ display: 'flex', width: '100%', height: '100%', gap: 'var(--space)', position: 'relative', alignItems: 'start' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2680.1395074274856!2d-122.14775068829961!3d47.79813137461208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490092cbcb21def%3A0xfefd1461ba589f76!2s21910%20WA-9%2C%20Woodinville%2C%20WA%2098072!5e0!3m2!1sen!2sus!4v1749763780543!5m2!1sen!2sus"
                    className="mapFrame"
                    style={{ border: 0, margin: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
                <div className="lengthyTab" style={{ height: 'min-content' }}>
                    <span className="addressSection" style={{ display: 'grid', gridTemplateColumns: 'auto', gap: 'var(--space)' }}>
                        <Title service="Address" time="" crossFill="var(--thirdly)" h2Color="var(--thirdly)" />
                        <IconHeader imgSrc={Phone} header="+1 (425) 444 7844" link="tel: +14254447844" textColor="var(--thirdly)" />
                        <IconHeader imgSrc={Mail} header="info@smpkchurch.com" link="mailto:info@smpkchurch.com" textColor="var(--thirdly)" />
                        <IconHeader imgSrc={Address} header="21910 SR-9 Woodinville, WA 98072" textColor="var(--thirdly)" />
                    </span>
                </div>
            </span>
        </article>
    )
}

export default function init() {
    return (
        <Location height="" />
    )
}