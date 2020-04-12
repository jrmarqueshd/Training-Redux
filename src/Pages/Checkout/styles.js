import styled from "styled-components";
import { White, Gray, WhiteSmoke } from "../../Assets/styles/variables";

export const ListProducts = styled.ul`
	border: 1px solid ${WhiteSmoke};
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 30px auto 0;
	max-width: 1140px;
	padding: 0 15px;
	overflow: hidden;
`;

export const Total = styled.li`
	background-color: ${Gray};
	color: ${White};
	display: flex;
	font-size: 20px;
	justify-content: flex-end;
	align-items: center;
	padding: 15px;
	width: 100%;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
`;

export const Title = styled.h2`
	font-family: sans-serif;
	font-size: 32px;
	text-transform: uppercase;
`;
