import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff' }}>
			<Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
			{/* Add more links as needed */}
		</nav>
	);
};

export default Header;
