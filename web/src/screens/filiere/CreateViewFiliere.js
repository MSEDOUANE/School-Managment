import { useEffect } from "react";
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import FiliereService from "../../api/FiliereService";

export const CreateViewFiliere = (props) =>
{
	let { id } = useParams();

	const [Filiere, setFiliere] = useState({
		page: id, libelle: '',
	});

	const history = useHistory();
	const [disable, setDisable] = useState(false);
	useEffect(() =>
	{
		let id = null;
		if (Filiere.page === '_add')
		{
			setDisable(false);
			return
		} else if (Filiere.page.includes('v_'))
		{
			setDisable(true);
			id = Filiere.page.replace('v_', '');
		} else
		{
			id = Filiere.page.replace('e_', '');
			setDisable(false);
		}
		FiliereService.getFiliereById(id).then((res) =>
		{
			let Filiere = res.data;
			setFiliere(Filiere);

		});
	}, []);

	const changeHandler = (e) =>
	{
		const c = { ...Filiere };
		c[e.target.name] = e.target.value
		setFiliere(c);
	}
	const saveOrUpdateFiliere = (e) =>
	{
		e.preventDefault();


		// step 5
		if (Filiere.page === '_add')
		{
			const c = { ...Filiere };
			delete c.id;
			setFiliere(c);
			console.log('Filiere => ' + JSON.stringify(Filiere));

			FiliereService.createFiliere(Filiere).then(res =>
			{

				history.push('/Filieres');
			});
		} else
		{
			Filiere.id = Filiere.page.replace('e_', '');
			FiliereService.updateFiliere(Filiere).then(res =>
			{
				history.push('/Filieres');
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
							getTitle(Filiere.id)
						}
						<div className="card-body">
							<form>
								<div className="form-group">
									<label> Filiere Label: </label>
									<input placeholder="Label" name="libelle" className="form-control"
										value={Filiere.libelle} onChange={(e) => changeHandler(e)} disabled={disable} />
								</div>
								{!disable && <button className="btn btn-success" onClick={saveOrUpdateFiliere}>Save</button>}
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
		return <h3 className="text-center">Add Filiere</h3>
	} else
	{
		return <h3 className="text-center">Update Filiere</h3>
	}
}
