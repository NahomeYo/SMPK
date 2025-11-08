import "./App.css";
import "./index.css";
import "./img/shapes.css";
import { useEffect, useState, useCallback } from 'react';
import { Header, Title, Cross } from './designKit/Navbar.js';
import { Termtab } from './fetchData.js';
import pope from './img/pope.jpg';
import PK from './img/popeKyrillos.png';
import SM from './img/stMina.png';
import { StMarkIcon } from "./img/StMarkIcon.js";
import { HolyTrinity } from "./img/HolyTrinity.js";

export const Saints = (props) => {
    return (
        <>
            <article className="article" style={{ paddingTop: props.height, width: 'var(--pageWidth)', margin: "var(--paddingSides)" }} >
                <Header textColor="var(--sixthly)" title="Our Saints" color="var(--sixthly)" />

                <span style={{ gridTemplateRows: 'repeat(2, auto)' }}>
                    <span style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', position: "relative" }}>
                        <div>
                            <Title service="Saint Mina" time="The Wonderworker" crossFill="var(--sixthly)" h2Color="var(--sixthly)" textSize="1.25rem" />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space)' }}>
                                <p className="introduction">St. Mina was born in Egypt, in the city of Niceous, to good Christian parents. The mother who could not have children would pray in front of St. Mary's icon, tearfully asking to be blessed with a child. Once while she was praying this prayer, she heard an "Amen". Thus when she finally had a son, she named him "Mina".
                                    St. Mina's father, Audexios, held an important position in the Roman Empire. When he died Mina was but fourteen years old. St. Mina then joined the army, and was given a very high position due to his father's prominence. St. Mina was sent by the army to Algeria to serve his country.
                                    Strongly desiring to serve God rather than his country, he resigned from the army after three short years and devoted his entire life to the Lord Jesus Christ.</p>
                                <p className="introduction">St. Mina became a hermit leaving everything to follow the Lord Jesus Christ. While a hermit, he saw visions of heavenly angels crowning martyrs with beautiful and glorious crowns. One day as St. Mina was contemplating his visions; he heard a voice say, "Blessed are you, Abba Mina, because you have been called for the pious life from your childhood. You shall be granted three crowns; one for your celibacy, the second for your asceticism, and the third because you will be martyred."</p>
                                <p className="introduction">Following this St. Mina was overwhelmed by a great desire to live in Heaven. In true faith and with devotion in his heart, he went to the Roman ruler declaring that he was a Christian. St. Mina was severely tortured with endless sufferings. His suffering attracted many pagans not only to Christianity but to martyrdom as well.
                                    The saint's hardhearted assassins tried to burn his young body but the fire had no effect upon it. Obtaining his discarded body, some Christian believers placed it upon the back of a camel and set out for the Western Desert. While on this journey, the camel suddenly stopped at a certain spot in the desert and could not forcibly be made to move. St. Mina was buried in this particular area. His present monastery marks this spot today at the end of the Lake of Marriute, close to the City of Alexandria.</p>
                            </div>
                        </div>

                        <div style={{ position: 'relative', display: "flex", alignItems: "start", justifyContent: "center" }}>
                            <img src={SM} style={{ position: 'relative', padding: 0, margin: 0, height: "min-content" }} alt="stMina" />
                        </div>
                    </span>

                    <p className="introduction">Several years after his burial, shepherds were tending their sheep at this location and a very sick little lamb fell to the ground. The shepherds were astonished that the sickly little lamb after falling on this particular spot raised itself completely cured. The story quickly spread throughout the countryside and many sick people came to the spot where the small lamb was cured. Just simply lying on this spot cured many.</p>
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space)' }}>
                    <Title service="Pope Saint Kyrillos VI (Cyril VI)" time="116th Pope of Alexandria" crossFill="var(--sixthly)" h2Color="var(--sixthly)" textSize="1.25rem" />

                    <span style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space)' }}>
                            <p className='introduction'>Pope Kyrillos the 6th was born on August 2nd, 1902 – named Azer Youssef Atta to a God – loving family rooted in prayer and service in Damanhour, Egypt.  At a very young age, Azer was attracted to the beauty of holiness and solitude.  It was said that he had the majority of the Gospel of St. John memorized at a very early age in which he would happily recite the beautiful verses to his teachers and classmates, who ended up picking them up themselves.
                                When Azer was only about 7 years of age, his mother Esther, passed away.  And she gave him a very interesting gift before her passing.  That gift was an introduction to <q>St. Mina the Martyr & Wonderworker.</q></p>
                            <p className="introduction">Azer continued in the love of God and was called to the monastic life in 1927 at the Baramous Monastery where he was ordained with the name Fr. Mina El-Baramousy.   Interestingly, the name Mina that he was named after was not the same St. Mina the Martyr and Wonderworker that he loved.  He was named after St. Mina the monk.  But we can only help to realize that the name Mina was chasing after him.  Fr. Mina El-Baramousy continued to grow strong in spirit and God gave him a multitude of talents in which the most popular of them are the gift of performing miracles. He is not considered a saint because of this God-given talent but, he is a saint because of his level of holiness and his great love for God. In his life, his virtues that gave him the ability of carrying out miracles by the name of God, was his life of prayer. </p>
                            <p className="introduction"> In 1944, while Fr. Mina was considered an urban monk living in St. Mina’s church in Old Cairo in which he built, he was appointed as the Head of the monastery of St. Samuel the Confessor.  During this time, students would come to him to get his spiritual guidance.  Among the students were known people such as the future Pope Shenouda III, the future Fr. Matthew the Poor, the future Bishop Domadios of Giza, and the future Bishop Athanasius of Beni-Seuf, who were all vitally important in the Sunday School Movement which would prove to be instrumental in the revitalization of the Coptic Orthodox Church. </p>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <img src={PK} style={{ position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%, -50%)", padding: 0, margin: 0 }} alt="stMina" />
                        </div>
                    </span>

                    <p className="introduction"> In 1959, Fr. Mina the Hermit was ordained as Pope Kyrillos the 6th, the 116th Pope of the Coptic Orthodox Church.  In his 12 years as a Pope, Pope Kyrillos the 6th became the lighthouse of the church, reflecting the Light of God throughout all his work and service. He reinstituted the importance of theological and spiritual knowledge in the churches and monasteries.  He renovated the glorious monasteries of the Egyptian deserts and the cathedral of St. Mark the Evangelist in Cairo.  He brought back the relics of St. Mark from Italy, and he established churches in the United States of America, Europe, Canada, Australia, and Africa.  Additionally, during his time as Pope, the Blessed Virgin Mary appeared for all to see her on April 2nd, 1968 at St. Mary Coptic Orthodox Church in Zeitoun, Egypt. </p>
                    <p className="introduction"> Our father, St. Kyrillos the 116th Pope of the Church of Alexandria departed to the Heavenly Jerusalem on March 9th, 1971 and was canonized as a Saint in the Coptic Orthodox Church on June 20th, 2013. May his prayers be with us all. Amen. </p>
                </div>
            </article >
        </>
    )
}

