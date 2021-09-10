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
import GroupeService from "../../api/GroupeService";
import { useEffect } from "react";
import { useState } from "react";

export function GroupesList(props)
{
	const [Groupes, setGroupes] = useState([]);

	const history = useHistory();


	useEffect(() =>
	{
		GroupeService.getGroupes().then((r) =>
		{
			setGroupes(r.data);
		})

	})

	function viewGroupe(id, props)
	{
		history.push(`/add-groupe/v_${id}`);
	}
	function editGroupe(id, props)
	{
		history.push(`/add-groupe/e_${id}`);
	}

	function deleteGroupe(id)
	{
		return GroupeService.deleteGroupe(id);
	}

	function addGroupe()
	{
		history.push('/add-groupe/_add');
	}
	return (
		<div className="container">
			<h2 className="text-center">Groupes List</h2>
			<div className="row">
				<button className="btn btn-primary" onClick={addGroupe}> Add groupe</button>
			</div>
			<br></br>
			<div className="row">
				<table className="table table-striped table-bordered">

					<thead>
						<tr>
							<th> groupe ID</th>
							<th> groupe Label</th>
							<th>  Filiere</th>
							<th> Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							Groupes.map(
								groupe =>
									<tr key={groupe.id}>
										<td> {groupe.id} </td>
										<td> {groupe.libelle} </td>
										<td> {groupe.filiereLibelle} </td>
										<td>
											<button onClick={() => editGroupe(groupe.id, props)} className="btn btn-info">Update </button>
											<button style={{ marginLeft: "10px" }} onClick={() => deleteGroupe(groupe.id).then(() =>
											{
												let c = Groupes;
												setGroupes(c.filter(e => e.id !== groupe.id))
											})} className="btn btn-danger">Delete </button>
											<button style={{ marginLeft: "10px" }} onClick={() => viewGroupe(groupe.id)} className="btn btn-info">View </button>
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


export default GroupesList;
