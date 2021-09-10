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
								<li className="nav-item d-none d-lg-block"><Link className="nav-link" to="/email"
									data-toggle="tooltip" data-placement="top" title="Emails"><FontAwesomeIcon icon={["fas", "coffee"]} />EMAILS</Link></li>
								<li className="nav-item d-none d-lg-block"><Link className="nav-link" to="/cours"
									data-toggle="tooltip" data-placement="top" title="Cours"><FontAwesomeIcon icon="bars" />COURS</Link></li>
								<li className="nav-item d-none d-lg-block"><Link className="nav-link" to="/emploi"
									data-toggle="tooltip" data-placement="top" title="Emplois du temps"><FontAwesomeIcon icon="bars" /> EMPLOI</Link></li>
							</ul>
							<ul className="nav navbar-nav">
								<li className="nav-item d-none d-lg-block">
								</li>
							</ul>
						</div>
						<ul className="nav navbar-nav float-right">
							<li className="nav-item d-none d-lg-block"><a className="nav-link nav-link-expand"><i
								className="ficon feather icon-maximize"></i></a></li>
							<li className="dropdown dropdown-user nav-item"><a
								className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
								<div className="user-nav d-sm-flex d-none"><span className="user-name text-bold-600"
									text="${USER_LNAME}"></span><span className="user-status"
										text="${USER_FNAME}"></span></div><span><img className="round"
											src="@{'/media/image/load/'+${PROFILE_CODE} }" alt="avatar" height="40"
											width="40" /></span>
							</a>
								<div className="dropdown-menu dropdown-menu-right"><Link className="dropdown-item"
									href="@{/profil}"><i className="feather icon-user"></i> Modifier profil</Link>
									<div className="dropdown-divider"></div><Link className="dropdown-item"
										to="/deconnexion"><i className="feather icon-power"></i> Deconnexion</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}