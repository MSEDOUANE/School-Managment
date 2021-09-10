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
import FiliereService from "../../api/FiliereService";
import { useEffect } from "react";
import { useState } from "react";

export function FilieresList(props)
{
	const [Filieres, setFilieres] = useState([]);

	const history = useHistory();


	useEffect(() =>
	{
		FiliereService.getFilieres().then((r) =>
		{
			setFilieres(r.data);
		})

	})

	function viewFiliere(id, props)
	{
		history.push(`/add-Filiere/v_${id}`);
	}
	function editFiliere(id, props)
	{
		history.push(`/add-Filiere/e_${id}`);
	}

	function deleteFiliere(id)
	{
		return FiliereService.deleteFiliere(id);
	}

	function addFiliere()
	{
		history.push('/add-Filiere/_add');
	}
	return (
		<div className="container">
			<h2 className="text-center">Filieres List</h2>
			<div className="row">
				<button className="btn btn-primary" onClick={addFiliere}> Add Filiere</button>
			</div>
			<br></br>
			<div className="row">
				<table className="table table-striped table-bordered">

					<thead>
						<tr>
							<th> Filiere ID</th>
							<th> Filiere Label</th>
							<th> Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							Filieres.map(
								Filiere =>
									<tr key={Filiere.id}>
										<td> {Filiere.id} </td>
										<td> {Filiere.libelle} </td>
										<td>
											<button onClick={() => editFiliere(Filiere.id, props)} className="btn btn-info">Update </button>
											<button style={{ marginLeft: "10px" }} onClick={() => deleteFiliere(Filiere.id).then(() =>
											{
												let c = Filieres;
												setFilieres(c.filter(e => e.id !== Filiere.id))
											})} className="btn btn-danger">Delete </button>
											<button style={{ marginLeft: "10px" }} onClick={() => viewFiliere(Filiere.id)} className="btn btn-info">View </button>
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


export default FilieresList;
