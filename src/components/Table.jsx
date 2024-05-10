import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import TableItems from "./TableItems";
import styled from "styled-components";
import { AppointmentsContext } from "./AppointmetsContext";
const Table = () => {
	const { appointments } = useContext(AppointmentsContext);

	return (
		<StyledTable>
			<thead>
				<tr>
					<th>
						<MdDelete />
					</th>
					<th>№</th>
					<th>Name</th>
					<th>Number</th>
					<th>Doctor</th>
					<th>Date</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{appointments.map((item, index) => (
					<TableItems key={item.id} {...item} index={index} />
				))}
			</tbody>
		</StyledTable>
	);
};

export default Table;

const StyledTable = styled.table`
	width: 95%;
	border-collapse: collapse;

	th,
	td {
		border: none;
		padding: 8px;
		text-align: left;
	}

	thead {
		background-color: white;
		border-bottom: 1px solid #dcdbdb;
	}

	tr {
		height: 50px;
		background-color: white;
	}

	tbody {
		height: 40px;

		tr {
			height: 70px;
		}
	}

	tr:nth-child(even) {
		background-color: #f8f8f8;
	}

	td:last-child {
		display: flex;
		align-items: center;
		gap: 20px;
		height: 65px;
	}
`;
