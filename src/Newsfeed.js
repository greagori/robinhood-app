import React, { useState, useEffect } from "react";
import "./Newsfeed.css";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LineGraph from "./Linegraph";
import Chip from "./Chip";
// import Chip from "@material-ui/core/Chip";
import TimeLine from "./Timeline";

function Newsfeed() {
	const [popularTopics, setTopics] = useState([
		"Technology",
		"Top Movies",
		"Upcoming Earnings",
		"Crypto",
		"Cannabis",
		"Healthcare Supplies",
		"Index ETFs",
		"Technology",
		"China",
		"Pharma",
	]);

	const [seed, setSeed] = useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	return (
		<div className="newsfeed">
			<div className="newsfeed__container">
				<div className="newsfeed__chart__section">
					<div className="newsfeed_price_asset">
						<h1>$205,003.21</h1>
						<p> $10,004.23 (-10.32) Today </p>
					</div>
					<div className="newsfeed__chart">
						<LineGraph />
						<TimeLine />
					</div>
				</div>
				<div className="newsfeed__buying__section">
					<h2> Buying Power</h2>
					<h2> $25,040.11</h2>
				</div>
				<div className="newsfeed__market__section">
					<div className="newsfeed__market__box">
						<p> Markets Closed</p>
						<h1>Memorial Day - Remember & Honor</h1>
					</div>
				</div>
				<div className="newsfeed__popularlists__section">
					<div className="newsfeed__popularlists__intro">
						<h1>Popular lists</h1>
						<p>Show More</p>
					</div>
					<div className="newsfeed__popularlists_badges">
						{popularTopics.map((topic) => (
							<Chip
								// className="topic__badge"
								// variant="outlined"
								label={topic}
								avatar={`https://avatars.dicebear.com/api/avataaars/:seed.svg`}
								// <Avatar
								// 	src={`https://avatars.dicebear.com/api/avataaars/:seed
								//     ${topic}.svg`}
								// />
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Newsfeed;
