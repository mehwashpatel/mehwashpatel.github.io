import React from "react";
import {Container} from 'react-bootstrap';
import styled from 'styled-components';
import mehwashImage from './assets/mehwash.png';
import latestBlogImage from './assets/latest-blog.png';

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

section {
	margin: 4rem;
}
`;

export class Home extends React.Component{

	constructor(){
		super()
		document.body.style.backgroundColor = '#F0EDDA';
		this.state = {
			blogs: []
		}
	}
	
	componentDidMount(){
		fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mehwash.patel90')
		.then(res => res.json())
		.then(blogs => this.setState({blogs:blogs.items[0]}))

		
	}
	componentWillUnmount(){
    	document.body.style.backgroundColor = null;
	}

	render () { 
		let title = this.state.blogs.title ? this.state.blogs.title : ''
		let description = this.state.blogs.description ? this.state.blogs.description.slice(0,200).replace(/<\/?[^>]+(>|$)/g, "") : ''
		return (
			<Styles>
			<Container>
				<section>
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
				</section>

				<section>
					<div className="row center-align-div">
						<div className="col-md-5 offset-md-1">
							<h1>Latest Article</h1>
							<div className="blog">
								<h3 className="blog-title">{title}</h3>
								<div className="blog-description">
									{description}
									<a className="blog-link" target="_blank" rel="noopener noreferrer" href={this.state.blogs.link}>
										... (read more)
									</a>
								</div>
								<hr/>
								<a href="/blog">View more articles</a>
							</div>
						</div>

						<div className="col-md-5">
							<h1>Latest Project</h1>
							<div className="project">
								<img src={latestBlogImage} alt="Latest Project" />
								<hr/>
								<a href="/portfolio">View more projects</a>
							</div>
						</div>
					</div>
				</section>
				</Container>
			</Styles>
		)
	}
}