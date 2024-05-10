import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BASE_URL } from "../utils/constants";

export const AppointmentsContext = createContext();

const AppointmetsProvider = ({ children }) => {
	const [appointments, setAppointments] = useState([]);
	const [appoinmentbek, setAppoinmentbek] = useState(null);
	const [openMOdal, setOpenModal] = useState(false);

	const toggleModal = () => setOpenModal((prev) => !prev);

	const getAppointments = async () => {
		try {
			const response = await fetch(BASE_URL);

			const data = await response.json();
			setAppointments(data);
		} catch (error) {
			throw new Error();
		}
	};

	const getApoinmentse = async (id) => {
		try {
			const response = await fetch(`${BASE_URL}/${id}`);
			const data = await response.json();
			setAppoinmentbek(data);
		} catch (error) {
			console.log(error);
		}
	};

	const toggleEditModalHandler = (id) => {
		setOpenModal((prev) => !prev);
		getApoinmentse(id);
	};
	useEffect(() => {
		getAppointments();
	}, []);

	const addAppointments = async (date) => {
		try {
			const response = await fetch(BASE_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(date),
			});

			const data = await response.json();

			getAppointments();

			return data;
		} catch (error) {
			throw new Error();
		}
	};
	const deleteFn = async (id) => {
		try {
			await fetch(`${BASE_URL}/${id}`, {
				method: "DELETE",
			});
			getAppointments();
		} catch (error) {
			console.log(error);
		}
	};

	const editModalHandler = async (id, data) => {
		try {
			await fetch(`${BASE_URL}/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			await getAppointments();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AppointmentsContext.Provider
			value={{
				appointments,
				addAppointments,
				toggleModal,
				openMOdal,
				deleteFn,
				toggleEditModalHandler,
				editModalHandler,
				appoinmentbek,
			}}>
			{children}
		</AppointmentsContext.Provider>
	);
};

AppointmetsProvider.propTypes = {
	children: PropTypes.node,
};

export default AppointmetsProvider;
