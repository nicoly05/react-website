import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts';
import mockData from '../data/mockData.json';
import '../styles/Servicos.css'; 

const Servicos = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(mockData);
  }, []);

  if (!data) return <div>Carregando...</div>;

  return (
    <div className="faturacao">
     <Container>
      
      <Paper className="paper">
        <Typography variant="h6">Receita Mensal</Typography>
        <LineChart width={400} height={200} data={data.monthlyRevenue}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </Paper>
      
      <Paper className="paper">
        <Typography variant="h6">Receita Anual</Typography>
        <BarChart width={400} height={200} data={data.annualRevenue}>
          <XAxis dataKey="year"/>
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="revenue" fill="#4169e1" />
        </BarChart>
      </Paper>
      
      <Paper className="paper">
        <Typography variant="h6">Métricas Adicionais</Typography>
        <Typography>Faturas Emitidas: {data.faturasEmitidas}</Typography>
        <Typography>Clientes Ativos no Mês: {data.clientesAtivos}</Typography>
      </Paper>
     </Container>
    </div>
  );
};

export default Servicos;

