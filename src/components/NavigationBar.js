import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Styles = styled.div`
	.navbar {
		background-color: #DC938B;
		border-bottom: 5px solid #AEC5A5;
	}

	.navbar-brand, .navbar-nav .nav-link {
		color: #F0EDDA;
		font-weight: 600;
		letter-spacing: 1px;

		&:hover {
			color: #AEC5A5;
		}
	}

	.navbar-brand {
		margin-right: 3rem;
	}

	.mr-auto.navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show {
    	color: #AEC5A5;
	}

	.ml-auto.navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show {
    	color: #F0EDDA;
	}
`;

export const NavigationBar = props => {
  const { location } = props;
  return (
	<Styles>
		<Navbar expand="lg" fixed="top">
			<Navbar.Brand href="/">Mehwash Patel</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto" activeKey={location.pathname}>
					<Nav.Item><Nav.Link href="/about">About me</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href="/portfolio">Portfolio</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href="/blog">Articles</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
				</Nav>

				<Nav className="ml-auto">
					<Nav.Item><Nav.Link href="https://www.linkedin.com/in/mehwash-patel-47b9b83a/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href="https://github.com/mehwashpatel" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href="https://medium.com/@mehwash.patel90" target="_blank"><FontAwesomeIcon icon={['fab', 'medium']} /></Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href="https://www.instagram.com/mehwashabdulsalam/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></Nav.Link></Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
	)
}