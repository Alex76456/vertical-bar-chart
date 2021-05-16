import React from 'react';
import './App.css';
import SimpleChart from '../SimpleChart/SimpleChart';
import {dataLong, dataShort, dataEmpty} from '../../data/data';

const App: React.FC = () => {
	
	return (
		<div className="root">
			<div className="page">
				<SimpleChart positions={dataLong} title={"Таблица рекордов"} maxHeightOfBarsInPx={400}/>
				<SimpleChart positions={dataShort} title={"Таблица других рекордов"} maxHeightOfBarsInPx={200}/>
				<SimpleChart positions={dataEmpty} title={"Таблица без рекордов"} maxHeightOfBarsInPx={200}/>
			</div>
		</div>
	);
}

export default App;
