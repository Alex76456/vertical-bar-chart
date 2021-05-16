import React from 'react';
import './SimpleChart.css';
import IPosition from '../../interfaces/IPosition'

interface ISimpleChartProps{
    positions: IPosition[];
    title: string;
    maxHeightOfBarsInPx: number;
}


const SimpleChart: React.FC<ISimpleChartProps> = ({positions,title, maxHeightOfBarsInPx}) => {


    const findTopScore = (arr: IPosition[]):number =>{
        let res:number = 0
        arr.forEach(item=>{
            if(item.score > res) res = item.score 
        })
        return res
    }

    const topScore:number =findTopScore(positions)
    const ratio:number = maxHeightOfBarsInPx / topScore

	
	return (
		<section className="chart">
            <h3 className="chart__title" >{title}</h3>
            {positions.length ===0 ? <p className="chart__no-data">Данных пока нет</p> : 
                <ul className="chart__list">
                        {positions.map((item, i) => {
                            return (
                                <li className="chart__position" key={i} style={{height: `${item.score*ratio}px`}}>{item.name} {item.score}</li>
                            );
                        })}
                </ul>
            }
		</section>
	);
}

export default SimpleChart;
