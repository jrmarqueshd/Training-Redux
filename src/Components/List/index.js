import React from "react";

import {
	ProductItem,
	ProductTitle,
	ProductLabel,
	ProductPrice,
} from "./styles";

const List = ({ title, price }) => (
	<ProductItem>
		<ProductTitle>{title}</ProductTitle>
		<ProductLabel>Preço</ProductLabel>
		<ProductPrice>R$ {price}</ProductPrice>
	</ProductItem>
);

export default List;
