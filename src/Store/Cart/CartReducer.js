import { ADD_TO_CART, REMOVE_TO_CART } from "./ActionTypes";

const INITIAL_STATE = {
	items: [],
};

const cart = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ADD_TO_CART:
			return {
				...state,
				items: [
					...state.items,
					{
						id: payload.id,
						title: payload.title,
						price: payload.price,
					},
				],
			};

		case REMOVE_TO_CART:
			return {
				...state,
				items: state.items.filter((item) => item.id !== payload.id),
			};

		default:
			return state;
	}
};

export default cart;
