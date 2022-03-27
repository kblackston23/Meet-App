import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS', 'Angular'];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
      return { name: genre, value };
    })
    .filter (({value}) => value > 0);
    return data;
  };

  useEffect(() => { setData(() => getData()); }, [events]);

  const cellColors = [
    '#800000',
    '#ff3300',
    '#ff5500',
    '#ff7733',
    '#ff9933',
    '#ff9955'
  ];

return (
    <ResponsiveContainer height={400} >
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} dataKey='value' label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={cellColors[index % cellColors.length]} />
          ))}
        </Pie>
        <Legend verticalAlign='bottom' align='center' />
      </PieChart>
    </ResponsiveContainer >
  );
}

export default EventGenre;