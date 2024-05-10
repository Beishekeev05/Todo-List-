import AppointmetsProvider from "./AppointmetsContext";
import AppointmentWrapper from "./AppointmentWrapper";
const AppointmentsApp = () => {
	return (
		<AppointmetsProvider>
			<AppointmentWrapper />
		</AppointmetsProvider>
	);
};

export default AppointmentsApp;
