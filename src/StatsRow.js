import React from "react";
import GreenStockChart from "./stock1.svg";
import RedStockChart from "./stock3.svg";
import "./StatsRow.css";
import db from "./firebase";

function StatsRow(props) {
	const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

	const buyStock = () => {
		// console.log("buy", props.name);
		db.collection("myStocks")
			.where("ticker", "==", props.name)
			.get()
			.then((querySnapshot) => {
				if (!querySnapshot.empty) {
					// update the record
					querySnapshot.forEach(function (doc) {
						// doc.data() is never undefined for query doc snapshots
						db.collection("myStocks")
							.doc(doc.id)
							.update({
								shares: (doc.data().shares += 1),
								totalvalue: (doc.data().totalvalue += props.price),
							});
					});
				} else {
					db.collection("myStocks").add({
						ticker: props.name,
						shares: 1,
						totalvalue: props.price,
					});
				}
			});
	};

	return (
		<div className="row" onClick={buyStock}>
			<div className="row__intro">
				<h1>{props?.name}</h1>
				<p>{props.volume && props.volume + " shares"}</p>
			</div>
			<div className="row__chart">
				<img
					src={percentage > 0 ? GreenStockChart : RedStockChart}
					height={16}
				/>
			</div>
			<div className="row__numbers">
				<p
					className="row__price"
					style={{
						color: percentage > 0 ? "#55b739" : "red",
					}}
				>
					{props.price}
				</p>
				<p
					className="row__percentage"
					style={{
						color: percentage > 0 ? "#55b739" : "red",
					}}
				>
					{" "}
					{Number(percentage).toFixed(2)}%
				</p>
			</div>
		</div>
	);
}

export default StatsRow;
