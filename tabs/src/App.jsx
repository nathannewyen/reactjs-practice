import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroupButton from './components/Tabs';

function App() {
	return (
		<div className="App">
			<GroupButton list={arr} handleButton={switchTextbox} />
		</div>
	);
}

export default App;
