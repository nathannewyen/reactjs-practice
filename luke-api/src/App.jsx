import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Router } from '@reach/router';

const buttonStyle = {
	marginLeft: '10px'
};

const pageStyle = {
	marginTop: '30px'
};

function App() {
	const [ people, setPeople ] = useState(null);
	const [ searchID, setSearchID ] = useState(1);

	const onSubmit = (e) => {
		e.preventDefault();
		navigate(`/${search}/${searchID}`);
	};
	const buttonAPI = () => {
		axios
			.get('https://swapi.dev/api/people/')
			.then((res) => {
				console.log(res.data);
				setPeople(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="App">
			<div className="container" style={pageStyle}>
				<div className="form-group row">
					<div className="form-group col row align-items-center">
						<label htmlFor="search" className="col-3">
							Search for:
						</label>
						<select className="custom-select col-8">
							<option defaultValue value="people">
								People
							</option>
							<option value="planet">Planet</option>
						</select>
					</div>
					<div className="form-group col row align-items-center">
						<label htmlFor="id" className="col-1">
							ID:
						</label>
						<input type="text" className="form-control bg-light col-7" />
						<button type="submit" className="btn btn-primary col-2" onClick={buttonAPI} style={buttonStyle}>
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
