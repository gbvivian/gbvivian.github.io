import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import Navbar from './components/Navbar';

import Project1Img from './assets/Project1_Img.jpg';

function Meow() {
	return (
		<React.Fragment>
			<h1>meow</h1>
		</React.Fragment>
	);
}

function DemoCard1() {
	return (
		<React.Fragment>
			<Card>
				<CardActionArea>
					<CardMedia image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Lizard
						</Typography>
						<Typography component="p">
							Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
							all continents except Antarctica
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		</React.Fragment>
	);
}

function DemoCard2() {
	return (
		<React.Fragment>
			<Card>
				<CardActionArea>
					<CardMedia image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Lizard
						</Typography>
						<Typography component="p">
							Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
							all continents except Antarctica
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Link to="/home">Project 1</Link>
				</CardActions>
			</Card>
		</React.Fragment>
	);
}

function renderProjectCards() {
	return (
		<React.Fragment>
			<Grid container spacing={24} justify="center" alignItems="center">
				{Navbar()}
				<Grid item xs={6}>
					{DemoCard1()}
				</Grid>

				<Grid item xs={6}>
					{DemoCard2()}
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

function ProjectCard() {
	return (
		<React.Fragment>
			<div className="w-full sm:w-5/12 m-10 sm:m-6 overflow-hidden">
				<Link to="/proj">
					<div className="image">
						<img className="w-full" to="/proj" src={Project1Img} alt="Project Image" />
					</div>
					Project
				</Link>
				<p className="text-gray-700 text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
					perferendis eaque, exercitationem praesentium nihil.
				</p>
			</div>
		</React.Fragment>
	);
}
function App() {
	// const styles = {
	// 	menuButton: {
	// 		marginLeft: -12,
	// 		marginRight: 20
	// 	}
	// };

	const BrowserRouter = require('react-router-dom').BrowserRouter;
	const Route = require('react-router-dom').Route;
	const Link = require('react-router-dom').Link;

	const styles = {
		margins: {
			marginLeft: '20',
			marginRight: '20'
		}
	};

	return (
		<Router>
			<div id="app" className="bg-blue-100">
				<div className="flex flex-wrap justify-center">
					<Route exact path="/proj" component={ProjectCard()} />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</Router>
	);
}

export default App;
