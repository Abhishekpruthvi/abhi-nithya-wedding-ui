import React, { useEffect, useRef , useState} from 'react'
import ANteaser from './videos/teaser.mp4'

export default function Teaser() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        // This code will run when the component mounts
        videoRef.current.load(); // Load the video

        const video = videoRef.current;
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: 0.5, // Trigger when 50% of the element is visible
        };

        // Create an observer
        const observer = new IntersectionObserver(([entry]) => {
            // If the video is in the viewport, play it; otherwise, pause it
            setIsPlaying(entry.isIntersecting);
        }, options);

        // Start observing the video element
        if (video) {
            observer.observe(video);
        }

        // Cleanup when the component unmounts
        return () => {
            if (video) {
                observer.unobserve(video);
            }
        }
    }, []); // The empty dependency array ensures this effect runs only once when the component mounts


    return (
        <div>
            <video width="100%" ref={videoRef} controls autoPlay playsInline>
                <source src={ANteaser} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

    )
}