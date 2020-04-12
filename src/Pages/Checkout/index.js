import React from "react";
import { connect } from "react-redux";

import { remove_to_cart } from "../../Store/Cart/ActionCreators";

import ConvertValueToFloat from "../../Helpers/ConvertValueToFloat";
import ConvertFloatToPrice from "../../Helpers/ConvertFloatToPrice";

import List from "../../Components/List";
import { ListProducts, Title, Total } from "./styles";

const Checkout = ({ cartState, remove_cart }) => (
	<ListProducts>
		{cartState?.items?.length ? (
			<>
				{cartState.items.map(({ id, title, price }) => (
					<List
						key={id + ""}
						id={id}
						title={title}
						price={price}
						handleRemove={remove_cart}
					/>
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

const mapDispatchToProps = (dispatch) => ({
	remove_cart: (id, name) => dispatch(remove_to_cart(id, name)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(Checkout);
