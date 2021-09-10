import { useEffect } from "react";
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import EnseignantService from "../../api/EnseignantService";

export const CreateViewEnseignant = (props) =>
{
	let { id } = useParams();

	const [Enseignant, setEnseignant] = useState({
		page: id, nom: '',
		prenom: '',
		cin: '',
		email: '',
		adresse: '',
		tel: '',
		dateNaissance: '',
		sexe: ''
	});

	const history = useHistory();
	const [disable, setDisable] = useState(false);
	useEffect(() =>
	{
		let id = null;
		if (Enseignant.page === '_add')
		{
			setDisable(false);
			return
		} else if (Enseignant.page.includes('v_'))
		{
			setDisable(true);
			id = Enseignant.page.replace('v_', '');
		} else
		{
			id = Enseignant.page.replace('e_', '');
			setDisable(false);
		}
		EnseignantService.getEnseignantById(id).then((res) =>
		{
			let Enseignant = res.data;
			setEnseignant(Enseignant);

		});
	}, []);

	const changeHandler = (e) =>
	{
		const c = { ...Enseignant };
		c[e.target.name] = e.target.value
		setEnseignant(c);
	}
	const saveOrUpdateEnseignant = (e) =>
	{
		e.preventDefault();


		// step 5
		if (Enseignant.page === '_add')
		{
			const c = { ...Enseignant };
			let d = new Date(c.dateNaissance);
			var dd = String(d.getDate()).padStart(2, '0');
			var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
			var yyyy = d.getFullYear();

			c.dateNaissance = dd + '/' + mm + '/' + yyyy;
			console.log('Enseignant => ' + JSON.stringify(c));

			EnseignantService.createEnseignant(c).then(res =>
			{

				history.push('/Enseignants');
			});
		} else
		{
			setEnseignant({ ...Enseignant, id: Enseignant.page.replace('e_', '') });
			EnseignantService.updateEnseignant(Enseignant).then(res =>
			{
				history.push('/Enseignants');
			});
		}
	}

	return (
		<div>
			<br></br>
			<div className="container">
				<div className="row">
					<div className="card col-md-6 offset-md-3 offset-md-3">
						{
							getTitle(Enseignant.id)
						}
						<div className="card-body">
							<form>
								<div className="form-group">
									<label> Enseignant Name: </label>
									<input placeholder="Name" name="nom" className="form-control"
										value={Enseignant.nom} onChange={(e) => changeHandler(e)} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Enseignant Last Name: </label>
									<input placeholder="Last Name" name="prenom" className="form-control"
										value={Enseignant.prenom} onChange={(e) => changeHandler(e)} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Enseignant CIN: </label>
									<input placeholder="national identity card" name="cin" type="text" className="form-control"
										value={Enseignant.cin} onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Enseignant email: </label>
									<input placeholder="Email" name="email" type="email" className="form-control"
										value={Enseignant.email} onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Enseignant Phone number: </label>
									<input placeholder="Phone Number" name="tel" type="text" className="form-control"
										value={Enseignant.tel} onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Enseignant adresse: </label>
									<input placeholder="Adresse" name="adresse" type="text" className="form-control"
										value={Enseignant.adresse} onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Enseignant Birthday: </label>
									<input placeholder="Birthday" name="dateNaissance" type="date" className="form-control"
										value={Enseignant.dateNaissance} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Enseignant gender: </label>
									<select name="sexe" defaultValue={Enseignant.sexe} onChange={(e) => { changeHandler(e) }} disabled={disable} className="form-control">
										<option value="F">Female</option>
										<option value="M">Make</option>
									</select>
								</div>
								{!disable && <button className="btn btn-success" onClick={saveOrUpdateEnseignant}>Save</button>}
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
	)
}

function getTitle(id)
{
	if (id === '_add')
	{
		return <h3 className="text-center">Add Enseignant</h3>
	} else
	{
		return <h3 className="text-center">Update Enseignant</h3>
	}
}
