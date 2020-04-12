import React from "react";

import { MdAddShoppingCart } from "react-icons/md";

import {
	CardWrapper,
	CardImage,
	CardTitle,
	CardPriceWrapper,
	CardLabel,
	CardPrice,
	CardAction,
} from "./styles";

const Card = ({ image, title, price, handleAdd }) => (
	<CardWrapper>
		<CardImage src={image} />
		<CardTitle>{title}</CardTitle>
		<CardPriceWrapper>
			<CardLabel>Preço: </CardLabel>
			<CardPrice>R$ {price}</CardPrice>
		</CardPriceWrapper>
		<CardAction onClick={() => handleAdd(title, price)}>
			<MdAddShoppingCart />
		</CardAction>
	</CardWrapper>
);

export default Card;
