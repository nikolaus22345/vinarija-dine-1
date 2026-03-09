import React from 'react';
import TraditionalWinemaking from '../components/TraditionalWinemaking';
import OurHistory from '../components/OurHistory';
import OurStory from '../components/OurStory';
import FeaturesGrid from '../components/FeaturesGrid';
import WineShowcases from '../components/WineShowcases';
import OurTeam from '../components/OurTeam';
import Counters from '../components/Counters';
import Blog from '../components/Blog';
import Hero from '../components/Hero';

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <TraditionalWinemaking />
            <OurHistory />
            <OurStory />
            <Counters />
            <FeaturesGrid />
            <WineShowcases />
            <OurTeam />
            <Blog />
        </>
    );
};

export default Home;
