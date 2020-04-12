import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaOpencart } from "react-icons/fa";

import { MenuWrapper, MenuList, MenuItem, Logo } from "./styles";

const Menu = ({ cartState }) => (
	<MenuWrapper>
		<Logo>
			<Link to="/">
				<FaOpencart />
				<span>ReduxPlace</span>
			</Link>
		</Logo>
		<MenuList>
			<MenuItem>
				<Link to="/">Home</Link>
			</MenuItem>
			<MenuItem>
				<Link to="/carrinho">Carrinho ({cartState?.items?.length})</Link>
			</MenuItem>
		</MenuList>
	</MenuWrapper>
);

const mapStateToProps = ({ cart }) => ({
	cartState: cart,
});

export default connect(mapStateToProps)(Menu);
