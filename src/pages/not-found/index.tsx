import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./style.css";

export const PageNotFound = () => {
	return (
		<Container>
			<Div>
				<Div>
					<h1>OOPS!</h1>
					<p>
						You have landed on an unknown page.
						<br />
						Please go back to
						<Link to="/"> Homepage. </Link>
					</p>
				</Div>
			</Div>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80vh;
`;
const Div = styled.div`
	border: 2px solid rgb(0 0 0 / 8%);
	height: 40vh;
	width: 50vw;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
