import React, { useEffect, useState } from "react";
import
{
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import axios from "axios";

import { Header } from "./component/Header";
import BackOfficeHome from "./screens";
import StudentsList from "./screens/students/StudentsList";
import { CreateViewStudent } from "./screens/students/CreateViewStudent";
import { getAuthBase64 } from "./api";
import FilieresList from "./screens/filiere/FilieresList";
import { CreateViewFiliere } from "./screens/filiere/CreateViewFiliere";
import ModulesList from "./screens/modules/ModulesList";
import { CreateViewModule } from "./screens/modules/CreateViewModule";
import GroupesList from "./screens/groupes/GroupesList";
import { CreateViewGroupe } from "./screens/groupes/CreateViewGroupe";
import EnseignantsList from "./screens/enseignant/EnseignantsList";
import { CreateViewEnseignant } from "./screens/enseignant/CreateViewEnseignant";
export function App()
{
	axios.interceptors.request.use(function (config)
	{
		config.headers.Authorization = getAuthBase64();

		return config;
	});



	return (
		<div>
			<Header></Header>
			<Switch>
				<Route path="/students" component={StudentsList} ></Route>
				<Route path="/add-student/:id" component={CreateViewStudent} ></Route>
				<Route path="/filieres" component={FilieresList} ></Route>
				<Route path="/add-filiere/:id" component={CreateViewFiliere} ></Route>
				<Route path="/modules" component={ModulesList} ></Route>
				<Route path="/add-module/:id" component={CreateViewModule} ></Route>
				<Route path="/groupes" component={GroupesList} ></Route>
				<Route path="/add-groupe/:id" component={CreateViewGroupe} ></Route>
				<Route path="/enseignants" component={EnseignantsList} ></Route>
				<Route path="/add-enseignant/:id" component={CreateViewEnseignant} ></Route>
				<Route path="/home">
					<BackOfficeHome ></BackOfficeHome>
				</Route>
				<Route path="/">
					<Login ></Login>
				</Route>
			</Switch>
		</div>
	);
}
export default App;
