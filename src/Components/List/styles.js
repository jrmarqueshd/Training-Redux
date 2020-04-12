import styled from "styled-components";
import { White, WhiteSmoke, Red } from "../../Assets/styles/variables";

export const ProductItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px;
	width: 100%;

	&:nth-child(odd) {
		background: ${White};
	}

	&:nth-child(even) {
		background: ${WhiteSmoke};
	}
`;

export const ProductTitle = styled.h3`
	flex: 1;
	font-size: 20px;
	font-family: sans-serif;
`;

export const ProductLabel = styled.p`
	margin-right: 15px;
`;

export const ProductPrice = styled.span`
	font-weight: bold;
	font-size: 18px;
`;

export const ButtonRemove = styled.div`
	color: ${Red};
	cursor: pointer;
	font-size: 24px;
	margin-left: 15px;
`;
