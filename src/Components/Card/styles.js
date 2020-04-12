import styled from "styled-components";
import {
	DefaultColor,
	White,
	ShadowColor,
	ShadowColorHovered,
} from "../../Assets/styles/variables";

export const CardWrapper = styled.figure`
	background-color: ${White};
	border-radius: 15px;
	box-shadow: 0px 0px 5px ${ShadowColor};
	margin: 7px;
	width: 255px;
	transition: all 100ms ease-in;
	overflow: hidden;

	&:hover {
		box-shadow: 0px 0px 7px ${ShadowColorHovered};
	}
`;

export const CardImage = styled.img`
	height: 250px;
	object-fit: cover;
	object-position: center;
	width: 100%;
`;

export const CardTitle = styled.h3`
	font-size: 24px;
	font-family: sans-serif;
	text-align: center;
	margin-top: 15px;
`;

export const CardPriceWrapper = styled.mark`
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	margin: 15px;
`;

export const CardLabel = styled.p`
	font-family: sans-serif;
	font-size: 18px;
	text-transform: uppercase;
`;

export const CardPrice = styled.span`
	font-weight: bold;
	font-size: 20px;
`;

export const CardAction = styled.button`
	background-color: ${DefaultColor};
	border: 1px solid ${DefaultColor};
	border-radius: 7.5px;
	color: ${White};
	cursor: pointer;
	display: flex;
	font-size: 24px;
	margin: 15px;
	padding: 10px;
	margin-left: auto;
	transition: all 98.7ms ease-in-out;

	&:hover {
		background-color: transparent;
		color: ${DefaultColor};
	}
`;
