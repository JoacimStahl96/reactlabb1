import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
	const [employees, setEmployees] = useState([
		{
			name: "Yazeen Jasim",
			email: "yazeen.jasim@softhouse.se",
			phone: "070000",
			skills: "React, C++, Nodejs, Java",
			avatar: "https://i.imgur.com/t9HFQvX.png",
		},
		{
			name: "test",
			email: "test@hotmail.com",
			phone: " 070404054",
			skills: "python, C#",
			avatar: "https://i.imgur.com/Q9qFt3m.png",
		},
		{
			name: "Jane Doe",
			email: "jane.doe@softhouse.se",
			phone: "070000",
			skills: "React, C++, Nodejs, Java",
			avatar: "https://i.imgur.com/TUhCrsY.png",
		},
	]);
	function handleAddNewEmp() {
		setEmployees((prevState) => {
			return [
				...prevState,
				{
					name: "Miranda Keyes",
					email: "Miranda.Keyes@hotmail.com",
					phone: "02045439053",
					skills: "Java, HTML,CSS, Javascript",
					avatar: "https://i.imgur.com/ebHfuth.png",
				},
			];
		});
	}
	return (
		<div>
			<h3>EmployeeList</h3>
			<button onClick={handleAddNewEmp}>Add Employee</button>
			{employees.map((employee) => (
				<Employee EmployeeData={employee} />
			))}
		</div>
	);
}

export default EmployeeList;
