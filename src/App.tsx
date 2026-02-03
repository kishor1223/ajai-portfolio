import React, { useState, useEffect } from "react";
import {
    Main,
    Timeline,
    Expertise,
    Project,
    Contact,
    Navigation,
    Footer,
    Loader,
    Education,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            {isLoading ? <Loader /> : (
                <>
                    <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
                    <FadeIn transitionDuration={700}>
                        <Main />
                        <Expertise />
                        <Timeline />
                        <Education />
                        <Project />
                        <Contact />
                    </FadeIn>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;