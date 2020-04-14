import React from "react";
import {Container} from 'react-bootstrap';
import styled from 'styled-components';
import mehwashImage from './assets/mehwash.png';

const Styles = styled.div`
	img {
		height: 250px;

	}

	.stamp {
		width: fit-content;
	border: 2px dashed #fff;
	
}

.stamp img {
	height: 250px;
	background: #fff;
	padding:12px;
}

.center-align-div {
	    display: flex;
    align-items: center;
    text-align: center;
}

p {
	font-size: 1.5rem;
}

h1 {
	font-size: 3rem;
}
`;

export class Home extends React.Component{

	constructor(){
		super()
		document.body.style.backgroundColor = '#F0EDDA';
	}
	 
	componentWillUnmount(){
    	document.body.style.backgroundColor = null;
	}

	render () { 
		return (
			<Styles>
			<Container>
				<div className="row center-align-div">
					<div className="col-md-6 offset-md-1">
						<h1>Hey, I'm Mehwash <span role="img" aria-label="Hi">👋</span> </h1>
						<p>
							I'm a full stack developer creating projects and writing about technologies.
						</p>
					</div>

					<div className="col-md-3">
						<center>
							<div className="stamp">
								<img src={mehwashImage} alt="Mehwash" />
							</div>
						</center>
					</div>
				</div>

				<div className="row center-align-div">
					<div className="col-md-6 offset-md-1">
						<h1>Latest Article</h1>
						<div id="retainable-rss-embed" data-rss="https://medium.com/feed/@mehwash.patel90" data-maxcols="1"  data-layout="grid" 
data-poststyle="inline" 
data-readmore="Read the rest" 
data-buttonclass="btn btn-primary" 
data-offset="-100"></div>
					</div>

					<div className="col-md-3">
						<center>
							<div className="stamp">
								<img src={mehwashImage} alt="Mehwash" />
							</div>
						</center>
					</div>
				</div>
				</Container>
			</Styles>
		)
	}
}