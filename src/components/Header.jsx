// import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import "../styles/Header.css";
import myResume from "../assets/MANISH_SAHANI_RESUME_2024.pdf";
import ScrollIndicator from './Scroll_Indicator';


const customRenderer = (text, index) => {
    const words = text.split(' ');
    return (
        <span key={index}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex}>
                    <span className="orangeText">{word.charAt(0).toUpperCase()}</span>
                    <span>{word.slice(1)}</span>
                    {wordIndex !== words.length - 1 && ' '}
                </span>
            ))}
        </span>
    );
};

function Header() {
    const textItems = [
        "Software Developer",
        "Full stack Developer",
        "Backend Developer",
        "JavaScript Developer",
        "Coder",
        "MERN stack Developer"
    ];

    const cursorRenderer = cursor => <span style={{ color: 'orange' }}>{cursor}</span>;
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <header className="banner" id="home">
            <div className="backImg">
                <video
                    src="./home_bgm.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    className="smokevideo">Your browser does not support video</video>
            </div>
            <div className="banner__left">
                <img
                    src="Images/myPic.png"
                    alt="profile picture"
                    className="banner__profile"
                />
            </div>
            <div className="banner__right">
                <div className="banner__content">
                    <h3 className="banner__title banner__title--l"><span id='mainText'>M</span>anish <span id='mainText'>S</span>ahani</h3>
                    <h3 className="banner__title banner__title--m">
                        I am a
                        <span>
                            <ReactTypingEffect
                                text={textItems}
                                cursorRenderer={cursorRenderer}
                                speed={50}
                                typingDelay={500}
                                eraseDelay={2500}
                                eraseSpeed={50}
                                displayTextRenderer={customRenderer}
                            />
                        </span>
                    </h3>
                    <p className="banner__description">
                        Crafting efficient backend solutions to drive digital innovation
                        and empower businesses <br /> | <span>Currently designing data-driven backend architectures !</span>
                    </p>
                    <div className="banner__buttons">
                        <h4 onClick={() => scrollToSection("about")} className="link">Read More...</h4>
                        <a href={myResume} download className="downloadButton">Download CV</a>
                    </div>
                    <ScrollIndicator />
                </div>
            </div>
        </header>
    );
}

export default Header;
