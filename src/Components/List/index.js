import React from "react";
import { MdRemoveShoppingCart } from "react-icons/md";

import {
	ProductItem,
	ProductTitle,
	ProductLabel,
	ProductPrice,
	ButtonRemove,
} from "./styles";

const List = ({ id, title, price, handleRemove }) => (
	<ProductItem>
		<ProductTitle>{title}</ProductTitle>
		<ProductLabel>Preço</ProductLabel>
		<ProductPrice>R$ {price}</ProductPrice>
		<ButtonRemove onClick={() => handleRemove(id, title)}>
			<MdRemoveShoppingCart />
		</ButtonRemove>
	</ProductItem>
);

export default List;
