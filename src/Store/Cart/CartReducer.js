import { ADD_TO_CART } from "./ActionTypes";

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
						title: payload.title,
						price: payload.price,
					},
				],
			};

		default:
			return state;
	}
};

export default cart;
