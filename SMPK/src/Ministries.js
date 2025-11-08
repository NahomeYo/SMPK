import "./App.css";
import "./index.css";
import { Title } from './designKit/Navbar.js';
import { useState } from 'react';
import { PrimaryButton } from "./designKit/Navbar.js";
import beaconLogo from './img/beaconLogo.png';
import scouts from './img/scouts.png';
import deacons from './img/deaconClass.svg';
import twoMites from './img/twoMites.svg';
import Agape from './img/Agabhy.svg';

export const Ministries = (props) => {
    const [type, setType] = useState(4);

    function Ministry({ serviceName, time, description, logo, num }) {
        return (
            <>
                {num === "1" ? (
                    <>
                        <span className="articleSpanMinistry" style={{ gridColumn: 'span 3fr', position: 'relative' }}>
                            <li style={{ display: 'grid', justifyItems: 'start', alignContent: 'center', height: '100%', gap: 'var(--space)' }}>
                                <Title h2Color='var(--sixthly)' service={serviceName} time={time} textSize='1.25rem' />

                                <p style={{ color: 'var(--fifthly)' }}>{description}</p>
                            </li>

                            <li>
                                <img style={{ objectFit: "contain", width: '100%', position: 'relative', margin: '0' }} src={logo} className="imgBox" />
                            </li>
                        </span>
                    </>
                ) : (
                    <>
                        <span className="articleSpanMinistry" style={{ width: 'min-content' }}>
                            <li style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', margin: 0, padding: 0 }}>
                                <Title h2Color='var(--sixthly)' service={serviceName} time={time} textSize='0.75rem' />
                                <Title crossFill="transparent" time="" />
                            </li>
                        </span>
                    </>
                )}
            </>
        )
    }

    const renderSection = () => {
        if (type === 1) {
            return (
                <>
                    <Ministry serviceName="The Beacon Theological Seminary" time="6:00 PM To 7:15 PM" description="" logo={beaconLogo} num="1" />
                    <Ministry serviceName="Arabic Bible Studies" time="6:00 PM To 7:15 PM" description="thbvevjbrjebwbkkqknevekbrkjekvnkncwkjnkewnjfri" num="0" />
                </>
            )
        } else if (type === 2) {
            return (
                <>
                    <Ministry serviceName="Deacons Class" time="6:00 PM To 7:15 PM" description="" logo={deacons} num="1" />
                    <span className='ministryGrid'>
                        <Ministry serviceName="Kids Hymns Lessons" time="6:00 PM To 7:15 PM" description="" num="0" />
                        <Ministry serviceName="Adult Hymns Lessons" time="6:00 PM To 7:15 PM" description="" num="0" />
                        <Ministry serviceName="Girls Hymns Lessons" time="6:00 PM To 7:15 PM" description="" num="0" />
                    </span>
                </>
            )
        } else if (type === 3) {
            return (
                <>
                    <Ministry serviceName="Scouts" time="6:00 PM To 7:15 PM" description="" logo={scouts} num="1" />
                    <Ministry serviceName="Two Mites Community Service" time="6:00 PM To 7:15 PM" description="" logo={twoMites} num="1" />
                    <Ministry serviceName="Agape Service" time="6:00 PM To 7:15 PM" description="" logo={Agape} num="1" />
                    <span className='ministryGrid'>
                        <Ministry serviceName="Youth Meeting" time="6:00 PM To 7:15 PM" description="" num="0" />
                        <Ministry serviceName="KooGi Service" time="6:00 PM To 7:15 PM" description="" num="0" />
                    </span>
                </>
            )
        } else {
            return (
                <>
                    <Ministry serviceName="The Beacon Theological Seminary" time="6:00 PM To 7:15 PM" description="" logo={beaconLogo} num="1" />
                    <Ministry serviceName="Deacons Class" time="6:00 PM To 7:15 PM" description="" logo={deacons} num="1" />

                    <span className='ministryGrid'>
                        <Ministry serviceName="Kids Hymns Lessons" time="6:00 PM To 7:15 PM" description="" num="0" />
                        <Ministry serviceName="Adult Hymns Lessons" time="6:00 PM To 7:15 PM" description="" num="0" />
                        <Ministry serviceName="Girls Hymns Lessons" time="6:00 PM To 7:15 PM" description="" num="0" />
                    </span>

                    <Ministry serviceName="Scouts" time="6:00 PM To 7:15 PM" description="" logo={scouts} num="1" />
                    <Ministry serviceName="Two Mites Community Service" time="6:00 PM To 7:15 PM" description="" logo={twoMites} num="1" />
                    <Ministry serviceName="Agape Service" time="6:00 PM To 7:15 PM" description="" logo={Agape} num="1" />

                    <span className='ministryGrid'>
                        <Ministry serviceName="Youth Meeting" time="6:00 PM To 7:15 PM" description="" num="0" />
                        <Ministry serviceName="KooGi Service" time="6:00 PM To 7:15 PM" description="" num="0" />
                        <Ministry serviceName="Arabic Bible Studies" time="6:00 PM To 7:15 PM" description="" num="0" />
                    </span>
                </>
            )
        }
    }

    return (
        <div className="article" style={{ paddingTop: props.height }} >
            <ul className="ministriesMenu" style={{ listStyle: 'none', position: 'relative', display: 'flex', justifyContent: 'space-between', margin: 0, padding: 0, gap: "var(--space)" }}>
                <li onClick={() => { setType(1) }}><PrimaryButton backgroundColor="var(--secondary)" borderColor="transparent" textColor="var(--thirdly)" content="Theology" /></li>
                <li onClick={() => { setType(2) }}><PrimaryButton backgroundColor="var(--secondary)" borderColor="transparent" textColor="var(--thirdly)" content="Hymns and Praises" /></li>
                <li onClick={() => { setType(3) }}><PrimaryButton backgroundColor="var(--secondary)" borderColor="transparent" textColor="var(--thirdly)" content="Fellowship" /></li>
                <li onClick={() => { setType(4) }}><PrimaryButton backgroundColor="var(--fifthly)" textColor="var(--thirdly)" content="All" /></li>
            </ul>

            <div className="transitionContainer" key={type}>
                {renderSection()}
            </div>

        </div>
    )
}

export default function init() {
    return (
        <Ministries height="" />
    )
}