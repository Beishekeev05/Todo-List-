import Header from "../layout/Header";
import Table from "./Table";
import styled from "styled-components";
const AppointmentWrapper = () => {
	return (
		<StyledContainer>
			<Header />
			<div className="container_bermet">
				<h2 className="title">Record</h2>
				<div>
					<Table />
				</div>
			</div>
		</StyledContainer>
	);
};

export default AppointmentWrapper;
const StyledContainer = styled.div`
	background-color: #f5f5f5;
	height: 100%;
	min-height: 100vh;

	.container_bermet {
		margin-left: 70px;
		padding-bottom: 20px;

		.title {
			font-size: 30px;
			margin: 25px 0;
		}
	}
`;
