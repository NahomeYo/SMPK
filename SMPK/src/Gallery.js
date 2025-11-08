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
            const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${parentFolder}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${apiKey}`);
            const data = await response.json();
            setFolders(data.files || []);
        } catch (error) {
            console.log('Error fetching folders:', error);
        }
    };

    useEffect(() => {
        fetchFolders();
    }, []);

    const selectFolderEvent = async (index) => {
        setDisplayParent(false);
        setSelectedFolder(index);

        const folderId = folders[index].id;
        try {
            const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name,mimeType,webViewLink,thumbnailLink,webContentLink)&key=${apiKey}`);
            const data = await response.json();
            setFolderContent(data.files || []);
        } catch (error) {
            console.log('Error fetching photos:', error);
        }
    };

    const getDirectImageUrl = (fileId, size = 1000) => {
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}`;
    };

    return (
        <article className="article" style={{ paddingTop: props.height }}>
            <Header textColor="var(--sixthly)" title="Gallery" color="var(--sixthly)" />

            <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', overflow: "visible", justifyContent: "center", alignItems: "center" }}>
                {displayParent ? (
                    <>
                        {folders.filter((f) => f.name !== "homescreen").map((f, index) => (
                            <div
                                className="parentFolder"
                                key={f.id}
                                onClick={() => selectFolderEvent(index)}
                                style={{ position: "relative", justifyContent: "center", alignContent: "center", width: "min-content", overflow: "visible", cursor: "pointer" }}
                            >
                                <h1 style={{ zIndex: "1", color: "var(--thirdly)", whiteSpace: "nowrap", position: "absolute" }}>
                                    {f.name}
                                </h1>
                                <img src={Folder} style={{ zIndex: "0" }} alt="folder" />
                            </div>
                        ))}
                    </>
                ) : (
                    <div className="photoContainer" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", width: "100%", alignItems: "start" }}>
                        {folderContent.filter((f) => f.mimeType && f.mimeType.startsWith('image/')).map((f) => (
                            <img
                                key={f.id}
                                src={getDirectImageUrl(f.id)}
                                alt={f.name}
                                style={{
                                    width: "20%",
                                    borderRadius: "var(--space)",
                                    objectFit: "cover",
                                    margin: "var(--space)",
                                    flexGrow: 0,
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}

export function HomeDisplay() {
    const [folders, setFolders] = useState([]);
    const [folderContent, setFolderContent] = useState([]);

    const apiKey = 'AIzaSyBRK9N9y6O04K--_j7QhIcOTojpn7zShnE';
    const parentFolder = '1P6HfEahpx5NKvRBFBw2sJnBuclQ1G-qs';

    const getDirectImageUrl = (fileId, size = 1000) => {
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}`;
    };

    const fetchFolders = async () => {
        try {
            const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${parentFolder}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${apiKey}`);
            const data = await response.json();
            setFolders(data.files || []);
        } catch (error) {
            console.log('Error fetching folders:', error);
        }
    };

    useEffect(() => {
        fetchFolders();
    }, []);

    useEffect(() => {
        const homescreenFolder = folders.find((f) => f.name === "homescreen");

        if (homescreenFolder) {
            const fetchPhotos = async () => {
                try {
                    const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${homescreenFolder.id}'+in+parents&fields=files(id,name,mimeType,webViewLink,thumbnailLink,webContentLink)&key=${apiKey}`);
                    const data = await response.json();
                    setFolderContent(data.files || []);
                } catch (error) {
                    console.log('Error fetching homescreen photos:', error);
                }
            };

            fetchPhotos();
        }
    }, [folders]);

    return (
        <div className="landingPagePhotos" style={{ position: "relative", width: "100vw", height: "100vh" }}>
            {folderContent.length > 0 && (
                <>
                    {folderContent.map((f) => (
                        <img
                            key={f.id}
                            className='slideImg'
                            src={getDirectImageUrl(f.id)}
                            alt={f.name}
                            style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    ))}
                </>
            )}
        </div>
    );
}

export default function init() {
    return (
        <>
            <Gallery height="" />
            <HomeDisplay />
        </>
    );
}