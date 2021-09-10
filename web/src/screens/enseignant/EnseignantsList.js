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
import EnseignantService from "../../api/EnseignantService";
import { useEffect } from "react";
import { useState } from "react";

export function EnseignantsList(props)
{
	const [Enseignants, setEnseignants] = useState([]);
	

	const history = useHistory();


	useEffect(() =>
	{
		EnseignantService.getEnseignants().then((r) =>
		{
			setEnseignants(r.data);
		})

	})

	function viewEnseignant(id, props)
	{
		history.push(`/add-Enseignant/v_${id}`);
	}
	function editEnseignant(id, props)
	{
		history.push(`/add-Enseignant/e_${id}`);
	}

	function deleteEnseignant(id)
	{
		return EnseignantService.deleteEnseignant(id);
	}

	function addEnseignant()
	{
		history.push('/add-Enseignant/_add');
	}
	return (
		<div className="container">
			<h2 className="text-center">Enseignants List</h2>
			<div className="row">
				<button className="btn btn-primary" onClick={addEnseignant}> Add Enseignant</button>
			</div>
			<br></br>
			<div className="row">
				<table className="table table-striped table-bordered">

					<thead>
						<tr>
							<th> Enseignant groupe</th>
							<th> Enseignant Last Name</th>
							<th> Enseignant First Name</th>
							<th> Enseignant CIN</th>
							<th> Enseignant Email</th>
							<th> Enseignant Phone number</th>
							<th> Enseignant adresse</th>
							<th> Enseignant Birthday</th>
							<th> Enseignant Gender</th>

							<th> Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							Enseignants.map(
								Enseignant =>
									<tr key={Enseignant.id}>
										<td> {Enseignant.groupeLibelle} </td>
										<td> {Enseignant.nom} </td>
										<td> {Enseignant.prenom} </td>
										<td> {Enseignant.cin} </td>
										<td> {Enseignant.tel} </td>
										<td> {Enseignant.adresse} </td>
										<td> {Enseignant.dateNaissance} </td>
										<td> {Enseignant.sexe}</td>
										<td>
											<button onClick={() => editEnseignant(Enseignant.id, props)} className="btn btn-info">Update </button>
											<button style={{ marginLeft: "10px" }} onClick={() => deleteEnseignant(Enseignant.id).then(() =>
											{
												let c = Enseignants;
												setEnseignants(c.filter(e => e.id !== Enseignant.id))
											})} className="btn btn-danger">Delete </button>
											<button style={{ marginLeft: "10px" }} onClick={() => viewEnseignant(Enseignant.id)} className="btn btn-info">View </button>
										</td>
									</tr>
							)
						}
					</tbody>
				</table>

			</div>

		</div>
	);
}


export default EnseignantsList;
