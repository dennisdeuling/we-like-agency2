import React from 'react';
import { Typography, Button } from '@mui/material';
import HeroImage from '../../assets/images/hero-dummy.png';

function HeroSection() {
	return (
		<section>
			<img src={HeroImage} />
			<Typography></Typography>
			<Typography></Typography>
			<Button></Button>
		</section>
	);
}

export default HeroSection;
