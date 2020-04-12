import { ADD_TO_CART, REMOVE_TO_CART } from "./ActionTypes";

export function add_to_cart(product) {
	let typed = new Uint16Array(1);
	const randomId = window.crypto.getRandomValues(typed)[0];

	return {
		type: ADD_TO_CART,
		payload: {
			id: randomId,
			title: product.title,
			price: product.price,
		},
	};
}

export function remove_to_cart(id) {
	return {
		type: REMOVE_TO_CART,
		payload: {
			id,
		},
	};
}
