import React from "react";
import
{
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory
} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import StudentService from "../../api/StudentService";
import { useEffect } from "react";
import { useState } from "react";
import { Header } from "../../component/Header";

export function StudentsList(props)
{
	const [Students, setStudents] = useState([]);

	const history = useHistory();


	useEffect(() =>
	{
		StudentService.getStudents().then((r) =>
		{
			setStudents(r.data);
		})

	},[])

	function viewStudent(id, props)
	{
		history.push(`/add-Student/v_${id}`);
	}
	function editStudent(id, props)
	{
		history.push(`/add-Student/e_${id}`);
	}

	function deleteStudent(id)
	{
		return StudentService.deleteStudent(id);
	}

	function addStudent()
	{
		history.push('/add-Student/_add');
	}
	return (
		<div>
			<Header></Header>

			<div className="container">
				<h2 className="text-center">Students List</h2>
				<div className="row">
					<button className="btn btn-primary" onClick={addStudent}> Add Student</button>
				</div>
				<br></br>
				<div className="row">
					<table className="table table-striped table-bordered">

						<thead>
							<tr>
								<th> Student groupe</th>
								<th> Student Last Name</th>
								<th> Student First Name</th>
								<th> Student CIN</th>
								<th> Student CNE</th>
								<th> Student Email</th>
								<th> Student Phone number</th>
								<th> Student adresse</th>
								<th> Student Birthday</th>
								<th> Student Gender</th>

								<th> Actions</th>
							</tr>
						</thead>
						<tbody>
							{
								Students.map(
									Student =>
										<tr key={Student.id}>
											<td> {Student.groupeLibelle} </td>
											<td> {Student.nom} </td>
											<td> {Student.prenom} </td>
											<td> {Student.cin} </td>
											<td> {Student.cne} </td>
											<td> {Student.codeMassar} </td>
											<td> {Student.tel} </td>
											<td> {Student.adresse} </td>
											<td> {Student.dateNaissance} </td>
											<td> {Student.sexe}</td>
											<td>
												<button onClick={() => editStudent(Student.id, props)} className="btn btn-info">Update </button>
												<button style={{ marginLeft: "10px" }} onClick={() => deleteStudent(Student.id).then(() =>
												{
													let c = Students;
													setStudents(c.filter(e => e.id !== Student.id))
												})} className="btn btn-danger">Delete </button>
												<button style={{ marginLeft: "10px" }} onClick={() => viewStudent(Student.id)} className="btn btn-info">View </button>
											</td>
										</tr>
								)
							}
						</tbody>
					</table>

				</div>

			</div>
		</div>
	);
}


export default StudentsList;
