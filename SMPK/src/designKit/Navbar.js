import logo from '../img/logo.png';
import "../index.css";
import "../App.css";
import donationBox from "../img/donationBox.svg"
import check from "../img/check.svg";
import loadingImg from "../img/logo (1).png";
import outlineLogo from "../img/outline_logo.png";
import { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Facebook = (props) => {
    return (
        <svg width="75" height="74" viewBox="0 0 75 74" xmlns="http://www.w3.org/2000/svg">
            <path d="M74.6921 36.9656C74.6921 16.5451 58.147 0 37.7265 0C17.306 0 0.760864 16.5451 0.760864 36.9656C0.760864 55.4156 14.2787 70.7087 31.9506 73.4841V47.6514H22.5601V36.9656H31.9506V28.8213C31.9506 19.5575 37.4656 14.4404 45.9126 14.4404C49.9579 14.4404 54.1881 15.1619 54.1881 15.1619V24.2542H49.5257C44.9348 24.2542 43.5024 27.1041 43.5024 30.0271V36.9656H53.7544L52.1147 47.6514H43.5024V73.4841C61.1743 70.7087 74.6921 55.4156 74.6921 36.9656Z" fill={props.fill} />
        </svg>
    )
}

export const Youtube = (props) => {
    return (
        <svg width="75" height="53" viewBox="0 0 75 53" xmlns="http://www.w3.org/2000/svg">
            <path d="M73.3222 8.82404C72.4691 5.61172 69.9554 3.08179 66.7639 2.22322C60.979 0.663101 37.7822 0.663101 37.7822 0.663101C37.7822 0.663101 14.5855 0.663101 8.80045 2.22322C5.60891 3.08192 3.09528 5.61172 2.24214 8.82404C0.692078 14.6466 0.692078 26.7947 0.692078 26.7947C0.692078 26.7947 0.692078 38.9429 2.24214 44.7654C3.09528 47.9778 5.60891 50.4023 8.80045 51.2609C14.5855 52.821 37.7822 52.821 37.7822 52.821C37.7822 52.821 60.9788 52.821 66.7639 51.2609C69.9554 50.4023 72.4691 47.9778 73.3222 44.7654C74.8723 38.9429 74.8723 26.7947 74.8723 26.7947C74.8723 26.7947 74.8723 14.6466 73.3222 8.82404ZM30.1955 37.8244V15.7651L49.5834 26.795L30.1955 37.8244Z" fill={props.fill} />
        </svg>
    )
}

export const Whatsapp = (props) => {
    return (
        <svg className="iconSize" width="72" height="71" viewBox="0 0 72 71" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.0557 14.8205C24.6368 14.8205 15.3541 24.1032 15.3384 35.5221C15.3384 39.4332 16.4378 43.2499 18.5111 46.5327L18.9981 47.318L16.909 54.9515L24.7468 52.894L25.5007 53.3494C28.6735 55.2343 32.3175 56.2395 36.04 56.2395H36.0557C47.4589 56.2395 56.993 46.9567 56.993 35.5378C56.993 30.009 54.6056 24.81 50.6946 20.899C46.7678 16.9723 41.5846 14.8205 36.0557 14.8205ZM48.2286 44.4122C47.7102 45.873 45.2286 47.1923 44.0348 47.3651C42.0558 47.6636 40.5165 47.5065 36.5741 45.8101C30.3384 43.1086 26.2546 36.8258 25.9405 36.4174C25.6264 36.009 23.396 33.0404 23.396 29.9776C23.396 26.9148 24.9981 25.4069 25.5792 24.7786C26.1447 24.1503 26.8201 23.9933 27.2442 23.9933C27.6526 23.9933 28.0766 23.9933 28.4379 24.009C28.8149 24.0247 29.3332 23.8676 29.8358 25.0771C30.3541 26.3179 31.595 29.3807 31.7521 29.6949C31.9091 30.009 32.0191 30.3703 31.7992 30.7787C30.6054 33.1661 29.3332 33.0719 29.9772 34.1713C32.3803 38.3023 34.7835 39.7316 38.4432 41.5693C39.0715 41.8834 39.4327 41.8363 39.794 41.4122C40.1552 41.0038 41.349 39.5902 41.7573 38.9776C42.1657 38.3494 42.5898 38.4593 43.1553 38.6635C43.7207 38.8677 46.7835 40.3756 47.4118 40.6897C48.0401 41.0038 48.4485 41.1609 48.6055 41.4122C48.7469 41.7106 48.7469 42.9672 48.2286 44.4122ZM63.6999 0.558609H8.41162C4.24929 0.558609 0.872314 3.93559 0.872314 8.09791V63.3861C0.872314 67.5485 4.24929 70.9255 8.41162 70.9255H63.6999C67.8622 70.9255 71.2392 67.5485 71.2392 63.3861V8.09791C71.2392 3.93559 67.8622 0.558609 63.6999 0.558609ZM36.04 60.4333C31.862 60.4333 27.7625 59.3809 24.1342 57.4018L10.9247 60.873L14.4588 47.962C12.2755 44.1923 11.1289 39.9044 11.1289 35.5064C11.1446 21.7786 22.3122 10.611 36.04 10.611C42.6997 10.611 48.9511 13.2027 53.6632 17.9147C58.3595 22.6268 61.1868 28.8781 61.1868 35.5378C61.1868 49.2657 49.7678 60.4333 36.04 60.4333Z" fill={props.fill} />
        </svg>
    )
}

export const Paypal = (props) => {
    return (
        <svg className="iconSize" width="58" height="72" viewBox="0 0 154.728 190.5" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(898.192 276.071)"><path clip-path="none" d="M-837.663-237.968a5.49 5.49 0 0 0-5.423 4.633l-9.013 57.15-8.281 52.514-.005.044.01-.044 8.281-52.514c.421-2.669 2.719-4.633 5.42-4.633h26.404c26.573 0 49.127-19.387 53.246-45.658.314-1.996.482-3.973.52-5.924v-.003h-.003c-6.753-3.543-14.683-5.565-23.372-5.565z" fill={props.firstColor} />
                <path clip-path="none" d="M-766.506-232.402c-.037 1.951-.207 3.93-.52 5.926-4.119 26.271-26.673 45.658-53.246 45.658h-26.404c-2.701 0-4.999 1.964-5.42 4.633l-8.281 52.514-5.197 32.947a4.46 4.46 0 0 0 4.405 5.153h28.66a5.49 5.49 0 0 0 5.423-4.633l7.55-47.881c.423-2.669 2.722-4.636 5.423-4.636h16.876c26.573 0 49.124-19.386 53.243-45.655 2.924-18.649-6.46-35.614-22.511-44.026z" fill={props.secondColor} />
                <path clip-path="none" d="M-870.225-276.071a5.49 5.49 0 0 0-5.423 4.636l-22.489 142.608a4.46 4.46 0 0 0 4.405 5.156h33.351l8.281-52.514 9.013-57.15a5.49 5.49 0 0 1 5.423-4.633h47.782c8.691 0 16.621 2.025 23.375 5.563.46-23.917-19.275-43.666-46.412-43.666z" fill={props.firstColor} />
            </g></svg>
    )
}

export const Cross = (props) => {
    return (
        <svg className="iconSize" width="15" height="15" viewBox="0 0 61 61" xmlns="http://www.w3.org/2000/svg">
            <path fill={props.fill} d="M45.0618 52.742L36.9946 44.742V37.242H44.5576L53.1291 44.742V37.242L60.6921 30.742L53.1291 24.242V16.742L44.5576 24.242H36.9946V15.742L45.0618 8.24203H36.9946L30.44 0.742035L23.8854 8.24203H15.8181L23.3812 16.742V24.242H16.8265L8.7593 16.742V24.742L0.692078 30.742L8.7593 37.242V44.742L16.8265 37.242H23.3812V44.742L15.8181 52.742H23.8854L30.44 60.742L36.9946 52.742H45.0618Z" />
        </svg>
    )
}

export const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);
    const [loading, setLoading] = useState({ fadeIn: false, fadeOut: false });
    const [resize, setResize] = useState(() => {
        if (typeof window !== "undefined") {
            if (window.innerWidth <= 1440 && window.innerWidth >= 1000) return 1;
            if (window.innerWidth <= 1000 && window.innerWidth >= 465) return 2;
        }
        return 1;
    });
    const [expandBurger, setExpandBurger] = useState(false);
    const [scroll, setScroll] = useState(false);

    const navigate = useNavigate();

    const handleResize = useCallback(() => {
        const width = window.innerWidth;
        if (width <= 1440 && width >= 1000) setResize(1);
        else if (width <= 1000 && width >= 465) setResize(2);
        else setResize(1);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    useEffect(() => {
        const handleScroll = () => setScroll(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activateLoad = (pageNum) => {
        setLoading({ fadeIn: true, fadeOut: false });
        setTimeout(() => {
            const routes = [
                "/",
                "/LiveStream",
                "/Location",
                "/COC",
                "/PT",
                "/Saints",
                "/Ministries",
                "/Calendar",
                "/Gallery",
            ];
            navigate(routes[pageNum] || "/");
            setLoading({ fadeIn: false, fadeOut: true });
        }, 2000);
    };

    useEffect(() => {
        const menu = document.querySelector(".menuContainer");
        const nav = document.querySelector(".navContainer");
        const socialLinks = document.querySelector(".socialLinks");

        if (!menu || !nav) return;

        if (resize === 1) {
            menu.classList.remove("mobile", "expanded");
            menu.classList.add("fullScreen");
            nav.classList.remove("hiddenNav");
        }

        if (resize === 2) {
            menu.classList.remove("fullScreen");
            menu.classList.add("mobile");

            if (expandBurger) {
                menu.classList.add("expanded");
                socialLinks?.classList.add("linksExpand");
                nav.classList.remove("hiddenNav");
            } else {
                menu.classList.remove("expanded");
                socialLinks?.classList.remove("linksExpand");
                nav.classList.add("hiddenNav");
            }
        }
    }, [resize, expandBurger]);

    const dropdownOptions = (index) => {
        const isActive = dropdown === index;
        const className = isActive ? "options" : "noOptions";

        const linkStyle = {
            background: "var(--secondary)",
            color: expandBurger && resize === 2 ? "var(--thirdly)" : "",
        };

        switch (index) {
            case 1:
                return (
                    <div className={className}>
                        <button
                            style={linkStyle}
                            onClick={() => activateLoad(1)}
                            className="dropdownLink"
                        >
                            <p>LiveStream</p>
                        </button>
                        <button
                            style={linkStyle}
                            onClick={() => activateLoad(2)}
                            className="dropdownLink"
                        >
                            <p>Location</p>
                        </button>
                    </div>
                );
            case 2:
                return (
                    <div className={className}>
                        <button
                            style={linkStyle}
                            onClick={() => activateLoad(3)}
                            className="dropdownLink"
                        >
                            <p>The Coptic Orthodox Church</p>
                        </button>
                        <button
                            style={linkStyle}
                            onClick={() => activateLoad(4)}
                            className="dropdownLink"
                        >
                            <p>H.H Pope Tawadros II</p>
                        </button>
                        <button
                            style={linkStyle}
                            onClick={() => activateLoad(5)}
                            className="dropdownLink"
                        >
                            <p>Our Saints</p>
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div
                className={`loadContainer ${loading.fadeOut ? "fadeOut" : ""
                    } ${loading.fadeIn ? "fadeIn" : ""}`}
            >
                <div className="logoContainer">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <circle
                            r="50%"
                            cx="50%"
                            cy="50%"
                            fill="none"
                            stroke="var(--fifthly)"
                            strokeWidth="20"
                        />
                    </svg>
                    <img src={loadingImg} alt="Loading" />
                </div>
            </div>

            <div
                className={`menuContainer ${resize === 2
                    ? expandBurger
                        ? "mobile expanded"
                        : "mobile"
                    : "fullScreen"
                    }`}
                onClick={() => !expandBurger && resize === 2 && setExpandBurger(true)}
            >
                {resize === 2 && (
                    <button
                        className={`hamburgerMenu ${expandBurger ? "open" : ""}`}
                        onClick={() => setExpandBurger((prev) => !prev)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                )}

                <nav className={`navContainer ${scroll ? "scroll" : ""}`}>
                    <span className="navGroup leftNav">
                        <li
                            className="link"
                            onMouseOver={() => setDropdown(1)}
                            onMouseLeave={() => setDropdown(null)}
                        >
                            <p>Parish</p>
                            {dropdownOptions(1)}
                        </li>
                        <li
                            className="link"
                            onMouseOver={() => setDropdown(2)}
                            onMouseLeave={() => setDropdown(null)}
                        >
                            <p>Faith</p>
                            {dropdownOptions(2)}
                        </li>
                        <li onClick={() => activateLoad(6)} className="link">
                            <p>Ministries</p>
                        </li>
                        <li onClick={() => activateLoad(7)} className="link">
                            <p>Calendar</p>
                        </li>
                        {expandBurger && resize === 2 && (
                            <li onClick={() => activateLoad(9)} className="link">
                                <p>Gallery</p>
                            </li>
                        )}
                    </span>

                    <span className="navGroup centerLogo">
                        <img
                            onClick={() => activateLoad(0)}
                            className="smpkLogo"
                            src={logo}
                            alt="logo"
                        />
                    </span>

                    <span className="navGroup rightNav">
                        {resize === 1 && (
                            <li onClick={() => activateLoad(9)} className="link">
                                <p>Gallery</p>
                            </li>
                        )}
                        <li className="socialLinks">
                            <a
                                href="https://www.facebook.com/SMPKChurchSeattle/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook fill="var(--thirdly)" />
                            </a>
                            <a
                                href="https://chat.whatsapp.com/I24sKttVnz1Dm3bsm6cnfe"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Whatsapp fill="var(--thirdly)" />
                            </a>
                            <a
                                href="https://www.youtube.com/@st.minapopekyrillosvicocbo8845"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Youtube fill="var(--thirdly)" />
                            </a>
                        </li>
                    </span>
                </nav>
            </div>
        </>
    );
};

export const Header = (props) => {
    return (
        <div className="headerContainer">
            <img src={props.img} />
            <h1 style={{ color: props.textColor }}>{props.title}</h1>
            <svg width="300" height="25" viewBox="0 0 588 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M275.8 16.0873L286.148 21.6266C286.303 19.8175 285.977 18.1821 286.643 17.4513C287.309 16.7204 288.948 16.9447 290.525 16.6879C289.737 14.9801 289.046 13.276 288.181 11.6695C287.316 10.0631 286.26 8.49281 285.134 6.66204C286.368 6.15551 287.667 5.72132 288.847 5.10625C289.535 4.70806 290.148 4.19114 290.656 3.5794C291.097 3.09457 291.325 2.42884 291.741 1.92592C293.138 0.272438 294.712 0.0770607 295.721 1.92592C297.103 4.48393 299.339 5.33781 301.752 6.21701C302.037 6.34038 302.312 6.48553 302.574 6.65119L297.11 16.7096C298.807 16.9194 300.454 16.6517 301.108 17.3319C301.763 18.0121 301.532 19.68 301.713 21.1418C305.465 20.2047 308.641 18.1351 311.843 15.8521C312.097 16.1697 312.313 16.5158 312.487 16.8832C313.254 19.2386 314.217 21.2829 316.663 22.5637C318.439 23.4972 318.7 25.5667 317.234 26.4532C314.387 28.1754 312.922 30.7008 312.136 33.5302L301.778 27.9221C301.564 29.7312 301.832 31.3521 301.141 32.1553C300.533 32.879 298.854 32.6474 297.338 32.879C298.152 34.6229 298.854 36.3343 299.73 37.9443C300.605 39.5544 301.669 41.1066 302.729 42.8107C302.279 43.0648 301.812 43.2896 301.333 43.4837C299.209 44.2073 297.396 45.0503 296.228 47.2899C295.142 49.3957 293.272 49.573 292.273 47.7314C290.826 45.0539 288.46 44.1422 285.934 43.2304C285.714 43.1321 285.506 43.0109 285.312 42.8686C285.272 42.8433 285.265 42.7673 285.312 42.8686L290.703 32.9115C288.984 32.6438 287.331 32.8645 286.705 32.1626C286.079 31.4607 286.31 29.7927 286.144 28.302C282.417 29.4707 279.132 31.3594 275.977 33.769C275.689 33.2858 275.433 32.7842 275.21 32.2675C274.486 30.1726 273.705 28.3346 271.418 27.1732C269.208 26.0516 269.117 23.6925 271.208 22.5709C273.661 21.2503 274.58 19.2025 275.391 16.8796C275.474 16.6546 275.573 16.4357 275.688 16.2247C275.742 16.1234 275.84 16.0438 275.8 16.0873Z" fill={props.color} />
                <path d="M253.979 20.3168V29.724L0.932068 28.302L253.979 20.3168Z" fill={props.color} />
                <path d="M333.961 20.376V29.707L587.176 28.2966L333.961 20.376Z" fill={props.color} />
            </svg>
        </div>
    )
}

export const IconHeader = (props) => {
    const createContext = (num) => {
        switch (num) {
            case 0:
                return <p style={{ color: props.textColor }}><a style={{ color: props.textColor }} href={props.link}>{props.header}</a></p>;
            case 1:
                return <h2 style={{ color: props.textColor, fontSize: props.textSize }}>{props.header}</h2>;
            default:
                break;
        }
    }

    return (
        <div className="iconHeader">
            <img className="iconSize" src={props.imgSrc} alt="icon" />
            {(props.imgSrc === donationBox || props.imgSrc === check) ? createContext(1) : createContext(0)}
        </div>
    )
}

export const PrimaryButton = (props) => {
    const buttonHover = (event) => {
        event.target.style.background = 'red';
        event.target.style.transition = 'background 0.3 var(--motion)';
    }

    return (
        <div className="pBtn" onMouseOver={buttonHover} style={{ background: props.backgroundColor, border: `calc(var(--space) / 5) solid ${props.borderColor}`, boxShadow: 'none' }}>
            <h2 style={{ color: props.textColor, width: '100%', textAlign: 'center' }}>{props.content}</h2>
        </div>
    )
}

export const SecondaryButton = (props) => {
    return (
        <div className="sBtn">
            <Paypal firstColor="var(--sixthly)" secondColor="var(--fifthly)" />
            <h2>{props.content}</h2>
        </div>
    )
}

export const TertiaryButton = (props) => {
    return (
        <div className="tBtn" style={{ background: 'transparent', border: 'solid var(--fourthly)' }}>
            <img className="iconSize" src={props.link} alt="image" />
            <p style={{ color: 'var(--fourthly)' }}>{props.content}</p>
        </div>
    )
}

export const FourthlyButton = (props) => {
    return (
        <div className="fBn" style={{ background: 'transparent', border: 'solid var(--sixthly)' }}>
            <p style={{ color: 'var(--sixthly)', whiteSpace: 'nowrap' }}>{props.content}</p>
            <Whatsapp fill="var(--sixthly)" />
        </div>
    )
}

export const SectionBox = (props) => {
    return (
        <Link to={props.link} style={{ display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center', gap: 'var(--space)' }}>
            <img className='imgBox' src={props.img} style={{ borderRadius: 'var(--space)', boxShadow: '0px 5px 10px var(--fifthly)' }} />
            <h2 style={{ padding: 0, margin: 0, color: 'var(--sixthly)' }}>{props.header}</h2>
            <p style={{ padding: 0, margin: 0, color: 'var(--sixthly)', textAlign: 'center' }}>{props.paragraph}</p>
        </Link>
    )
}

export const Title = (props) => {
    const [resize, setResize] = useState(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth <= 1440 && window.innerWidth >= 1000) return 1;
            if (window.innerWidth <= 1000 && window.innerWidth >= 465) return 2;
        }
        return 1;
    });

    const handleResize = useCallback(() => {
        const width = window.innerWidth;

        if (width > 1440) {
            setResize(1);
        } else if (width <= 1440 && width >= 1000) {
            setResize(1);
        } else if (width <= 1000 && width >= 465) {
            setResize(2);
        } else {
            setResize(2);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("orientationchange", handleResize);
        window.addEventListener("focus", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("orientationchange", handleResize);
            window.removeEventListener("focus", handleResize);
        };
    }, [handleResize]);

    return (
        <div className="titleContainer" >
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--space)', alignItems: 'center' }}>
                <Cross fill={props.crossFill} />
                <h2 style={{ color: props.h2Color, fontSize: props.textSize, lineHeight: 1, gap: '0.5vw', textAlign: 'start', whiteSpace: 'nowrap' }}>{props.service}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--space)', alignItems: 'center', whiteSpace: 'nowrap' }}>
                <Cross fill="transparent" />
                <p style={{ color: props.h2Color, whiteSpace: 'wrap' }}>{props.time}</p>
            </div>
        </div>
    )
}

export default function init() {
    return (
        <>
            <Navbar />
            <Header img="" textColor="" title="" color="" />
            <IconHeader imgSrc="" link="" header="" textColor="" textSize="" />
            <PrimaryButton backgroundColor="" borderColor="" textColor="" content="" />
            <SecondaryButton link="" content="" />
            <FourthlyButton link="" content="" />
            <SectionBox link="" img="" header="" paragraph="" />
            <Facebook fill="" />
            <Whatsapp fill="" />
            <Youtube fill="" />
            <Paypal firstColor="" secondColor="" />
            <Cross fill="" />
            <Title service="" time="" crossFill="" h2Color="" textSize="" />
        </>
    )
}