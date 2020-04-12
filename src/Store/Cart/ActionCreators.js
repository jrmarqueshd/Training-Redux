import { ADD_TO_CART } from "./ActionTypes";

export function add_to_cart(data) {
	return {
		type: ADD_TO_CART,
		payload: {
			title: data.title,
			price: data.price,
		},
	};
}
