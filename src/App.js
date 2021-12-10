import React from 'react';

import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import WeLikeAgency from './components/WeLikeAgencySection/WeLikeAgencySection';
import SolutionSection from './components/SolutionSection/SolutionSection';
import CompanyLogoSection from './components/CompanyLogoSection/CompanyLogoSection';
import OfferSection from './components/OfferSection/OfferSection';
import TestimonalSection from './components/TestimonialSection/TestimonialSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<HeroSection />
			<WeLikeAgency />
			<SolutionSection />
			<CompanyLogoSection />
			<OfferSection />
			<TestimonalSection />
			<PortfolioSection />
		</React.Fragment>
	);
}

export default App;
