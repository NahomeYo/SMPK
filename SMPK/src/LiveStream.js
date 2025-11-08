import './App.css';
import './index.css';
import ReactPlayer from 'react-player';
import React from 'react';
import { useEffect, useState } from 'react';
import { Header } from './designKit/Navbar.js';

export function LiveStream(props) {
    const [video, setVideo] = useState(null);
    const [latestVid, setLatestVid] = useState(null);
    const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    const channelID = 'UCNzsB3SaHT_KqpX8XeY8Ctg';
    const apiKey = 'AIzaSyDMyc0DuILGZEvuGsZqiqqWazIGDv5kpw0';

    async function fetchliveVideo() {
        await fetch(`${baseUrl}?part=snippet&channelId=${channelID}&eventType=live&type=video&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const videoId = data.items[0].id.videoId;
                    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                    setVideo(videoUrl)
                } else {
                    setVideo(null);
                }
            })
    }

    async function fetchLatestVideo() {
        await fetch(`${baseUrl}?part=snippet&channelId=${channelID}&order=date&type=video&key=${apiKey}&maxResults=1`)
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const videoId = data.items[0].id.videoId;
                    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                    setLatestVid(videoUrl)
                } else {
                    setLatestVid(null);
                }
            })

    }

    useEffect(() => {
        fetchliveVideo();
        fetchLatestVideo();
    }, [])

    const LiveVideo = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space)', position: 'relative', width: "100%" }}>
                {video ?
                    <>
                        <div style={{ borderRadius: 'var(--border)', position: 'relative' }}>
                            <h2 style={{ textAlign: 'center' }}>Live now!</h2>
                        </div>

                        <ReactPlayer
                            width="100%"
                            height="80vh"
                            playing={true}
                            url={video} />
                    </>
                    :
                    <>
                        <ReactPlayer
                            width="100%"
                            height="80vh"
                            playing={true}
                            url={latestVid} />
                    </>
                }
            </div>
        )
    }

    return (
        <article className="article" style={{ paddingTop: props.height }} >
            <Header textColor="var(--sixthly)" title="Livestream" color="var(--sixthly)" />
            <LiveVideo />
        </article>
    )
}

export default function init() {
    return (
        <div style={{ margin: 0, padding: 0 }}>
            <LiveStream height="" />
        </div>
    )
}