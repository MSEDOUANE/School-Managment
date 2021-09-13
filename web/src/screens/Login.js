import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";

import Form from 'react-bootstrap/Form'
import { useHistory } from "react-router";




export const Login = () =>
{

	const [userName, setUserName] = useState('');
	const [userPwd, setPwd] = useState('');
	const history = useHistory();
	const submit = () =>
	{
		axios.get('http://localhost:8080/utilisateur/rest/login', { login: userName, password: userPwd }).then((r) =>
		{
			console.log(r.data)
		}).catch((e) =>
		{
			console.error(e);
		});
		history.push('/home');

	}

	return (
		<Container>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Username</Form.Label>
					<Form.Control value={userName} type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Enter Username" />
					<Form.Text className="text-muted">
						We'll never share your Username with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control alue={userPwd} t onChange={(e) => setPwd(e.target.value)} type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>

			</Form>
			<button className="btn btn-success" onClick={submit}>Login</button>

		</Container>);
}