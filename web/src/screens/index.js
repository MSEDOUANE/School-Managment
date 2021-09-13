
import React from "react";

import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
import { Header } from "../component/Header";
export const BackOfficeHome = (props) =>
{
	const history = useHistory();

	return (
		<div>
			<Header></Header>
			<Container style={{ padding: '8px' }}>
				<Row>
					<Col>
						<Card>
							<Card.Header>Student management</Card.Header>
							<Card.Body>
								<blockquote className="blockquote mb-0">
									<p>
										{' '}
										Here where you can ADD/UPDATE/CONSULT/DELTE students.{' '}
									</p>
									<footer className="blockquote-footer">
										<Button variant="success" onClick={() => { history.push('/Students') }}>Go To Student management</Button>{' '}
									</footer>
								</blockquote>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Header>Filiere management</Card.Header>
							<Card.Body>
								<blockquote className="blockquote mb-0">
									<p>
										{' '}
										Here where you can ADD/UPDATE/CONSULT/DELTE Filiere.{' '}
									</p>
									<footer className="blockquote-footer">
										<Button variant="success" onClick={() => { history.push('/Filieres') }}>Go To Filiere management</Button>{' '}

									</footer>
								</blockquote>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card>
							<Card.Header>Module management</Card.Header>
							<Card.Body>
								<blockquote className="blockquote mb-0">
									<p>
										{' '}
										Here where you can ADD/UPDATE/CONSULT/DELTE Module.{' '}
									</p>
									<footer className="blockquote-footer">
										<Button variant="success" onClick={() => { history.push('/modules') }}>Go To Modelue management</Button>{' '}

									</footer>
								</blockquote>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Header>Groupes management</Card.Header>
							<Card.Body>
								<blockquote className="blockquote mb-0">
									<p>
										{' '}
										Here where you can ADD/UPDATE/CONSULT/DELTE Groupes.{' '}
									</p>
									<footer className="blockquote-footer">
										<Button variant="success" onClick={() => { history.push('/groupes') }}>Go To Groupe management</Button>{' '}

									</footer>
								</blockquote>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card>
							<Card.Header>Teacher management</Card.Header>
							<Card.Body>
								<blockquote className="blockquote mb-0">
									<p>
										{' '}
										Here where you can ADD/UPDATE/CONSULT/DELTE Teacher.{' '}
									</p>
									<footer className="blockquote-footer">
										<Button variant="success" onClick={() => { history.push('/enseignants') }}>Go To Techer management</Button>{' '}

									</footer>
								</blockquote>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default BackOfficeHome;