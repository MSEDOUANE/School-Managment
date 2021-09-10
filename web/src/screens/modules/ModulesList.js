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
import ModuleService from "../../api/ModuleService";
import { useEffect } from "react";
import { useState } from "react";

export function ModulesList(props)
{
	const [Modules, setModules] = useState([]);

	const history = useHistory();


	useEffect(() =>
	{
		ModuleService.getModules().then((r) =>
		{
			setModules(r.data);
		})

	})

	function viewModule(id, props)
	{
		history.push(`/add-module/v_${id}`);
	}
	function editModule(id, props)
	{
		history.push(`/add-module/e_${id}`);
	}

	function deleteModule(id)
	{
		return ModuleService.deleteModule(id);
	}

	function addModule()
	{
		history.push('/add-module/_add');
	}
	return (
		<div className="container">
			<h2 className="text-center">Modules List</h2>
			<div className="row">
				<button className="btn btn-primary" onClick={addModule}> Add module</button>
			</div>
			<br></br>
			<div className="row">
				<table className="table table-striped table-bordered">

					<thead>
						<tr>
							<th> Module label</th>
							<th> Module code</th>
							<th> Module Hours Number</th>
							<th> Filiere label</th>
							<th> Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							Modules.map(
								module =>
									<tr key={module.id}>
										<td> {module.libelle} </td>
										<td> {module.code} </td>
										<td> {module.nbHeures} </td>
										<td> {module.filiereLibelle} </td>
										<td>
											<button onClick={() => editModule(module.id, props)} className="btn btn-info">Update </button>
											<button style={{ marginLeft: "10px" }} onClick={() => deleteModule(module.id).then(() =>
											{
												let c = Modules;
												setModules(c.filter(e => e.id !== module.id))
											})} className="btn btn-danger">Delete </button>
											<button style={{ marginLeft: "10px" }} onClick={() => viewModule(module.id)} className="btn btn-info">View </button>
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


export default ModulesList;
