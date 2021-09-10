import { useEffect } from "react";
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import ModuleService from "../../api/ModuleService";
import FiliereService from "../../api/FiliereService";

export const CreateViewModule = (props) =>
{
	let { id } = useParams();

	const [module, setModule] = useState({
		page: id, libelle: '',
		code: '',
		nbHeures: '',
		filiereId: '',
		filiereLibelle: ''
	});
	const [filieres, setFilieres] = useState([]);
	const history = useHistory();
	const [disable, setDisable] = useState(false);
	useEffect(() =>
	{
		let id = null;
		FiliereService.getFilieres().then((r) =>
		{
			setFilieres(r.data);
		});
		if (module.page === '_add')
		{
			setDisable(false);
			return
		} else if (module.page.includes('v_'))
		{
			setDisable(true);
			id = module.page.replace('v_', '');
		} else
		{
			id = module.page.replace('e_', '');
			setDisable(false);
		}
		ModuleService.getModuleById(id).then((res) =>
		{
			let module = res.data;
			setModule(module);

		});


	}, []);

	const changeHandler = (e) =>
	{
		const c = { ...module };
		c[e.target.name] = e.target.value
		setModule(c);
	}
	const saveOrUpdateModule = (e) =>
	{
		e.preventDefault();


		// step 5
		if (module.page === '_add')
		{
			const c = { ...module };
			setModule(c);
			console.log('module => ' + JSON.stringify(module));

			ModuleService.createModule(module).then(res =>
			{

				history.push('/Modules');
			});
		} else
		{
			ModuleService.updateModule(module, module.page.replace('e_', '')).then(res =>
			{
				history.push('/Modules');
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
							getTitle(module.page)
						}
						<div className="card-body">
							<form>
								<div className="form-group">
									<label> module label: </label>
									<input placeholder="label" name="libelle" className="form-control"
										value={module.libelle} onChange={(e) => changeHandler(e)} disabled={disable} />
								</div>
								<div className="form-group">
									<label> module code : </label>
									<input placeholder="code" name="code" className="form-control"
										value={module.code} onChange={(e) => changeHandler(e)} disabled={disable} />
								</div>
								<div className="form-group">
									<label> module hours number: </label>
									<input placeholder="hours" name="nbHeures" type="number" className="form-control"
										value={module.nbHeures} onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> filiere: </label>
									<select name="filiereId" defaultValue={module.filiereId} disabled={disable} onChange={(e) => { changeHandler(e) }} className="form-control">
										{filieres.map((f) => <option value={f.id}>{f.libelle}</option>)
										}
									</select>
								</div>
								{!disable && <button className="btn btn-success" onClick={saveOrUpdateModule}>Save</button>}
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
		return <h3 className="text-center">Add module</h3>
	} else
	{
		return <h3 className="text-center">Update module</h3>
	}
}
