import './App.css';
import "./animation.css";
import "./media.css";
import { profileData } from './profiles.js'
import { useState, useEffect, useCallback } from "react";
import { hymnsData } from "./hymns.js";
import AudioPlayer from './audioPlayer.js';
import SectionMarker from "./img/Group 4.png";
import psaltosIcon from "./img/Logo.svg";
import coverBorder from "./img/coverBorder.png";
import standEdge from "./img/edge.svg";
import triangle from "./img/triangle.svg";
import cymbals from "./img/deaf.svg";
import Stool from "./img/stool.svg";
import deaconStand from "./img/board.png";
import Jesus from "./img/Jesus.svg";
import heart from "./img/heart.svg";
import repost from "./img/repost.svg";
import share from "./img/share.svg";
import copyLink from "./img/copyLink.svg";
import addToQueue from "./img/addToQueue.svg";
import { Logo, ArtistIcon, CopticCross, HamburgerIcon, SearchIcon, CrossHeader, TitleCrossHeader, CrossSymbol, CrossButton } from './icons.js'
import Robe from "./img/robe.svg"

export function SearchBarComp(props) {
  const hymns = hymnsData()
  const profiles = profileData()
  const [typing, setTyping] = useState("");
  const [dropdown, setDropdown] = useState(false)

  function searchHymn(e) {
    if (e.target.value === "") {
      setTyping("");
      setDropdown(false);
    } else {
      setTyping(e.target.value);
      setDropdown(true);
    }
  }

  const hymnsWithArtists = hymns.map((hymn) => {
    let artist = ""
    let imgLink = ""

    let audioData = hymn.audioFileLink

    profiles.forEach((person) => {
      if (audioData.includes(person.artistName)) {
        artist = person.artistName.replaceAll("_", " ")
        imgLink = person.img
      }
    })

    return { ...hymn, artist, imgLink }
  })

  const filteredHymns = hymnsWithArtists.filter(hymn =>
    hymn.englishTitle.includes(typing)
  ).slice(0, 10);

  function dropdownContainer() {
    return (
      <div className="dropdownContainer" style={{ marginTop: "var(--padding)", display: "flex", width: "100%", flexDirection: "column", alignItems: "start", position: "absolute", background: "var(--fourthy)", overflowY: "scroll", overflowX: "hidden", height: "50vh" }}>
        {filteredHymns.map((hymn, index) => (
          <div key={index} className="titleArtist" style={{ display: "flex", gap: "var(--padding)", marginBottom: "var(--padding)", width: "95%", borderRadius: "0 40px 40px 0", paddingLeft: "var(--border)" }}>
            <img src={hymn.imgLink} style={{ width: "1rem", height: "100%", borderRadius: "10px" }} />
            <div style={{ flexDirection: "column", display: "flex", gap: "0" }}>
              <h3 style={{ whiteSpace: "nowrap", alignContent: "center", color: "var(--thirdly)" }}>{hymn.englishTitle}</h3>
              <p2 style={{ whiteSpace: "nowrap", alignContent: "center" }}>{hymn.artist}</p2>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: props.barWidth }}>
      <div className="searchBar" style={{ height: 'min-content', display: 'flex', flexDirection: "column", alignItems: 'center', borderRadius: props.borderRadius, boxShadow: "0px 10px 20px var(--primary)", overflow: 'hidden', background: props.searchBarBackground, border: `3px solid ${props.borderColor}`, width: "100%", zIndex: 10 }}>
        <span style={{ display: "flex", position: 'relative', alignItems: 'center', justifyContent: "start", padding: "var(--spacing)", width: "100%", gap: "0.25rem" }}>
          <span style={{ marginLeft: "var(--padding)" }}>
            <SearchIcon fill={props.searchIconFill} />
          </span>
          <input placeholder="Search for cantors and hymns" className="typeBox" style={{ border: 'none', width: "100%", color: props.textColor }} value={typing} onChange={searchHymn}></input>
        </span>
      </div>
      {dropdown && dropdownContainer()}
    </div>
  )
}

export function Home({ height, showSearch, setShowSearch, loading, setLoading }) {
  const hymns = hymnsData()
  const profiles = profileData()
  const [searchBarHeight, setSearchBarHeight] = useState()
  const [seasonLoad, setSeasonLoad] = useState(false);
  const [feastLoad, setFeastLoad] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [seasonIndex, setSeasonIndex] = useState(null)
  const [selectedFeast, setSelectedFeast] = useState(null)
  const [selectedHymn, setSelectedHymn] = useState(null)
  const [displayArtistSeasons, setDisplayArtistSeasons] = useState(false)
  const [displayArtistFeasts, setDisplayArtistFeasts] = useState(false)
  const [displayArtistHymns, setDisplayArtistHymns] = useState(false)
  const [feastSelections, setFeastSelections] = useState([]);
  const [menuHeight, setMenuHeight] = useState("0px");
  const [displayHymnAudio, setDisplayHymnAudio] = useState(false);
  const [artistPage, setArtistPage] = useState(0);
  const [resize, setResize] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 1440 && window.innerWidth >= 1000) return 1;
      if (window.innerWidth <= 1000 && window.innerWidth >= 465) return 2;
    }
    return 1;
  });

  const handleResize = useCallback(() => {
    const width = window.innerWidth;

    if (width <= 1440 && width >= 1000) {
      setResize(1);
    } else if (width <= 1000 && width >= 465) {
      setResize(2);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const hymnsWithArtists = hymns.map((hymn) => {
    let artist = ""
    let imgLink = ""

    let audioData = hymn.audioFileLink

    profiles.forEach((person) => {
      if (audioData.includes(person.artistName)) {
        artist = person.artistName.replaceAll("_", " ")
        imgLink = person.img
      }
    })

    return { ...hymn, artist, imgLink }
  })

  const filterArtists = hymnsWithArtists.map((hymn) => {
    let hymnCopy = { ...hymn }
    delete hymnCopy.englishTitle
    delete hymnCopy.copticTitle
    delete hymnCopy.audioFileLink

    return hymnCopy
  })

  const artistAndSeasonOnlyArray = Array.from(new Set(filterArtists.map(hymn => JSON.stringify(hymn)))).map(hymn => JSON.parse(hymn))

  const removeSeasons = artistAndSeasonOnlyArray.map((hymn) => {
    let hymnCopy = { ...hymn }
    delete hymnCopy.season
    return hymnCopy
  })

  let seasonArray = []

  hymnsWithArtists.map((hymn) => {
    let seasonFix = hymn.season.substring(0, hymn.season.indexOf("-"))
    seasonArray.push(seasonFix)
  })

  let feastArray = []

  hymnsWithArtists.map((hymn) => {
    let feastFix = hymn.season.substring(hymn.season.indexOf("-") + 1)
    feastFix.trim()
    feastArray.push(feastFix)
  })

  const feastOnlyArray = Array.from(new Set(feastArray))
  const artistOnlyArray = Array.from(new Set(removeSeasons.map(hymn => JSON.stringify(hymn)))).map(hymn => JSON.parse(hymn))
  const seasonsOnlyArray = Array.from(new Set(seasonArray))

  useEffect(() => {
    const robes = document.querySelectorAll('.robeImg')
    const tabContent = document.querySelectorAll('.artistTab span')

    if (tabContent && robes) {
      tabContent.forEach((t, index) => {
        let tabHeight = t.getBoundingClientRect().height + "px"
        robes[index].style.height = `calc(${tabHeight} * 1.2)`
      })
    }
  }, [filterArtists])

  useEffect(() => {
    if (selectedArtist !== null) setDisplayArtistSeasons(true)
  }, [selectedArtist])

  /*
  useEffect(() => {
       const sectionNav = document.querySelector(".hymnSearchNav");


  })
       */

  useEffect(() => {
    const sectionNav = document.querySelector(".hymnSearchNav li:nth-of-type(1)");

    if (sectionNav && (selectedArtist !== null)) {
      sectionNav.style.transform = "translateY(0)";
      sectionNav.style.opacity = "1";
    }
  }, [displayArtistSeasons])

  useEffect(() => {
    const sectionNav = document.querySelector(".hymnSearchNav li:nth-of-type(2)");

    if (sectionNav && (seasonIndex !== null)) {
      sectionNav.style.transform = "translateY(0)";
      sectionNav.style.opacity = "1";
    }
  }, [displayArtistFeasts])

  useEffect(() => {
    const sectionNav = document.querySelector(".hymnSearchNav li:nth-of-type(3)");

    if (sectionNav && (selectedFeast !== null)) {
      sectionNav.style.transform = "translateY(0)";
      sectionNav.style.opacity = "1";
    }
  }, [displayArtistHymns])

  useEffect(() => {
    const seasonBoxes = document.querySelectorAll(".seasonBox")

    if (seasonBoxes) {
      seasonBoxes.forEach((s, index) => {
        if (index !== seasonIndex) {
          s.style.display = "none"
        }
      })
    }

    if (seasonIndex !== null) setDisplayArtistFeasts(true);
  }, [seasonIndex])

  useEffect(() => {
    const feastBoxArray = document.querySelectorAll(".feastBox");

    if (feastBoxArray) {
      feastBoxArray.forEach((box, index) => {

        if (index !== selectedFeast) {
          box.style.display = "none";
        } else {
          box.style.width = "100%";

          const img = box.querySelector('img');
          if (img) {
            img.style.filter = "saturate(0%)"
          }
        }
      })
    }
  }, [selectedFeast]);

  const circleComp = () => {
    return (
      < div className={`circleLoadingContainer ${(seasonLoad || feastLoad) ? 'fadeout' : ''}`
      } style={{
        zIndex: 3, opacity: (seasonLoad || feastLoad) ? "0%" : "100%", pointerEvents: (seasonLoad || feastLoad) ? "none" : "auto", display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", left: 0, top: 0, background: "var(--thirdly)", width: "100%", height: "100%"
      }}>
        <svg className="loadCircle" width="100" height="100">
          <circle cx="50" cy="50" r="40" stroke="var(--fifthly)" stroke-width="6" fill="none" />
        </svg>
      </div >
    )
  }

  useEffect(() => {
    const seasonBoxes = document.querySelectorAll(".seasonBox")

    let delay = 0;

    if (seasonBoxes && seasonLoad) {
      for (let i = 0; i < seasonBoxes.length; i++) {
        delay += 0.05;
        seasonBoxes[i].classList.add('fadeIn')
        seasonBoxes[i].style.animationDelay = `${delay}s`
      }
    }

  }, [seasonLoad])

  useEffect(() => {
    const feastBoxes = document.querySelectorAll(".feastBox")

    let delay = 0;

    if (feastBoxes && feastLoad) {
      for (let i = 0; i < feastBoxes.length; i++) {
        delay += 0.05;
        feastBoxes[i].classList.add('fadeIn')
        feastBoxes[i].style.animationDelay = `${delay}s`
      }
    }

  }, [feastLoad])

  const seasonsOfArtist = () => {
    function hymnThumbnail(season) {
      let seasonFix = season.toLowerCase()
      let imgSrc

      if (seasonFix.includes("annual")) {
        imgSrc = "https://images.squarespace-cdn.com/content/v1/5b68b2cd25bf0272973242c4/1725682425215-DZL92V7KN8G1D30Z953L/Melbourne+Website+final_-2.jpg?format=750w"
      } else if (seasonFix.includes("fasts")) {
        imgSrc = "https://images.squarespace-cdn.com/content/v1/5b68b2cd25bf0272973242c4/1674782187510-50SI2W70D7EJYNQS6ZUL/Paralyzed+man_-4.jpg?format=2500w"
      } else if (seasonFix.includes("holy week")) {
        imgSrc = "https://images.squarespace-cdn.com/content/v1/5b68b2cd25bf0272973242c4/1587951600088-YBFO0PAL7RG6CUTRT2ZH/Anastasis+Cross+comp-11.jpg?format=2500w"
      } else if (seasonFix.includes("liturgies")) {
        imgSrc = "https://scontent-sea5-1.xx.fbcdn.net/v/t51.75761-15/504502424_18085772221664544_2144039370302935008_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gQ8cptzrxXUQ7kNvwEwnF5U&_nc_oc=AdmbHmH_bjs0zCq7V3kGNZi3SdH73mjzRgvByjU9ZIlZQ1iY4x3t1EtEZIRnc76Csuw&_nc_zt=23&_nc_ht=scontent-sea5-1.xx&_nc_gid=4fdp6OFU0-QcE0zX69DMvA&oh=00_AfXRpSGovun7_un6DmOmsbaweRDQojMZKoVoyL4diOHrlA&oe=68A56FAB"
      } else if (seasonFix.includes("major feasts of the lord")) {
        imgSrc = "https://images.squarespace-cdn.com/content/v1/5b68b2cd25bf0272973242c4/1587951600532-FFA99K0SOY0HRHW6PZ2J/Anastasis+Cross+comp-9.jpg?format=2500w"
      } else if (seasonFix.includes("minor feasts of the lord")) {
        imgSrc = "https://images.squarespace-cdn.com/content/v1/5b68b2cd25bf0272973242c4/1699465745355-76BVJS2HQNKHZS8J6JLU/detail+ascension.jpg?format=2500w"
      } else {
        imgSrc = "https://images.squarespace-cdn.com/content/v1/5b68b2cd25bf0272973242c4/1674782211871-MGCBENTSYQAT8P627H6G/Moses+Burning+Bush-4.jpg?format=2500w"
      }

      return imgSrc
    }

    return (
      <div style={{ display: 'flex', width: '100%', height: 'min-content', gap: "var(--padding)", position: "relative", alignItems: "start" }}>

        {(selectedArtist !== null && loading) && circleComp()}

        {seasonsOnlyArray.map((season, index) => {

          function ohYes() {
            setSeasonIndex(index)

            setTimeout(() => {
              setFeastLoad(true)
            }, 1000)
          }

          let isSeasonSelected = seasonIndex !== null && seasonIndex === index

          function expandImg(event) {
            event.currentTarget.style.width = "100%"

            const titleText = event.currentTarget.querySelector("h1");
            if (titleText) {
              titleText.style.opacity = "100%";
              titleText.style.transform = "translateY(0px)";
              titleText.style.transition = "0.5s all ease-in-out";
            }
          }

          function shrinkenImg(event) {
            event.currentTarget.style.width = "15%"
            const titleText = event.currentTarget.querySelector("h1");
            if (titleText) {
              titleText.style.opacity = "0";
              titleText.style.transform = "translateY(-100px)";
            }
          }

          return (
            <>
              <div className="seasonBox" key={index} onMouseOver={!isSeasonSelected ? expandImg : null} onMouseLeave={!isSeasonSelected ? shrinkenImg : null} onClick={ohYes} style={{ position: 'relative', overflow: 'hidden', width: isSeasonSelected ? "100%" : "15%", padding: selectedHymn ? "var(--spacing) 0" : "", transition: "0.25s all ease-in-out", borderRadius: 'var(--border)', border: "var(--spacing) solid var(--fifthly)", alignContent: "center", opacity: 0, transform: "translateY(100px)", height: (index === seasonIndex) ? "min-content" : "15vh" }}>
                <h1 style={{ position: "relative", width: '100%', zIndex: 5, textAlign: "center", opacity: 0, transform: "translateY(-100px)", fontSize: selectedHymn ? "0.35rem" : "", transition: "0.25s all ease-in-out" }}>{season}</h1>
                <gradient></gradient>
                <img src={hymnThumbnail(season)} className="seasonThumbnail" alt="hymnThumbail" style={{ left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: isSeasonSelected ? '50% 75%' : '50% 50%', filter: isSeasonSelected ? "blur(2px) grayscale(80%) contrast(50%)" : "blur(0) grayscale(0%) contrast(100%)", position: "absolute" }} />
              </div>
            </>
          )
        })}

      </div>
    )
  }

  useEffect(() => {
    const feasts = []
    const selectedSeason = seasonsOnlyArray[seasonIndex]
    const selectedArtistIndex = artistOnlyArray[selectedArtist] && artistOnlyArray[selectedArtist].artist

    hymnsWithArtists.map((hymn) => {
      if (hymn.season.includes(selectedSeason) && hymn.artist === (selectedArtistIndex)) {
        const feastName = hymn.season.substring(hymn.season.indexOf("-") + 1, hymn.season.length + 1)
        feasts.push(feastName)
      }
    })

    const feastArray = Array.from(new Set(feasts));

    const feastChoices = feastArray.map((name, index) => {
      let nameFix = name.trim()

      function createThumbnail(i) {
        let imgSrc

        if (i === "Congregation Responses") {
          imgSrc = "https://scontent-sea5-1.xx.fbcdn.net/v/t51.75761-15/491898933_18080780437664544_1678000177681328722_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JZSv9isZ-cQQ7kNvwEqnwBz&_nc_oc=Adm8jW5_gm8hN0gB96-cz0CPEyxjXJev0HKn4IACaMI7v5ZOoQdOa37k1OjtV5KYbrk&_nc_zt=23&_nc_ht=scontent-sea5-1.xx&_nc_gid=iY-GDHaR65EwrVHs3lo5DQ&oh=00_AfXGoHZUmwdHNks2FCYDfgDJ8WppCz0giqwcH89QyPbHQA&oe=68A41BDC"
        } else if (i === "Verses of Cymbals and Doxologies") {
          imgSrc = "https://images.squarespace-cdn.com/content/v1/5b68b2cd25bf0272973242c4/1731183335972-6ARXQVN23HOAAU7UXXMT/Christ%2Bthe%2BGreat%2BArchitect.jpg"
        } else if (i === "Deacon Responses") {
          imgSrc = "https://live.staticflickr.com/65535/54737682329_57a9164a7e_c.jpg"
        } else if (i === "Apostles") {
          imgSrc = "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/504737500_1282490456927001_908662529514116063_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rdJg2jwNtaYQ7kNvwF8Hcg5&_nc_oc=Adn3C0FOcJfvIM9rAsSDY_SRRtD9nQ6ZXpyJjXK7tWuJGoPSfYx2iMmyZsFd6flm3tM&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=WjIEdBjdnEWdZQl7MvZbxg&oh=00_AfXN7yzw6F2ZkNaarzFT-HDrNlZO2GHM-EkjfrAfxZWwZw&oe=68A3F958"
        } else if (i === "Great Lent") {
          imgSrc = "https://images.squarespace-cdn.com/content/v1/5b68b2cd25bf0272973242c4/1731183278235-S09TCJ3QHMX450YFIXZS/Christ+True+Physician+detail_-2.jpg"
        } else if (i === "Jonah") {
          imgSrc = "https://i.pinimg.com/1200x/d2/0e/e8/d20ee84f1120931128efc3a353139086.jpg"
        } else if (i === "Annunciation") {
          imgSrc = "https://live.staticflickr.com/65535/54738232749_81f4144a31.jpg"
        } else if (i === "Ascension") {
          imgSrc = "https://live.staticflickr.com/65535/54738359305_e6bac6cb0b.jpg"
        } else if (i === "Nativity") {
          imgSrc = "https://scontent-sea5-1.xx.fbcdn.net/v/t1.6435-9/151700548_185113376744927_4609794502168063286_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QUJgRMazweMQ7kNvwHos0A2&_nc_oc=Adm-x0uwntEpwsTP7vhQqhyZfzUjfBxiJYjxtXvLt7El3fh9R0JtjsX9wOTBAxfVpu0&_nc_zt=23&_nc_ht=scontent-sea5-1.xx&_nc_gid=i94wIwCfld2zvvclTACSRA&oh=00_AfU5cl1E7T8zBbzycTTxcmEifqKl7uquWX4rNNerhLWYUw&oe=68C5AB66"
        } else if (i === "Palm Sunday") {
          imgSrc = "https://images.squarespace-cdn.com/content/v1/5b68b2cd25bf0272973242c4/1652822346457-8X3JKJBYN4HWR1M5H9VY/Palm+Sunday+Rhodes+comp.jpg?format=750w"
        } else if (i === "Pentecost") {
          imgSrc = "https://images.squarespace-cdn.com/content/v1/5b68b2cd25bf0272973242c4/1685765610395-VWGNE5AQKICK3L5RVWGO/Rhodes+Pentecost+comp.jpg?format=750w"
        } else if (i === "Glorification for Saint Mary") {
          imgSrc = "https://images.squarespace-cdn.com/content/v1/5b68b2cd25bf0272973242c4/1699465749666-ITRFTJETN69CLSPC8VF5/detail+theotokos.jpg"
        } else if (i === "Lazarus Saturday") {
          imgSrc = "https://images.squarespace-cdn.com/content/v1/5b68b2cd25bf0272973242c4/1587951600532-FFA99K0SOY0HRHW6PZ2J/Anastasis+Cross+comp-9.jpg?format=1500w"
        } else if (i === "Papal Hymns") {
          imgSrc = "https://static.wixstatic.com/media/412dab_3053c0defc5a4ceca112711684f11ad6~mv2.jpg/v1/fill/w_1197,h_844,al_c,q_85,usm_1.20_1.00_0.01,enc_avif,quality_auto/412dab_3053c0defc5a4ceca112711684f11ad6~mv2.jpg"
        } else if (i.includes("Liturgy")) {
          imgSrc = "https://scontent-sea1-1.xx.fbcdn.net/v/t51.75761-15/490699251_18081102127664544_6129274112033468471_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FSRyioC26ekQ7kNvwGJ5HrR&_nc_oc=AdnP3-CTXTAaAh1-nzr1LeDtf13aCUo_i_21tPoVXg169cyXaEBPbyi9ga5hs2bu1Tg&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=qRvpLAG_R2xB8Irgas-hGQ&oh=00_AfVp1BbB5fcCQavb9aaPENsQG44SHjlhIUEIJjJW1clDZg&oe=68A402C9"
        } else if (i.includes("Entry Into Egypt")) {
          imgSrc = "https://scontent-sea1-1.xx.fbcdn.net/v/t51.75761-15/490699251_18081102127664544_6129274112033468471_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FSRyioC26ekQ7kNvwGJ5HrR&_nc_oc=AdnP3-CTXTAaAh1-nzr1LeDtf13aCUo_i_21tPoVXg169cyXaEBPbyi9ga5hs2bu1Tg&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=qRvpLAG_R2xB8Irgas-hGQ&oh=00_AfVp1BbB5fcCQavb9aaPENsQG44SHjlhIUEIJjJW1clDZg&oe=68A402C9"
        } else {
          imgSrc = "https://scontent-sea1-1.xx.fbcdn.net/v/t51.75761-15/490699251_18081102127664544_6129274112033468471_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FSRyioC26ekQ7kNvwGJ5HrR&_nc_oc=AdnP3-CTXTAaAh1-nzr1LeDtf13aCUo_i_21tPoVXg169cyXaEBPbyi9ga5hs2bu1Tg&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=qRvpLAG_R2xB8Irgas-hGQ&oh=00_AfVp1BbB5fcCQavb9aaPENsQG44SHjlhIUEIJjJW1clDZg&oe=68A402C9"
        }
        return imgSrc
      }

      function feastClick() {
        setSelectedFeast(index);
        setDisplayArtistHymns(true);
      }

      return (
        <>
          <div className="feastBox" onClick={feastClick} style={{ width: "15%", height: selectedFeast ? "min-content" : "25vh", transform: "translateY(100px)", opacity: 0, filter: "saturate(100%)", borderRadius: "var(--padding)", border: "var(--spacing) solid var(--fifthly)", position: "relative", transition: "all 0.5s ease-in-out", overflow: "hidden", display: "flex", alignContent: "center", justifyContent: "center", padding: selectedHymn ? "var(--spacing) 0" : "" }} >
            <h1 style={{ position: "relative", textAlign: "center", zIndex: "1", transition: "all 1s ease-in-out", fontSize: selectedHymn ? "0.35rem" : "", whiteSpace: selectedHymn ? "nowrap" : "", alignSelf: "center" }}>{nameFix}</h1>
            <img src={createThumbnail(nameFix)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%", borderRadius: "var(--padding)", position: "absolute", left: 0, top: 0 }} />
          </div>
        </>
      )
    })

    setFeastSelections(feastChoices);

  }, [seasonIndex, artistOnlyArray, selectedArtist])

  useEffect(() => {
    const feastBoxArray = document.querySelectorAll(".feastBox");

    if (feastBoxArray) {
      feastBoxArray.forEach((box, index) => {
        if (index === feastBoxArray.length - 1) {
          box.style.flexGrow = 1;
        }
      })
    }

  }, [feastSelections])

  const feastsOfSeasons = () => {
    return (
      <div className="feastContainer" style={{ width: "100%", display: "flex", flexWrap: "wrap", gap: "var(--padding)", position: "relative", justifyContent: "space-between", height: "100%" }}>
        {((seasonIndex !== null) && feastLoad) && circleComp()}
        {feastSelections}
      </div>
    )
  }

  useEffect(() => {
    const searchBarElement = document.querySelector(".searchBar")

    if (searchBarElement) {
      const heightValue = searchBarElement.getBoundingClientRect().height + "px"
      setSearchBarHeight(heightValue)
    }
  }, [])

  useEffect(() => {
    const trackMenuElement = document.querySelector(".trackMenu")

    if (trackMenuElement) {
      let calcHeight = trackMenuElement.getBoundingClientRect().height + "px"
      setMenuHeight(calcHeight)
    }
  }, [selectedHymn])

  useEffect(() => {
    if (showSearch) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [showSearch]);

  const mainContainer = () => {
    let counter = 0;

    const coverFlip = () => {
      const bookCover = document.querySelector(".bookCover");

      if (bookCover) {
        bookCover.style.transform = "rotateY(-120deg)";

        const children = bookCover.childNodes;

        if (children) {
          children.forEach((c) => {
            c.style.opacity = 0;
          })
        }
      }

      const book = document.querySelector(".book");

      if (book) {
        book.style.pointerEvents = "none";
        book.style.zIndex = 4;
      }

      setShowSearch(true);
      setArtistPage(0);
    }

    const pageFlip = () => {
      const artistPage = document.querySelector(".lengthyTab");

      if (artistPage) {
        artistPage.style.transform = "rotateY(-120deg)";

        const children = artistPage.childNodes;

        if (children) {
          children.forEach((c) => {
            c.style.opacity = 0;
          })
        }
      }

      const book = document.querySelector(".artistSelections");

      if (book) {
        book.style.pointerEvents = "none";
        book.style.zIndex = 4;
      }

      setArtistPage(prev => (prev === 0 ? 1 : 0));
    }

    const displayCount = (counter) => {
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--primary)", borderRadius: "50%", width: "2rem", height: "2rem", padding: "var(--padding)", overflow: "hidden", margin: "var(--sectionSpacing) 0 0 var(--sectionSpacing)" }}>
          <h1 style={{ textAlign: "center" }}>{counter}</h1>
          <p2 style={{ textAlign: "center", textTransform: "uppercase", color: "var(--fourthy)" }}>tracks</p2>
        </div>
      )
    }

    function formatText(text) {
      if (text.includes("Cantor")) {
        return text.replace("Cantor", "")
      }
    }

    const artistsPerPage = 4;
    const currentStartIndex = artistPage * artistsPerPage;
    const currentEndIndex = currentStartIndex + artistsPerPage;

    return (
      <>
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", paddingTop: height, width: "var(--pageWidth)", padding: "var(--paddingSides)", overflow: "hidden", height: "min-content" }}>
          <div className="patternBackground"></div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              overflow: "hidden",
              transition: "all 1s ease-in-out",
              height: showSearch ? "0px" : "auto",
              opacity: showSearch ? 0 : 1,
            }}
          >
            <div
              style={{
                transition: "opacity 0.6s ease-in-out",
                opacity: showSearch ? 0 : 1,
                transform: showSearch ? "translateY(-30px)" : "translateY(0)",
              }}
            >
              <img
                src={psaltosIcon}
                style={{
                  width: "250px",
                  height: "250px",
                  transition: "all 0.8s ease-in-out",
                  transform: showSearch ? "scale(0.9)" : "scale(1)",
                  opacity: showSearch ? 0 : 1,
                }}
                alt="Psaltos Logo"
              />
            </div>

            <span
              className="introRow"
              style={{
                flexDirection: resize === 2 ? "column" : "",
                gap: resize === 2 ? "var(--border)" : "",
                transition: "all 0.8s ease-in-out",
                opacity: showSearch ? 0 : 1,
                transform: showSearch ? "translateY(-40px)" : "translateY(0)",
              }}
            >
              <li style={{ width: resize === 2 ? "100%" : "" }}>
                <SearchBarComp
                  searchBarBackground="white"
                  searchIconFill="var(--primary)"
                  borderRadius="var(--sectionSpacing)"
                  textColor="var(--primary)"
                  borderColor="transparent"
                  barWidth="100%"
                />
              </li>
              <li>
                <p
                  style={{
                    color: "var(--primary)",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                  }}
                >
                  or
                </p>
              </li>
              <li>
                <span style={{ height: "100%" }}>
                  <primaryButton>
                    <p style={{ color: "var(--fifthly)" }}>Upload your own</p>
                  </primaryButton>
                </span>
              </li>
            </span>

            <t
              style={{
                color: "var(--thirdly)",
                transition: "all 0.6s ease-in-out",
                opacity: showSearch ? 0 : 1,
                transform: showSearch ? "translateY(-20px)" : "translateY(0)",
              }}
            >
              Popular Cantors
            </t>
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              transition: "all 0.8s ease-in-out",
              overflow: "visible"
            }}
          >
            <span
              style={{
                position: "relative",
                flexBasis: selectedFeast ? "50%" : "100%",
                flexGrow: selectedFeast ? 0.5 : 1,
                flexShrink: 0,
                transition: "all 0.8s ease-in-out",
                overflow: "visible",
                width: "50%"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <span style={{ width: "100%", position: "relative", overflow: "visible", display: "flex", justifyContent: "center", alignContent: "center", zIndex: 10, height: "80vh" }}>

                  <div style={{ position: "absolute", perspective: "150px", perspectiveOrigin: "center center", width: "100%", height: "100%" }}>
                    <img src={deaconStand} style={{ zIndex: 3, overflow: "visible", position: "absolute", left: "50%", transform: "translateX(-50%) rotateX(3deg)", width: "90%", height: "100%", objectFit: "fill", transformOrigin: "center bottom", transformStyle: "preserve-3d" }} />
                  </div>

                  <img src={standEdge} style={{ position: "absolute", left: "50%", bottom: 0, zIndex: 5, transformStyle: "preserve-3d", transform: "rotateX(5deg) translateX(-50%) translateY(40px)", width: "100%", pointerEvents: "none" }} />

                  <img src={cymbals} style={{ position: "absolute", left: 0, bottom: 0, zIndex: 2, transformStyle: "preserve-3d", transform: "rotateX(30deg) rotateY(-30deg)", transformOrigin: "center bottom", pointerEvents: "none" }} />

                  <span style={{ position: "relative", width: "100vw" }}>
                    <div className="book" style={{ zIndex: 4, perspective: "150px", perspectiveOrigin: "center bottom", width: "100%", height: "100%", transform: "translateY(-20px)", position: "absolute", left: 0, top: 0 }}>
                      <span style={{ position: "absolute", left: "50%", top: 0, height: "100%", width: "70%", transformOrigin: "center bottom", overflow: "visible", transform: "rotateX(3deg) translateX(-50%)", transformStyle: "preserve-3d" }}>

                        <div className="bookCover" onClick={() => coverFlip()} style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", left: 0, top: 0, width: "100%", background: "var(--primary)", filter: "drop-shadow(0px 5px 0px #162836)", height: "100%", transformOrigin: "0% 50%", transition: "all 1s ease-in-out" }}>
                          <img src={coverBorder} />
                          <t style={{ position: "relative" }}>Our Cantors</t>
                        </div>
                      </span>
                    </div>

                    <div className="artistSelections" style={{ perspective: "150px", perspectiveOrigin: "center bottom", width: "100%", height: "100%", zIndex: 3, transform: "translateY(-20px)", position: "absolute", left: 0, top: 0 }}>

                      <span style={{ position: "absolute", left: "50%", top: 0, height: "100%", width: "70%", transformOrigin: "center bottom", overflow: "visible", transform: "rotateX(3deg) translateX(-50%)", transformStyle: "preserve-3d" }}>

                        <div className="lengthyTab" style={{ display: "flex", justifyContent: "start", flexDirection: "column", gap: "var(--padding)", alignItems: "start", position: "relative", left: 0, top: 0, width: "100%", background: "var(--fourthy)", filter: "drop-shadow(0px 5px 0px #162836)", height: "100%", transformOrigin: "0% 50%", transition: "all 1s ease-in-out", overflow: "hidden" }}>

                          <div className="hymnSearchNav" style={{ listStyle: "none", width: "100%", position: "relative", height: "min-content", overflow: "visible" }}>
                            <div style={{ top: 0, gap: "var(--padding)", display: "inline-flex" }} className="markers">
                              <li style={{ transform: "translateY(-100%)" }}><img src={SectionMarker} /><p>Cantor</p></li>
                              <li style={{ transform: "translateY(-100%)" }}><img src={SectionMarker} /><p>Season</p></li>
                              <li style={{ transform: "translateY(-100%)" }}><img src={SectionMarker} /><p>Feast</p></li>
                              <li style={{ transform: "translateY(-100%)" }}><img src={SectionMarker} /><p>Hymn</p></li>
                            </div>
                          </div>

                          <div style={{ position: "relative", display: 'flex', justifyContent: 'space-between', alignItems: "center", width: '100%', transition: "transform 1s cubic-bezier(0.075, 0.82, 0.165, 1)" }}>
                            {(selectedArtist === null) &&
                              <span style={{ width: "var(--iconSize)" }} onClick={() => pageFlip()}>
                                <CrossButton fill="var(--primary)" />
                              </span>
                            }

                            <span className="artistContainer" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", height: "100%", alignItems: "center" }}>
                              {artistOnlyArray.slice(currentStartIndex, currentEndIndex).map((hymn, index) => {
                                if (selectedArtist !== null && selectedArtist !== index) return null

                                let name = formatText(hymn.artist)

                                const artistToSeason = () => {
                                  setSelectedArtist(index)
                                  setLoading(true)

                                  setTimeout(() => {
                                    setSeasonLoad(true)
                                  }, 1000)
                                }

                                return (
                                  <div className="artistTab" key={index} onClick={() => artistToSeason()} style={{ width: (selectedArtist !== null) ? "100%" : "20%", transition: "width 1s ease-in-out" }} >
                                    <span style={{ position: 'relative', gap: "0", flexDirection: (selectedArtist === index) ? "row" : "column", width: (selectedArtist === index) ? '100%' : 'min-content', borderRadius: "var(--border) 0 0 var(--border)", alignItems: (selectedArtist === index) ? "center" : "start" }}>
                                      <img className="profilePic" src={hymn.imgLink} style={{ border: 'solid var(--fourthly)', borderWidth: '0 10px 5px 0', height: "3rem" }} alt="hymnImgLink" />

                                      <li style={{ listStyle: "none", marginLeft: 'var(--padding)', marginRight: (selectedArtist === index) ? 0 : "var(--border)", marginBottom: (selectedArtist === index) ? 0 : "var(--border)" }}>
                                        <ArtistIcon fill="var(--fourthy)" caption="cantor" textColor="var(--fourthy)" />
                                        <h1 style={{ whiteSpace: (selectedArtist === index) ? "nowrap" : 'wrap' }}>{name}</h1>
                                      </li>
                                    </span>

                                    <img className="robeImg" src={Robe} alt="robeImg" />
                                  </div>
                                )
                              })}
                            </span>

                            {(selectedArtist === null) &&
                              <span style={{ width: "var(--iconSize)" }} onClick={() => pageFlip()}>
                                <CrossButton fill="var(--primary)" />
                              </span>
                            }
                          </div>

                          {displayArtistSeasons && seasonsOfArtist()}
                          {displayArtistFeasts && feastsOfSeasons()}
                        </div>

                      </span>

                    </div>
                  </span>

                  <img src={triangle} style={{ position: "absolute", right: 0, bottom: 0, zIndex: 2, transform: "rotateX(30deg) rotateY(20deg)", transformOrigin: "center bottom" }} />

                </span>

                <img src={Stool} style={{ position: "relative", width: "60vw" }} />
              </div>
            </span>

            {selectedFeast &&
              <span
                style={{
                  position: "relative",
                  flexBasis: selectedFeast ? "50%" : "0%",
                  flexGrow: selectedFeast ? 0.5 : 0,
                  opacity: selectedFeast ? 1 : 0,
                  transition: "all 0.8s ease-in-out",
                  overflow: "visible",
                  width: "50%"
                }}
              >
                {displayArtistHymns && selectedFeast !== null && (
                  <div style={{ width: "100%", position: "relative", display: "flex", flexDirection: "column"}}>

                    <span
                      style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        border: "solid var(--fifthly) var(--spacing)",
                        borderRadius: "var(--sectionSpacing)",
                        overflow: "hidden",
                        transition: "all 0.8s ease-in-out",
                        height: selectedHymn && displayHymnAudio ? "220px" : "0px",
                        opacity: selectedHymn && displayHymnAudio ? 1 : 0,
                        marginBottom: selectedHymn && displayHymnAudio ? "1rem" : "0",
                        flexGrow: 1,
                      }}
                    >
                      {hymnsWithArtists
                        .filter((hymn) => selectedHymn === hymn.audioFileLink)
                        .map((hymn, i) => (
                          <img
                            key={i}
                            src={hymn.imgLink}
                            alt="Hymn background"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center 25%",
                              zIndex: 0,
                              filter: "blur(10px) brightness(0.6)",
                              transition: "filter 0.5s ease-in-out",
                            }}
                          />
                        ))}

                      <div
                        style={{
                          background: "var(--secondary)",
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 1,
                          mixBlendMode: "overlay",
                          pointerEvents: "none",
                          transition: "opacity 0.5s ease-in-out",
                          opacity: selectedHymn && displayHymnAudio ? 1 : 0,
                        }}
                      />

                      <div
                        style={{
                          position: "relative",
                          zIndex: 2,
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          pointerEvents: selectedHymn && displayHymnAudio ? "auto" : "none",
                          transition: "opacity 0.5s ease-in-out",
                          opacity: selectedHymn && displayHymnAudio ? 1 : 0,
                        }}
                      >
                        {selectedHymn && displayHymnAudio && (
                          <AudioPlayer audioSrc={selectedHymn} />
                        )}
                      </div>

                      <span className = "songOptions" style = {{ display: "flex", width: "100%", zIndex: 2, listStyle: "none"}}>
                          <li><img src = {heart}></img></li>
                          <li><img src = {repost}></img></li>
                          <li><img src = {share}></img></li>
                          <li><img src = {copyLink}></img></li>
                          <li><img src = {addToQueue}></img></li>
                      </span>
                      
                    </span>

                    <div style={{ position: "relative", zIndex: 1, overflow: "auto", flexGrow: 1 }}>
                      {hymnsWithArtists.map((hymn, index) => {
                        if (hymn.season.includes(feastOnlyArray[selectedFeast])) {
                          function hymnClick() {
                            setSelectedHymn(hymn.audioFileLink);
                            setDisplayHymnAudio(true);
                          }

                          function hymnHover(e) {
                            e.currentTarget.style.background = "var(--thirdly)";
                            e.currentTarget.style.transition = "0.25s ease-in-out";
                            e.currentTarget.querySelectorAll("h1, p").forEach((el) => (el.style.color = "var(--fifthly)"));
                          }

                          function undoHover(e) {
                            e.currentTarget.style.background = "";
                            e.currentTarget.querySelectorAll("h1, p").forEach((el) => (el.style.color = ""));
                          }

                          return (
                            <div
                              key={index}
                              className="hymnRecording"
                              onClick={hymnClick}
                              onMouseOver={hymnHover}
                              onMouseLeave={undoHover}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "var(--spacing)",
                                cursor: "pointer",
                                zIndex: 1
                              }}
                            >
                              <img src={hymn.imgLink} style={{ width: "1rem", marginRight: "0.5rem" }} />
                              <p>{index + 1}</p>
                              <p>•</p>
                              <p>{hymn.artist}</p>
                              <p>•</p>
                              <h1 style={{ color: "var(--primary)" }}>{hymn.englishTitle}</h1>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
              </span>

            }
          </div>

          <img style={{ position: "absolute", zIndex: -1, right: 0, top: 0, transform: "translate(100px, -100px)", mixBlendMode: "multiply", opacity: "40%" }} src={Jesus} />
        </div >
      </>
    )
  }

  return (
    <>
      {mainContainer()}
    </>
  )
}