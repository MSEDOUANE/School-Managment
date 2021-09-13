import React, { useEffect, useState } from "react";

import
{
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () =>
{
	return (
		<nav
			className="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed navbar-shadow navbar-brand-center">
			<div className="navbar-header d-xl-block d-none">
				<ul className="nav navbar-nav flex-row">
					<li className="nav-item"><Link className="navbar-brand" to="@{/}">
						<div className="brand-logo"></div>
					</Link></li>
				</ul>
			</div>
			<div className="navbar-wrapper">
				<div className="navbar-container content">
					<div className="navbar-collapse" id="navbar-mobile">
						<div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
							<ul className="nav navbar-nav">
								<li className="nav-item mobile-menu d-xl-none mr-auto"><a
									className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><FontAwesomeIcon icon={["fas", "faCoffee"]} />HOME
								</a></li>
							</ul>
							<ul className="nav navbar-nav bookmark-icons">
								<li className="nav-item d-none d-lg-block"><Link className="nav-link" to="/Students"
									data-toggle="tooltip" data-placement="top" title="Emails"><FontAwesomeIcon icon={["fas", "coffee"]} />Etudiants</Link></li>
								<li className="nav-item d-none d-lg-block"><Link className="nav-link" to="/Filieres"
									data-toggle="tooltip" data-placement="top" title="Cours"><FontAwesomeIcon icon="bars" />Filieres</Link></li>
								<li className="nav-item d-none d-lg-block"><Link className="nav-link" to="/modules"
									data-toggle="tooltip" data-placement="top" title="Emplois du temps"><FontAwesomeIcon icon="bars" />Modules</Link></li>
								<li className="nav-item d-none d-lg-block"><Link className="nav-link" to="/groupes"
									data-toggle="tooltip" data-placement="top" title="Emplois du temps"><FontAwesomeIcon icon="bars" />Groupes</Link></li>
								<li className="nav-item d-none d-lg-block"><Link className="nav-link" to="/enseignants"
									data-toggle="tooltip" data-placement="top" title="Emplois du temps"><FontAwesomeIcon icon="bars" />Enseignants</Link></li>
							</ul>
							<ul className="nav navbar-nav">
								<li className="nav-item d-none d-lg-block">
								</li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
		</nav>
	);
}