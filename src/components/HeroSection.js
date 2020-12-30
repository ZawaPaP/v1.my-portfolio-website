import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../videos/video-1.mp4';

export default function HeroSection() {
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted />
            <h1>ADVENTURE STARTS</h1>
            <p>Imagine your perfect and Love your imperfections. </p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET Started
                </Button>
                {/* <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    See Details

                </Button> */}
            </div>    
        </div>
    )
}
