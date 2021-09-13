import { useEffect } from "react";
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import StudentService from "../../api/StudentService";
import { Header } from "../../component/Header";

export const CreateViewStudent = (props) =>
{
	let { id } = useParams();

	const [Student, setStudent] = useState({
		page: id, nom: '',
		prenom: '',
		cin: '',
		cne: '',
		codeMassar: '',
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
		if (Student.page === '_add')
		{
			setDisable(false);
			return
		} else if (Student.page.includes('v_'))
		{
			setDisable(true);
			id = Student.page.replace('v_', '');
		} else
		{
			id = Student.page.replace('e_', '');
			setDisable(false);
		}
		StudentService.getStudentById(id).then((res) =>
		{
			let Student = res.data;
			setStudent(Student);

		});
	}, []);

	const changeHandler = (e) =>
	{
		const c = { ...Student };
		c[e.target.name] = e.target.value
		setStudent(c);
	}
	const saveOrUpdateStudent = (e) =>
	{
		e.preventDefault();


		// step 5
		if (Student.page === '_add')
		{
			const c = { ...Student };
			let d = new Date(c.dateNaissance);
			var dd = String(d.getDate()).padStart(2, '0');
			var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
			var yyyy = d.getFullYear();

			c.dateNaissance = mm + '/' + dd + '/' + yyyy;
			setStudent(c);
			console.log('Student => ' + JSON.stringify(Student));

			StudentService.createStudent(Student).then(res =>
			{

				history.push('/Students');
			});
		} else
		{
			StudentService.updateStudent(Student, Student.page.replace('e_', '')).then(res =>
			{
				history.push('/Students');
			});
		}
	}

	return (
		<div>
			<Header></Header>
			<br></br>
			<div className="container">
				<div className="row">
					<div className="card col-md-6 offset-md-3 offset-md-3">
						{
							getTitle(Student.page)
						}
						<div className="card-body">
							<form>
								<div className="form-group">
									<label> Student Name: </label>
									<input placeholder="Name" name="nom" className="form-control"
										value={Student.nom} onChange={(e) => changeHandler(e)} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Student Last Name: </label>
									<input placeholder="Last Name" name="prenom" className="form-control"
										value={Student.prenom} onChange={(e) => changeHandler(e)} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Student CIN: </label>
									<input placeholder="national identity card" name="cin" type="text" className="form-control"
										value={Student.cin} onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Student CNE: </label>
									<input placeholder="National Code Student" name="cne" type="text" className="form-control"
										value={Student.cne} onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Student Code Massar: </label>
									<input placeholder="Code Massr" name="codeMassar" type="text" className="form-control"
										value={Student.codeMassar} onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Student email: </label>
									<input placeholder="Email" name="email" type="email" className="form-control"
										value={Student.email} onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Student Phone number: </label>
									<input placeholder="Phone Number" name="tel" type="text" className="form-control"
										value={Student.tel} onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Student adresse: </label>
									<input placeholder="Adresse" name="adresse" type="text" className="form-control"
										value={Student.adresse} onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Student Birthday: </label>
									<input placeholder="Birthday" name="dateNaissance" type="date" className="form-control"
										value={Student.dateNaissance} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" onChange={(e) => { changeHandler(e) }} disabled={disable} />
								</div>
								<div className="form-group">
									<label> Student gender: </label>
									<select name="sexe" defaultValue={Student.sexe} disabled={disable} className="form-control">
										<option value="F">Female</option>
										<option value="M">Make</option>
									</select>
								</div>
								{!disable && <button className="btn btn-success" onClick={saveOrUpdateStudent}>Save</button>}
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
		return <h3 className="text-center">Add Student</h3>
	} else
	{
		return <h3 className="text-center">Update Student</h3>
	}
}
