import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AppointmentsContext } from "./AppointmetsContext";

const AddAppointmentModal = () => {
	const { addAppointments, toggleModal, appoinmentbek, editModalHandler } =
		useContext(AppointmentsContext);

	const [formData, setFormData] = useState({
		name: "",
		phoneNumber: "",
		doctor: "",
		date: "",
	});
	console.log(appoinmentbek);
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	useEffect(() => {
		if (appoinmentbek) {
			setFormData((prev) => ({
				...prev,
				name: appoinmentbek.name,
				phoneNumber: appoinmentbek.phoneNumber,
				doctor: appoinmentbek.doctor,
				date: appoinmentbek.date,
			}));
		}
	}, [appoinmentbek]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (appoinmentbek) {
			editModalHandler(appoinmentbek.id, formData);
			toggleModal();
			return;
		}

		toggleModal();
		addAppointments(formData);
	};

	return (
		<StyledContainer>
			<StyledForm onSubmit={handleSubmit}>
				<h2>Добавление пациента</h2>

				<div className="inputs_continer">
					<div className="container">
						<label>Имя</label>

						<StyledInput
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Имя пациента"
						/>
					</div>

					<div className="container">
						<label>Номер</label>

						<StyledInput
							name="phoneNumber"
							value={formData.phoneNumber}
							onChange={handleChange}
							placeholder="Номер телефона"
						/>
					</div>

					<div className="container">
						<label>Доктор</label>

						<StyledSelect
							name="doctor"
							value={formData.doctor}
							onChange={handleChange}>
							<option value="">Выберите доктора</option>

							<option value="Манак Елена">Манак Елена</option>
							<option value="Максим Галкин">Максим Галкин</option>
							<option value="Жамгырчиева Шарапат">Жамгырчиева Шарапат </option>
							<option value="Айназик Бакытова">Айназик Бакытова</option>
						</StyledSelect>
					</div>

					<div className="container">
						<label>Выбериту дату</label>

						<input
							type="date"
							name="date"
							value={formData.date}
							onChange={handleChange}
						/>
					</div>

					<StyledButtonsBox>
						<button className="close_button" onClick={toggleModal}>
							Отмена
						</button>

						<StyledButton type="submit">Добавить</StyledButton>
					</StyledButtonsBox>
				</div>
			</StyledForm>
		</StyledContainer>
	);
};

export default AddAppointmentModal;

const StyledContainer = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	z-index: 1000;
	justify-content: center;
	align-items: center;
	background-color: rgba(17, 15, 15, 0.3);
	transition: background-color 0.3s linear;
	padding: 0 2rem;
`;

const StyledForm = styled.form`
	padding: 29px;
	text-align: center;
	display: flex;
	flex-direction: column;
	background-color: white;
	width: 500px;
	height: 520px;
	border-radius: 8px;

	.inputs_continer {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		gap: 18px;
		height: 100%;

		.container {
			text-align: start;
			display: flex;
			gap: 5px;
			flex-direction: column;

			label {
			}
		}
	}

	input[type="date"] {
		width: 155px;
		color: gray;
		height: 30px;
		padding: 3px;
		border-radius: 7px;
		border: 1px solid grey;
		font-size: 18px;
	}
`;

const StyledInput = styled.input`
	width: 480px;
	height: 40px;
	border-radius: 7px;
	border: 1px solid grey;
	padding-left: 15px;
	font-size: 16px;
`;

const StyledSelect = styled.select`
	border: 1px solid grey;
	padding-left: 12px;
	border-radius: 7px;
	font-size: 16px;
	width: 100%;
	height: 38px;
	color: grey;
`;

const StyledButton = styled.button`
	width: 100%;
	height: 2.5rem;
	font-size: 20px;
	border-radius: 7px;
	align-self: end;
	color: #fff;
	background-color: #3977c0;
	border: none;
	margin-top: 15px;

	&:active {
		background-color: #418bdf;
	}
`;

const StyledButtonsBox = styled.div`
	display: flex;
	gap: 10px;

	.close_button {
		width: 100%;
		height: 2.5rem;
		font-size: 20px;
		border-radius: 7px;
		align-self: end;
		border: 1px solid #3977c0;
		background-color: white;
		color: #3977c0;

		&:active {
			border-color: #418bdf;
		}
	}
`;
