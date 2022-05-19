import React from "react";
import logo from "./robinhood.svg";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

function Header() {
	return (
		<div className="header__wrapper">
			<div className="header__logo"></div>
			<img src={logo} width={25} />
			<div className="header__search">
				<div className="header__searchContainer">
					<input placeholder="Search" type="text"></input>
					<SearchIcon />
				</div>
			</div>

			<div className="header__menuItems">
				<a herf="#">Free Stocks</a>
				<a herf="#">Portfolio</a>
				<a herf="#">Cash</a>
				<a herf="#">Messages</a>
				<a herf="#">Account</a>
			</div>
		</div>
	);
}

export default Header;
