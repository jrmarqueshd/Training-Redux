import React from "react";
import { connect } from "react-redux";

import Card from "../../Components/Card";

import { Container } from "./styles";

import Calca from "../../Assets/images/calça.jpg";
import Tenis from "../../Assets/images/tenis.jpg";
import Bermuda from "../../Assets/images/bermuda.jpg";
import Camiseta from "../../Assets/images/camiseta.jpg";

import { add_to_cart } from "../../Store/Cart/ActionCreators";

const TemplateCard = [
	{
		image: Calca,
		title: "Calça",
		price: "59,99",
	},
	{
		image: Tenis,
		title: "Tênis",
		price: "89,99",
	},
	{
		image: Bermuda,
		title: "Bermuda",
		price: "39,99",
	},
	{
		image: Camiseta,
		title: "Camiseta",
		price: "29,99",
	},

	{
		image: Tenis,
		title: "Tênis",
		price: "89,99",
	},
	{
		image: Bermuda,
		title: "Bermuda",
		price: "39,99",
	},
	{
		image: Camiseta,
		title: "Camiseta",
		price: "29,99",
	},

	{
		image: Calca,
		title: "Calça",
		price: "59,99",
	},
];

const Home = ({ add_cart }) => (
	<Container>
		{TemplateCard.map(({ image, title, price }, index) => (
			<Card
				key={title + index}
				image={image}
				title={title}
				price={price}
				handleAdd={add_cart}
			/>
		))}
	</Container>
);

const mapDispatchToProps = (dispatch) => ({
	add_cart: (title, price) => dispatch(add_to_cart({ title, price })),
});

export default connect("", mapDispatchToProps)(Home);
