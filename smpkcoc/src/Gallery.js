import './App.css';
import './index.css';
import { Header } from './designKit/Navbar.js';
import { useState, useEffect } from 'react';
import Folder from './img/folder.png';

export function Gallery(props) {
    const [selectedFolder, setSelectedFolder] = useState(null);
    const [folders, setFolders] = useState([]);
    const [folderContent, setFolderContent] = useState([]);
    const [displayParent, setDisplayParent] = useState(true);

    const apiKey = 'AIzaSyBRK9N9y6O04K--_j7QhIcOTojpn7zShnE';
    const parentFolder = '1P6HfEahpx5NKvRBFBw2sJnBuclQ1G-qs';

    const fetchFolders = async () => {
        try {
            await fetch(`https://www.googleapis.com/drive/v3/files?q= '${parentFolder}' +in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    setFolders(data.files);
                })

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFolders();
    }, []);

    const selectFolderEvent = (index) => {
        setDisplayParent(false);
        setSelectedFolder(index);
    }

    const getHighQualityThumbnail = (thumbnailLink, size = 900) => {
        if (!thumbnailLink) return '';

        return thumbnailLink.replace(/=s\d+/, `=s${size}`);
    };

    useEffect(() => {
        folderContent.filter((f) => f.name !== "homescreen").map((f) => {
            if (folders[selectedFolder].id && f.id) {
                const photoBox = document.querySelector(".photoContainer");

                if (photoBox) {
                    const photoImg = document.createElement("img");
                    photoImg.src = getHighQualityThumbnail(f.thumbnailLink);
                    photoImg.style.background = "red";
                    photoImg.style.width = "20%";
                    photoImg.style.borderRadius = "var(--space)";
                    photoImg.style.objectFit = "cover";

                    photoBox.append(photoImg);
                }
            }
        })

    }, [selectedFolder])
    
    return (
        <article className="article" style={{ display: "flex", flexDirection: "column", paddingTop: props.height, width: '80vw', margin: '0vw 5vw', gap: "1rem", overflow: "visible" }}>
            <Header textColor="var(--sixthly)" title="Gallery" color="var(--sixthly)" />

            <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', overflow: "visible", justifyContent: "space-between" }}>
                {displayParent ?
                    <>
                        {folders.filter((f) => f.name !== "homescreen").map((f, index) => {
                            const fetchPhotos = async () => {
                                try {
                                    fetch(`https://www.googleapis.com/drive/v3/files?q= '${f.id}' +in+parents&fields=files(id,name,mimeType,webViewLink,thumbnailLink,webContentLink)&key=${apiKey}`)
                                        .then(response => response.json())
                                        .then(data => {
                                            setFolderContent(data.files);
                                        })
                                } catch (error) {
                                    console.log(error);
                                }
                            }

                            fetchPhotos();

                            return (
                                <>
                                    <div className="parentFolder" key={index} onClick={() => selectFolderEvent(index)} style={{ position: "relative", justifyContent: "center", alignContent: "center", width: "min-content", overflow: "visible" }}>
                                        <h1 style={{ zIndex: "1", color: "var(--thirdly)", whiteSpace: "nowrap", position: "absolute" }}>{f.name}</h1>
                                        <img src={Folder} style={{ zIndex: "0" }} />
                                    </div>
                                </>
                            )
                        })}
                    </>
                    :
                    <div className="photoContainer" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%", height: "100%", background: 'red' }}></div>
                }
            </div>
        </article >
    );
}

export function HomeDisplay() {
    const [folders, setFolders] = useState([]);
    const [folderContent, setFolderContent] = useState([]);

    const apiKey = 'AIzaSyBRK9N9y6O04K--_j7QhIcOTojpn7zShnE';
    const parentFolder = '1P6HfEahpx5NKvRBFBw2sJnBuclQ1G-qs';

    const getHighQualityThumbnail = (thumbnailLink, size = 900) => {
        if (!thumbnailLink) return '';
        return thumbnailLink.replace(/=s\d+/, `=s${size}`);
    };

    // fetch parent folders
    // https://www.googleapis.com/drive/v3/files?q= '1P6HfEahpx5NKvRBFBw2sJnBuclQ1G-qs' +in+parents+and+mimeType='application/vnd.google-apps.folder'&key=AIzaSyBRK9N9y6O04K--_j7QhIcOTojpn7zShnE

    const fetchFolders = async () => {
        try {
            await fetch(`https://www.googleapis.com/drive/v3/files?q='${parentFolder}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    setFolders(data.files);
                })

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFolders();
    }, []);

    // Get the photos from homescreen
    // https://www.googleapis.com/drive/v3/files?q=%271ToLtFAgWNuHIcf85RfLiEaVuWedQiJq3%27+in+parents&fields=files(id,name,mimeType,webViewLink,thumbnailLink,webContentLink)&key=AIzaSyBRK9N9y6O04K--_j7QhIcOTojpn7zShnE

    useEffect(() => {
        folders.filter((f) => f.name === "homescreen").map((f) => {
            try {
                fetch(`https://www.googleapis.com/drive/v3/files?q='${f.id}'+in+parents&fields=files(id,name,mimeType,webViewLink,thumbnailLink,webContentLink)&key=${apiKey}`)
                    .then(response => response.json())
                    .then(data => {
                        setFolderContent(data.files);
                    })
            } catch (error) {
                console.log(error);
            }
        })
    }, [folders])

    return (
        <div className="landingPagePhotos" style={{ position: "relative", width: "100vw", height: "100vh" }}>

            {(folderContent !== null) &&
                <>
                    {folderContent.map((f) => {
                        return <img className='slideImg' src={getHighQualityThumbnail(f.thumbnailLink)} alt="landImg" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                    })}
                </>
            }

        </div>
    )
}

export default function init() {
    return (
        <>
            <Gallery height="" />
            <HomeDisplay />
        </>
    );
}