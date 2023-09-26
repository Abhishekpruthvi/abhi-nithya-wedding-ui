import React, { useEffect, useRef , useState} from 'react'
import ANteaser from './videos/teaser.mp4'

export default function Teaser() {
    const videoRef = useRef(null);

    useEffect(() => {
        // This code will run when the component mounts
        videoRef.current.load(); // Load the video
    }, []); // The empty dependency array ensures this effect runs only once when the component mounts


    return (
        <div>
            <video width="100%" ref={videoRef} controls autoPlay muted playsInline loop>
                <source src={ANteaser} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

    )
}