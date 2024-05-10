import { useContext } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { AppointmentsContext } from "./AppointmetsContext";
const TableItems = ({ index, id, name, phoneNumber, doctor, date }) => {
	const { deleteFn, toggleEditModalHandler } = useContext(AppointmentsContext);
	return (
		<>
			<tr>
				<td>
					<input type="checkbox" />
				</td>
				<td>{index + 1}</td>
				<td>{name}</td>
				<td>{phoneNumber}</td>
				<td>{doctor}</td>
				<td>{date}</td>
				<td>
					<CiEdit onClick={() => toggleEditModalHandler(id)} />
					<MdDelete onClick={() => deleteFn(id)} />
				</td>
			</tr>
		</>
	);
};

export default TableItems;
