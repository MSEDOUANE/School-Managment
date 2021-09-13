import { useEffect } from "react";
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import GroupeService from "../../api/GroupeService";
import FiliereService from "../../api/FiliereService";
import { Header } from "../../component/Header";

export const CreateViewGroupe = (props) =>
{
	let { id } = useParams();

	const [groupe, setGroupe] = useState({
		page: id, libelle: '', filiereId: ''
	});

	const history = useHistory();
	const [disable, setDisable] = useState(false);
	const [filieres, setFilieres] = useState([]);

	useEffect(() =>
	{
		let id = null;
		FiliereService.getFilieres().then((r) =>
		{
			setFilieres(r.data);
		});
		if (groupe.page === '_add')
		{
			setDisable(false);
			return
		} else if (groupe.page.includes('v_'))
		{
			setDisable(true);
			id = groupe.page.replace('v_', '');
		} else
		{
			id = groupe.page.replace('e_', '');
			setDisable(false);
		}
		GroupeService.getGroupeById(id).then((res) =>
		{
			let groupe = res.data;
			setGroupe(groupe);

		});
	}, []);

	const changeHandler = (e) =>
	{
		const c = { ...groupe };
		c[e.target.name] = e.target.value
		setGroupe(c);
	}
	const saveOrUpdateGroupe = (e) =>
	{
		e.preventDefault();


		// step 5
		if (groupe.page === '_add')
		{
			const c = { ...groupe };
			delete c.id;
			setGroupe(c);
			console.log('groupe => ' + JSON.stringify(groupe));

			GroupeService.createGroupe(groupe).then(res =>
			{

				history.push('/Groupes');
			});
		} else
		{
			groupe.id = groupe.page.replace('e_', '');
			setGroupe({ ...groupe, id: groupe.page.replace('e_', '') });

			GroupeService.updateGroupe(groupe).then(res =>
			{
				history.push('/Groupes');
			});
		}
	}

	return (
		<div>
			<Header></Header>
			<div>
				<br></br>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3">
							{
								getTitle(groupe.id)
							}
							<div className="card-body">
								<form>
									<div className="form-group">
										<label> groupe Label: </label>
										<input placeholder="Label" name="libelle" className="form-control"
											value={groupe.libelle} onChange={(e) => changeHandler(e)} disabled={disable} />
									</div>
									<div className="form-group">
										<label> filiere: </label>
										<select name="filiereId" defaultValue={module.filiereId} disabled={disable} onChange={(e) => { changeHandler(e) }} className="form-control">
											{filieres.map((f) => <option value={f.id}>{f.libelle}</option>)
											}
										</select>
									</div>
									{!disable && <button className="btn btn-success" onClick={saveOrUpdateGroupe}>Save</button>}
									<button className="btn btn-danger" onClick={() =>
									{
										window.history.back();
									}} style={{ marginLeft: "10px" }}>Cancel</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function getTitle(id)
{
	if (id === '_add')
	{
		return <h3 className="text-center">Add groupe</h3>
	} else
	{
		return <h3 className="text-center">Update groupe</h3>
	}
}
