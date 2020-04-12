import React from "react";
import { connect } from "react-redux";

import ConvertValueToFloat from "../../Helpers/ConvertValueToFloat";
import ConvertFloatToPrice from "../../Helpers/ConvertFloatToPrice";

import List from "../../Components/List";
import { ListProducts, Title, Total } from "./styles";

const Checkout = ({ cartState }) => (
	<ListProducts>
		{cartState?.items?.length ? (
			<>
				{cartState.items.map(({ title, price }, index) => (
					<List key={index + ""} title={title} price={price} />
				))}
				<Total>
					R${" "}
					{ConvertFloatToPrice(
						cartState.items.reduce(
							(acum, atual) => acum + ConvertValueToFloat(atual.price),
							0
						)
					)}
				</Total>
			</>
		) : (
			<Title>O Carrinho está vazio</Title>
		)}
	</ListProducts>
);

const mapsStateToProps = ({ cart }) => ({
	cartState: cart,
});

export default connect(mapsStateToProps)(Checkout);
