import React, { useState } from 'react'
import { mockHistoricalData } from '../constants/mock';
import { convertUnixTimestampToDate } from '../helpers/data-helper';
import Card from './card';
import { ResponsiveContainer,AreaChart,Area,Tooltip, XAxis,YAxis} from 'recharts';

const Chart = () => {
    const [data,setData]=useState(mockHistoricalData);
    const [filter,setFilter]=useState("1W");

    const formatData=()=> {
        return data.c.map((item,index) =>{
            return {
                value: item.toFixed(2),
                date:convertUnixTimestampToDate(data.t[index])
            } ;
        });
    };
  return (
    <Card>
        <ResponsiveContainer>
            <AreaChart data={formatData(data)}>
              <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fill="url(#chartColor)"
            fillOpacity={1}
            strokeWidth={0.5}
            />
            <Tooltip/>
            <XAxis dataKey="date" />
            <YAxis domain={["dataMin", "dataMax"]} />
            </AreaChart>
        </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
