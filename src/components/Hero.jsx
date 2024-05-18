import React, { useEffect, useState } from 'react';
import "../styles/styles.css";

export default function Hero({ children }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Load the Vimeo Player SDK
        const script = document.createElement('script');
        script.src = "https://player.vimeo.com/api/player.js";
        script.async = true;
        script.onload = () => {
            const iframe = document.querySelector('iframe');
            const player = new window.Vimeo.Player(iframe);

            player.setVolume(1).catch(error => {
                console.error('Failed to set volume:', error);
            });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="hero h-screen w-full relative overflow-hidden">
            {isClient && (
                <div className="video-container">
                    <iframe 
                        src="https://player.vimeo.com/video/947834793?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&background=1" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} 
                        title="NINTAI NEXUS VIDEO">
                    </iframe>
                </div>
            )}
            <div className="content h-screen">
                {children}
            </div>
        </div>
    );
}