export const COC = (props) => {
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

    useEffect(() => {
        const lengthyTabOutline = document.querySelectorAll('.lengthyTab');
        let tabSquare = document.createElement('div');
        tabSquare.style.width = '1rem';
        tabSquare.style.height = '1rem';
        tabSquare.style.margin = '0';
        tabSquare.style.padding = '0';
        tabSquare.style.background = 'var(--fifthly)';
        tabSquare.style.position = 'absolute';
        tabSquare.style.left = '0';
        tabSquare.style.top = '0';

        if (lengthyTabOutline) {
            lengthyTabOutline.forEach((tab) => {
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

    let Baptism = "https://live.staticflickr.com/65535/54194457239_54869116d7_m.jpg";
    let Myron = "https://live.staticflickr.com/65535/54194900669_232232905c_w.jpg";
    let Communion = "https://live.staticflickr.com/65535/54614019766_87cc3ca974_z.jpg";
    let Confession = 'https://live.staticflickr.com/65535/54614307958_0436365249_z.jpg';
    let Priesthood = 'https://live.staticflickr.com/65535/54614291089_fa59f5ba0d_b.jpg';
    let Marriage = 'https://live.staticflickr.com/65535/54614401420_93b77ee82b_m.jpg';
    let UnctionoftheSick = 'https://live.staticflickr.com/65535/54614090736_28529c169b_z.jpg';

    useEffect(() => {
        const sacSections = [Baptism, Myron, Communion, Confession, Priesthood, Marriage, UnctionoftheSick];
        const gridContainer = document.querySelector('.sacramentsSection span');

        if (gridContainer && !gridContainer.querySelector('img')) {
            const imgElements = [];
            const totalItems = sacSections.length;

            gridContainer.style.padding = '0';
            gridContainer.style.height = '50vh';
            gridContainer.style.overflow = 'hidden';
            gridContainer.style.position = 'relative';
            gridContainer.style.display = 'flex';
            gridContainer.style.flexDirection = (resize === 2) ? "column" : "row";
            gridContainer.style.flexWrap = 'nowrap';
            gridContainer.style.gap = 'calc(var(--space) / 2)';
            gridContainer.style.justifyContent = 'center';

            sacSections.forEach((link) => {

                let sacBoxImg = document.createElement('img');
                let sacBox = document.createElement('div');

                sacBoxImg.src = link;
                sacBoxImg.alt = "Sacrament image";
                sacBoxImg.style.width = '100%';
                sacBoxImg.style.height = '100%';
                sacBoxImg.style.position = 'absolute';
                sacBoxImg.style.left = '0';
                sacBoxImg.style.top = '0';

                sacBoxImg.style.objectFit = 'cover';

                sacBox.appendChild(sacBoxImg);

                sacBox.style.width = `calc(100% / ${totalItems})`;
                sacBox.style.filter = 'sepia(100%)';
                sacBox.style.transition = 'all 0.3s var(--motion)';
                sacBox.style.position = 'relative';

                gridContainer.appendChild(sacBox);
                imgElements.push(sacBox);

                let box;

                sacBox.addEventListener("mouseenter", (event) => {
                    const hoveredIndex = imgElements.indexOf(event.target);

                    imgElements.forEach((img, imgIndex) => {
                        let boxTitle, boxDescription;
                        img.style.position = "relative";

                        switch (imgIndex) {
                            case 0:
                                boxTitle = "Baptism";
                                boxDescription = "Baptism is the first sacrament, and through it we are born again from water and spirit by being submerged in water three times. Baptism results in the admittance of a person into the fellowship of the church.";
                                break;

                            case 1:
                                boxTitle = "Chrismation";
                                boxDescription = "Chrismation, also known as “Myron,” is the anointing with consecrated oil (Myron) of those newly baptized, and like the rest of the sacraments, is conducted by a priest. Chrism allows for the Holy Spirit to dwell in those who are newly baptized.";
                                break;

                            case 2:
                                boxTitle = "Holy Communion";
                                boxDescription = "The Eucharist, or the Holy Communion, carries “the most sublime grace of all.” The Eucharist is carried out in the Holy Liturgy, during which the bread and wine become the true Body and Blood of Jesus Christ, and in partaking of this Body and Blood, we enter into complete communion with God.";
                                break;

                            case 3:
                                boxTitle = "Repentance and Confession";
                                boxDescription = "Through the sacrament of Repentance and Confession, we can attain the forgiveness of our sins. True repentance requires contrition and remorse for our sins, genuine intention to improve, strong faith, and finally, verbal confession before a priest.";
                                break;

                            case 4:
                                boxTitle = "Priesthood";
                                boxDescription = "The gift of serving God is bestowed through the sacrament of Priesthood. There are three ranks in the Priesthood: the order of the deacons, who serve; the order of the Priests, who teach; and the order of the Bishops, who oversee and shepherd. Priesthood is a divine calling, and it is the sacred duty of the priest to guide the salvation of his people.";
                                break;

                            case 5:
                                boxTitle = "Holy Matrimony";
                                boxDescription = "In the sacrament of Holy Matrimony, the Holy Spirit descends upon the bride and groom and unites them to one body.";
                                break;

                            case 6:
                                boxTitle = "Unction of the Sick";
                                boxDescription = "In the sacrament of the Unction of the Sick, the priest anoints the sick with oil, cleansing them from physical and psychological ailments. In this sacrament, the priest also prays with the sick and their family.";
                                break;
                        }

                        if (imgIndex === hoveredIndex) {
                            box = document.createElement("div");
                            const title = document.createElement("h1");
                            const para = document.createElement("p");
                            title.textContent = boxTitle;
                            para.textContent = boxDescription;
                            title.style.color = "var(--thirdly)";
                            title.style.whiteSpace = "nowrap";
                            para.style.color = "var(--secondary)";

                            title.style.zIndex = "2";
                            para.style.zIndex = "2";
                            box.style.display = "flex";
                            box.style.flexDirection = "column";
                            box.style.justifyContent = "center";
                            box.style.alignItems = "center";
                            box.style.display = "flex";
                            box.style.justifyContent = "center";
                            box.style.alignItems = "center";
                            box.style.width = "100%";
                            box.style.height = "min-content";
                            box.style.background = "var(--fifthly)";
                            box.style.zIndex = "1";
                            box.style.padding = "0.5rem";
                            box.appendChild(para);
                            box.prepend(title);
                            img.prepend(box);
                            img.style.width = "100%";
                            img.style.filter = 'sepia(0%)';
                            img.style.objectPosition = '0% 50%';
                            img.style.overflow = "hidden";
                            img.style.display = "flex";
                            img.style.justifyContent = "end";
                            img.style.alignItems = "end";
                            img.style.borderRadius = "1rem";
                        }
                    });
                });

                sacBox.addEventListener("mouseleave", (event) => {
                    const hoveredElement = imgElements.indexOf(event);
                    box.remove();

                    imgElements.forEach((img, imgIndex) => {
                        if (imgIndex === hoveredElement) {
                            img.style.filter = 'sepia(100%)';
                            img.style.width = `calc(100% / ${totalItems})`;
                            img.style.borderRadius = "0";
                        } else {
                            img.style.filter = 'sepia(100%)';
                            img.style.width = `calc(100% / ${totalItems})`;
                            img.style.borderRadius = "0";
                        }
                    });
                });
            });
        }
    }, []);

    let creedText = `We believe in one God, God the Father the Pantocrator who created heaven and earth, and all things seen and unseen.
We believe in one Lord Jesus Christ, the Only-Begotten Son of God, begotten of the Father before all ages; Light of Light, true God of true God, begotten not created, of one essence with the Father, by whom all things were made; Who for us men and for our salvation came down from heaven, and was incarnate of the Holy spirit and the Virgin Mary and became Man. And He was crucified for us under Pontius Pilate, suffered and was buried. And on the third day He rose from the dead, according to the scriptures, ascended to the heavens; He sits at the right hand of his Father, and He is coming again in His glory to judge the living and the dead, Whose kingdom shall have no end.
Yes, we believe in the Holy Spirit, the Lord, the Life-Giver, Who proceeds from the Father, Who with the Father and the Son is worshipped and glorified, who spoke by the prophets.
And in one holy, catholic and apostolic church. We confess one baptism for the remission of sins. We look for the resurrection of the dead, and the life of the coming age. Amen.`;

    const timeline = document.querySelector('timeline');

    if (timeline) {
        const timelineHeight = window.getComputedStyle(timeline, "height");
        const timelineLine = document.querySelector("timeline line");

        if (timelineLine) {
            timelineLine.style.height = timelineHeight;
        }
    }

    useEffect(() => {
        const figures = document.querySelectorAll('.figures div');
        const rightHand = document.querySelector('.Right_hand');
        const leftHand = document.querySelector('.Left_hand');
        const body = document.querySelector('.Body');
        const head = document.querySelector('.Head');
        const scroll = document.querySelector('.Scroll');
        const angel = document.querySelector('.Angel');
        const waters = document.querySelectorAll(".water");

        let stMaryArray = [rightHand, leftHand, body, head, scroll, angel];

        const observer = new IntersectionObserver(entries => {
            let delay = 0;

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.closest('.figures')) {
                        entry.target.classList.add('popUpAnim');
                        entry.target.style.animationDelay = `${delay}s`;
                        delay += 0.5;

                    } else if (stMaryArray.includes(entry.target)) {

                        if (entry.target === (stMaryArray[0])) {
                            entry.target.classList.add('rightHandAnim');
                        }

                        if (entry.target === (stMaryArray[1])) {
                            entry.target.classList.add('leftHandAnim');
                        }

                        if (entry.target === (stMaryArray[2])) {
                            entry.target.classList.add('bodyAnim');
                        }

                        if (entry.target === (stMaryArray[3])) {
                            entry.target.classList.add('headAnim');
                        }

                        if (entry.target === (stMaryArray[4])) {
                            entry.target.classList.add('scrollAnim');
                        }

                        if (entry.target === (stMaryArray[5])) {
                            entry.target.classList.add('angelFloatAnim');
                        }

                    } else if (entry.target.closest('.water')) {
                        if (entry.target === (waters[0])) {
                            entry.target.classList.add('slideLeftAnim');
                        }

                        if (entry.target === (waters[1])) {
                            entry.target.classList.add('slideRightAnim');
                        }

                        if (entry.target === (waters[2])) {
                            entry.target.classList.add('slideLeftAnim');
                        }
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        });

        figures.forEach((f) => {
            observer.observe(f);
        });

        stMaryArray.forEach((f) => {
            observer.observe(f);
        });

        waters.forEach((w) => {
            observer.observe(w);
        })
    }, [])

    const leftTimeSlot = (cardInfo) => {
        return (
            <li className="leftSlot" style={{ overflow: 'visible', position: 'relative', display: 'flex', flexDirection: 'row' }}>
                <li style={{ display: 'flex', flexDirection: 'row', flexWrap: 'none', background: 'var(--secondary)', border: 'var(--border) solid var(--fifthly)', borderRadius: "4rem 0rem 0rem 4rem", height: 'min-content' }}>
                    {cardInfo}
                </li>
                <ol></ol>
            </li>
        )
    }

    const rightTimeSlot = (cardInfo) => {
        return (
            <li className="rightSlot" style={{ overflow: 'visible', position: 'relative', display: 'flex', flexDirection: 'row', width: "100%" }}>
                <ol></ol>
                <li style={{ display: 'flex', flexDirection: 'row', flexWrap: 'none', background: 'var(--secondary)', border: 'var(--border) solid var(--fifthly)', borderRadius: "0 4rem 4rem 0", height: 'min-content' }}>
                    {cardInfo}
                </li>
            </li>
        )
    }

    return (
        <>
            <article className="article" style={{ paddingTop: props.height, width: "100vw", margin: 0 }} >
                <span style={{ display: "flex", justifyContent: "center", alignContent: "center", height: 'min-content', gap: 'var(--space)', flexDirection: "column", margin: 0 }}>
                    <Header textColor="var(--sixthly)" title="The Coptic Orthodox Church" color="var(--sixthly)" />

                    {resize === 2 ?
                        <span style={{ listStyle: 'none', display: 'grid', gridTemplateRows: '1fr auto', width: 'var(--pageWidth)', padding: 'var(--paddingSides)', marginBottom: 'var(--space)', gap: 'var(--space)' }}>
                            <li style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr' }}>
                                <li style={{ position: 'relative' }}>
                                    <Title service="Introduction" time={<p className="creed" style={{ color: 'var(--fifthly)', textAlign: 'justify', textJustify: 'inter-word' }}>The Coptic Church was established in the name of the Lord <b style={{ color: 'var(--sixthly)', fontWeight: 'bolder' }} >Jesus Christ</b> by <b style={{ color: 'var(--sixthly)', fontWeight: 'bolder' }}>St. Mark the Evangelist</b> in the city of Alexandria around 43 A.D. The church adheres to the Nicene Creed.</p>} crossFill="var(--fifthly)" h2Color="var(--fifthly)" textSize="" />
                                </li>
                                <li style={{ position: 'relative' }}>
                                    <StMarkIcon />
                                </li>
                            </li>

                            <p style={{ color: 'var(--fifthly)', textAlign: 'justify', textJustify: 'inter-word', marginLeft: '50px', background: 'linear-gradient(0deg,rgba(248, 231, 159, 1) 0%, rgba(248, 231, 159, 1) 79%, rgba(248, 231, 159, 0) 99%)', zIndex: 10 }}>St. Athanasius (296-373 A.D.), the twentieth Pope of the Coptic Church effectively defended the Doctrine of the Lord Jesus Christ’s Divinity at the Council of Nicea in 325 A.D. His affirmation of the doctrine earned him the title; “Father of Orthodoxy” and St. Athanasius “the Apostolic</p>
                        </span>

                        :

                        <span style={{ listStyle: 'none', display: 'grid', gridTemplateRows: '1fr', gridTemplateColumns: '1fr 1.25fr', width: 'var(--pageWidth)', padding: 'var(--paddingSides)', marginBottom: 'var(--space)' }}>
                            <li style={{ position: 'relative' }}>
                                <Title service="Introduction" time={<p className="creed" style={{ color: 'var(--fifthly)', textAlign: 'justify', textJustify: 'inter-word' }}>The Coptic Church was established in the name of the Lord <b style={{ color: 'var(--sixthly)', fontWeight: 'bolder' }} >Jesus Christ</b> by <b style={{ color: 'var(--sixthly)', fontWeight: 'bolder' }}>St. Mark the Evangelist</b> in the city of Alexandria around 43 A.D. The church adheres to the Nicene Creed. St. Athanasius (296-373 A.D.), the twentieth Pope of the Coptic Church effectively defended the Doctrine of the Lord Jesus Christ’s Divinity at the Council of Nicea in 325 A.D. His affirmation of the doctrine earned him the title; “Father of Orthodoxy” and St. Athanasius “the Apostolic</p>} crossFill="var(--fifthly)" h2Color="var(--fifthly)" textSize="" />
                            </li>
                            <li style={{ position: 'relative' }}>
                                <StMarkIcon />
                            </li>
                        </span>
                    }

                    <div className='doo' style={{ background: 'var(--secondary)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 'var(--space)', zIndex: 1, height: 'min-content', width: "var(--pageWidth)", padding: "var(--paddingSides)" }}>
                        <Header title="The Holy Trinity" color="var(--thirdly)" />

                        <div style={{ position: 'relative', zIndex: '2' }}>
                            <div className="trinityExplain" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', marginBottom: 'var(--space)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                    <p>The Coptic Orthodox Church believes in the Holy Trinity:</p>

                                    <span className="trinity" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                        <div><h1>the</h1><t>Father</t></div>
                                        <div><h1>the</h1><t>Son,</t></div>
                                        <div>
                                            <div style={{ whiteSpace: 'wrap', display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                                <b style={{ color: 'var(--thirdly)' }}>and</b>
                                                <h1>the</h1>
                                            </div>

                                            <t style={{ whiteSpace: 'nowrap' }}>Holy Spirit</t></div>
                                        <i style={{ fontSize: "0.75rem", fontWeight: 'bold', margin: '0', color: 'var(--thirdly)' }}>(being one God)</i>
                                    </span>
                                </div>

                                <div style={{ position: 'relative' }}>
                                    <>
                                    </>
                                </div>
                            </div>
                            <p className='bottom' style={{ width: resize === 2 ? '50%' : "100%" }}>and that our Lord, God and Savior Jesus Christ, the true Son of God, became incarnate, was born of the Virgin Saint Mary, died for us on the Cross that He may grant us Salvation, rose on the third day that He may grant us everlasting life with Him, and ascended to heaven after forty days, sending the Holy Spirit to His disciples as He promised them, on the day of Pentecost.</p>
                        </div>

                        <HolyTrinity />
                    </div>

                    <span style={{ listStyle: 'none', height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space)', width: "var(--pageWidth)", padding: "var(--paddingSides)" }}>
                        <Header textColor="var(--sixthly)" title="Brief History" color="var(--sixthly)" />
                        <div className="timeline" style={{ display: 'flex', position: 'relative' }}>
                            <span>

                                {leftTimeSlot(<Title crossFill="var(--sixthly)" service={<h1 style={{ color: 'var(--thirdly)', textAlign: 'start' }}>33–100 A.D.</h1>} time={<p style={{ color: 'var(--primary)', textAlign: "start" }}>Christianity spread across the Roman Empire. The Church established four main centers: <b style={{ fontWeight: 'bolder', color: 'var(--thirdly)' }}>Jerusalem, Antioch, Alexandria, and Rome.</b> These were the early leadership hubs of the Christian Church.</p>} crossFill='var(--thirdly)' />)}

                                <ul></ul>

                                {(resize === 2) &&
                                    <>
                                        {leftTimeSlot(<Title crossFill="var(--thirdly)" service={<h1 style={{ color: 'var(--thirdly)', textAlign: 'start' }}>325 A.D.</h1>} time={<p style={{ textAlign: 'start', color: 'var(--secondary)' }}>The Council of Nicea was held to reject the false teaching that Jesus was not entirely God. St. Athanasius of Alexandria defended the truth of Christ's divinity, and the Nicene Creed was written, still used today by the Coptic Church.</p>} />)}
                                        <ul></ul>
                                    </>
                                }

                                {leftTimeSlot(<Title crossFill="var(--thirdly)" service={<h1 style={{ color: 'var(--thirdly)', textAlign: 'start' }}>330 A.D.</h1>} time={<p style={{ textAlign: 'start', color: 'var(--secondary)' }}>Constantinople became the fifth Patriarchal center, joining the unified Christian Church.</p>} />)}

                                <ul></ul>

                                {(resize === 2) &&
                                    <>
                                        {leftTimeSlot(<Title crossFill="var(--thirdly)" service={<h1 style={{ color: 'var(--thirdly)', textAlign: 'start' }}>381 A.D.</h1>} time={<p style={{ textAlign: 'start', color: 'var(--secondary)' }}>The Council of Constantinople confirmed the Holy Spirit is fully God, completing the Nicene Creed.</p>} />)}
                                        <ul></ul>
                                    </>
                                }

                                {leftTimeSlot(<Title crossFill="var(--thirdly)" service={<h1 style={{ color: 'var(--thirdly)', textAlign: 'start' }}>431 A.D.</h1>} time={<p style={{ textAlign: 'start', color: 'var(--secondary)' }}>Led by St. Cyril of Alexandria, the Council of Ephesus rejected the teachings of Nestorius and defended the title of Mary as "Mother of God.</p>} />)}

                                <ul></ul>

                                {(resize === 2) &&
                                    <>
                                        {leftTimeSlot(<Title crossFill='var(--thirdly)' service={<h1 style={{ color: 'var(--thirdly)', textAlign: 'start' }}>451 A.D.</h1>} time={<p style={{ textAlign: 'start', color: 'var(--secondary)' }}>At the Council of Chalcedon, a split occurred. Pope Dioscorus of Alexandria rejected a new definition of Christ having "two natures." The Coptic Orthodox Church held to the belief in one united nature of Christ and became a separate branch, now called Oriental Orthodox.</p>} />)}
                                        <ul></ul>
                                    </>
                                }

                                {leftTimeSlot(<Title crossFill="var(--thirdly)" service={<h1 style={{ color: 'var(--thirdly)', textAlign: 'start' }}>1990s</h1>} time={<p style={{ textAlign: 'start', color: 'var(--secondary)' }}>Coptic Orthodox leaders and Eastern Orthodox leaders met and agreed that both sides believe Jesus is fully God and fully human in one nature. This agreement is still awaiting full recognition.</p>} />)}

                            </span>

                            {(resize !== 2) &&
                                <span>
                                    <ul></ul>

                                    {rightTimeSlot(<Title crossFill="var(--thirdly)" service={<h1 style={{ color: 'var(--thirdly)', textAlign: 'start' }}>325 A.D.</h1>} time={<p style={{ textAlign: 'start', color: 'var(--secondary)' }}>The Council of Nicea was held to reject the false teaching that Jesus was not entirely God. St. Athanasius of Alexandria defended the truth of Christ's divinity, and the Nicene Creed was written, still used today by the Coptic Church.</p>} />)}

                                    <ul></ul>

                                    {rightTimeSlot(<Title crossFill="var(--thirdly)" service={<h1 style={{ color: 'var(--thirdly)', textAlign: 'start' }}>381 A.D.</h1>} time={<p style={{ textAlign: 'start', color: 'var(--secondary)' }}>The Council of Constantinople confirmed the Holy Spirit is fully God, completing the Nicene Creed.</p>} />)}

                                    <ul></ul>

                                    {rightTimeSlot(<Title crossFill='var(--thirdly)' service={<h1 style={{ color: 'var(--thirdly)', textAlign: 'start' }}>451 A.D.</h1>} time={<p style={{ textAlign: 'start', color: 'var(--secondary)' }}>At the Council of Chalcedon, a split occurred. Pope Dioscorus of Alexandria rejected a new definition of Christ having "two natures." The Coptic Orthodox Church held to the belief in one united nature of Christ and became a separate branch, now called Oriental Orthodox.</p>} />)}
                                </span>}
                        </div>
                    </span>

                    <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space)', width: "var(--pageWidth)", padding: "var(--paddingSides)" }}>
                        <Header textColor="var(--fifthly)" title="Terms" color="var(--fifthly)" />

                        <Termtab
                            term="Coptic"
                            definition={<p style={{ color: 'var(--fifthly)' }}>The term <q>Coptic</q> is derived from the Greek <q>Aigyptos</q> meaning <q>Egyptian</q></p>}
                            color="var(--secondary)"
                        />

                        <Termtab
                            term="Orthodoxy"
                            definition=
                            {<p style={{ color: 'var(--fifthly)' }}>
                                The term <q>Orthodoxy</q> here refers to the preservation of the <q>Original Faith</q> by the Copts who, throughout the ages, defended the Old Creed against the numerous attacks aimed at it.
                            </p>}
                            color="var(--secondary)"
                        />

                        <Termtab
                            term="The Coptic Language"
                            definition={<p style={{ color: 'var(--fifthly)' }}>It is the last shape of the language of the ancient Egyptians. The earlier shapes represented in the Hieroglyphic and Hieratic and Demotic alphabet became inaccessible to the growing needs of daily life. After the spread of Christianity, Egyptian scholars trans-literated Egyptian texts into the Greek alphabet, and adopted the last seven additional letters of the Coptic alphabet from their own Demotic.</p>}
                            color="var(--secondary)"
                        />
                    </span>

                    <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space)', width: "var(--pageWidth)", padding: "var(--paddingSides)" }} className="sacramentsSection">
                        <Header textColor="var(--fifthly)" title="Sacraments" color="var(--fifthly)" />
                        <p style={{ color: 'var(--secondary)' }}>The Seven Sacraments of the Church are the channels by which we receive the graces and blessings of the Holy Spirit.<br></br><b style={{ color: 'var(--sixthly)', textDecoration: 'none' }}> - H.G. Bishop Mettaous, Bishop and Abbot of St. Mary Monastery, El-Sorian</b></p>

                        <span style={{ flexDirection: resize === 2 ? 'column' : 'row' }}>
                        </span>
                    </span>
                </span >

                <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--secondary)', height: 'min-content', gap: 'var(--space)', overflow: 'hidden', width: "80%", padding: "var(--paddingSides)" }}>
                    <Header title="Our Creed" color="var(--thirdly)" />

                    <span>
                        <Title service="Introduction to the Creed" h2Color="var(--thirdly)" crossFill="var(--thirdly)" time="We magnify you, O Mother of the true Light. We glorify you, O holy Virgin, Mother of God, for you have borne for us the Saviour of the whole world; He came and saved our souls. Glory to Thee Christ, our Master and our King, the pride of the Apostles, the crown of the martyrs, the joy of the righteous, the firmness of the churches and the forgiveness of our sins. We proclaim the Holy Trinity, One God. We worship Him. We glorify Him. Lord have mercy, Lord have mercy, Lord bless us. Amen." />
                    </span>

                    <Title service="Creed" h2Color="var(--thirdly)" time={creedText} crossFill="var(--thirdly)" />
                </div>
            </article >
        </>
    )
}

export const Pope = (props) => {
    useEffect(() => {
        const lengthyTabOutline = document.querySelectorAll('.lengthyTabOutline');
        let tabSquare = document.createElement('div');
        tabSquare.style.width = '1rem';
        tabSquare.style.height = '1rem';
        tabSquare.style.margin = '0';
        tabSquare.style.padding = '0';
        tabSquare.style.background = 'var(--sixthly)';
        tabSquare.style.position = 'absolute';
        tabSquare.style.left = '0';
        tabSquare.style.top = '0';

        if (lengthyTabOutline) {
            lengthyTabOutline.forEach((tab) => {
                let clone001 = tabSquare.cloneNode(true);
                tab.append(clone001);

                let clone002 = clone001.cloneNode(true);
                clone002.style.position = 'absolute';
                clone002.style.width = '1rem';
                clone002.style.height = '1rem';
                clone002.style.margin = '0';
                clone002.style.padding = '0';
                clone002.style.background = 'var(--sixthly)';
                clone002.style.position = 'absolute';
                clone002.style.left = '100%';
                clone002.style.transform = 'translateX(-100%)';
                clone002.style.top = '0';
                tab.append(clone002);
            })
        }
    }, [])

    return (
        <article className="article" style={{ paddingTop: props.height }} >
            <div class="lengthyTabOutline">
                <img style={{ width: '4rem', height: '4rem', marginBottom: 'var(--space)', borderRadius: 'calc(var(--space) * 5)' }} src={pope} alt="pope" />
                <li>
                    <h1 style={{ color: 'var(--sixthly)' }}>POPE TAWADROS II OF ALEXANDRIA</h1>
                    <p style={{ textAlign: "center", color: 'var(--sixthly)' }}>The 118th and current Pope of the Coptic Orthodox Church</p>
                </li>
            </div>

            <b style={{ color: 'var(--sixthly)', fontWeight: 'bold', textAlign: "center" }}>“I put myself in the hands of Christ, who is the true leader of the Church.” — <i style={{ fontSize: ' 0.6rem' }}>Pope Tawadros II of Alexandria</i></b>

            <p className="creed" style={{ whiteSpace: 'wrap', color: 'var(--fifthly)' }}>His Holiness Pope Tawadros II was born Wagih Sobhy Baky Soliman on November 4th, 1952 in Mansoura. His father was an irrigation engineer and his family moved around during his childhood from Mansoura to Sohag and then to Damanhour. He received his bachelor’s degree in pharmacy in 1975 from Alexandria University and earned a fellowship for the World Health Organization from the British International Health Institute in England in 1985. He attended the Coptic Seminary and graduated in 1983. He then worked as a manager in a pharmaceutical company in Damanhour that was owned by the Ministry of Health.</p>
            <p className="creed" style={{ whiteSpace: 'wrap', color: 'var(--fifthly)' }}>His Holiness’s life has always revolved around church since his youth; he wished to live the life of monasticism. He entered the Monastery of St. Pishoy in Wadi Elnatroun on August 20th, 1986 and remained a brother for two years. He was ordained a monk on July 31, 1988 and after a year he was ordained a priest on December 23, 1989. Two months after, H.H. Pope Tawadros started serving with H.E. Metropolitan Pakhomius of Beheira on February 15th, 1990. He was ordained a bishop on June 15th, 1997 by H.H. the Late Pope Shenouda III as a General Bishop assisting H.E. Metropolitan Pakhomius. His Holiness focused on childhood whether it was in the country-wide children’s festival as well when he was in charge of the children’s committee in the Holy Synod. Before assuming the papacy, H.H. wrote twelve books.</p>
            <p className="creed" style={{ whiteSpace: 'wrap', color: 'var(--fifthly)' }}>His Holiness was enthroned as the 118th Pope of Alexandria and Pope of the See of St. Mark on November 19th, 2012 at the Cathedral of St. Reweiss in Abbassiya, Cairo. The enthronement was presided by H.E. Metropolitan Pakhomius of Beheira, other metropolitans and bishops of the Coptic church and was attended by many delegates of Christian Churches.</p>
        </article>
    )
}

export default function Init() {
    return (
        <>
            <COC height='' />
            <Pope height='' />
            <Saints height='' />
        </>
    )
}