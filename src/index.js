import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./Pages.js/Register";
import CreateEditProfile from "./Pages.js/CreateEditProfile";
import Directory from "./Pages.js/Directory";
import SingleProfileView from "./Pages.js/SingleProfileView";
import Contact from "./Pages.js/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/login" element={<Login />} />
				<Route path="/Register" element={<Register />} />
				<Route path="/CreateEditProfile" element={<CreateEditProfile />} />
				<Route path="/Directory" element={<Directory />} />
				<Route path="/SingleProfileView" element={<SingleProfileView />} />				
				<Route path="/Contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
