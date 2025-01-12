import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts';
import mockData from '../data/mockData.json';

const Faturacao = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simula a obtenção de dados do JSON
    setData(mockData);
  }, []);

  if (!data) return <div>Carregando...</div>;

  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: 20 }}>Dashboard de Faturação</Typography>
      
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h6">Receita Mensal</Typography>
        <LineChart width={600} height={300} data={data.monthlyRevenue}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </Paper>
      
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h6">Receita Anual</Typography>
        <BarChart width={600} height={300} data={data.annualRevenue}>
          <XAxis dataKey="year"/>
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </Paper>
      
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h6">Métricas Adicionais</Typography>
        <Typography>Faturas Emitidas: {data.faturasEmitidas}</Typography>
        <Typography>Clientes Ativos no Mês: {data.clientesAtivos}</Typography>
      </Paper>
    </Container>
  );
};

export default Faturacao;