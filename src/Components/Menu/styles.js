import styled from "styled-components";
import { DefaultColor, White } from "../../Assets/styles/variables";

export const MenuWrapper = styled.nav`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin: 0 auto 30px;
	max-width: 1140px;
	padding: 15px;
`;

export const Logo = styled.h1`
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	font-size: 75px;
	color: ${DefaultColor};

	span {
		font-size: 24px;
		margin: 0 15px;
	}

	a {
		color: inherit;
		display: flex;
		align-items: center;
		font-weight: normal;
		text-decoration: none;
	}
`;

export const MenuList = styled.ul`
	display: block;
	list-style: none;
	margin: 50px auto 0;
	width: 100%;
	text-align: center;

	@media screen and (min-width: 768px) {
		width: auto;
		margin: 0;
		margin-left: auto;
	}
`;

export const MenuItem = styled.li`
	display: inline-block;

	a {
		border-radius: 7.5px;
		color: inherit;
		font-family: sans-serif;
		padding: 10px 15px;
		text-decoration: none;
		text-transform: uppercase;
		transition: all 200ms ease;

		&:hover {
			background-color: ${DefaultColor};
			color: ${White};
		}
	}
`;
