import { useContext } from "react";
import styled from "styled-components";
import { AppointmentsContext } from "../components/AppointmetsContext";
import AddAppointmentModal from "../components/AddAppointmenModal";

const Header = () => {
	const { openMOdal, toggleModal } = useContext(AppointmentsContext);
	return (
		<StyledContainer>
			<h1>Med center</h1> {openMOdal && <AddAppointmentModal />}
			<button onClick={toggleModal}>добавить запись</button>
		</StyledContainer>
	);
};

export default Header;

const StyledContainer = styled.div`
	position: sticky;
	z-index: 1;
	background-color: white;
	width: 95%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;

	button {
		font-size: 20px;
		border-radius: 7px;
		padding: 0.5rem;
		color: white;
		border: none;
		background-color: #3977c0;

		&:active {
			background-color: #428ee6;
		}
	}
`;
