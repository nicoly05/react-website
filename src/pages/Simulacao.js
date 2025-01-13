import React, { useState } from 'react';
import "../styles/Simulacao.css";
import {
  Container,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

const Simulacao = () => {
  const [cliente, setCliente] = useState('');
  const [morada, setMorada] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [numeroColaborador, setNumeroColaborador] = useState('');
  const [nif, setNif] = useState('');
  const [salarioDia, setSalarioDia] = useState('');
  const [diasTrabalhados, setDiasTrabalhados] = useState('');
  const [preview, setPreview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const salarioDiaNum = parseFloat(salarioDia);
    const diasTrabalhadosNum = parseInt(diasTrabalhados, 10);
    const salarioTotal = salarioDiaNum * diasTrabalhadosNum;

    
    setPreview({
      cliente,
      morada,
      codigoPostal,
      numeroColaborador,
      nif,
      salarioDia: salarioDiaNum,
      diasTrabalhados: diasTrabalhadosNum,
      salarioTotal,
    });

   
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: 20 }}>
        Simulação de Fatura
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <TextField
          label="Nome do Cliente"
          fullWidth
          required
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Morada"
          fullWidth
          required
          value={morada}
          onChange={(e) => setMorada(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Código Postal"
          type="number"
          fullWidth
          required
          value={codigoPostal}
          onChange={(e) => setCodigoPostal(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Número do Colaborador"
          type="number"
          fullWidth
          required
          value={numeroColaborador}
          onChange={(e) => setNumeroColaborador(e.target.value)}
          margin="normal"
        />
        <TextField
          label="NIF"
          type="number"
          fullWidth
          required
          value={nif}
          onChange={(e) => setNif(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Salário por dia"
          type="number"
          fullWidth
          required
          value={salarioDia}
          onChange={(e) => setSalarioDia(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Dias Trabalhados"
          type="number"
          fullWidth
          required
          value={diasTrabalhados}
          onChange={(e) => setDiasTrabalhados(e.target.value)}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="black"
          style={{ marginTop: 20 }}
        >
          Pré-visualização
        </Button>
      </form>

      {preview && (
        <Dialog open={isModalOpen} onClose={handleCloseModal}>
          <DialogTitle>Pré-visualização da Fatura</DialogTitle>
          <DialogContent>
            <div className="faturaPreview">
              <div className="header">
                <h2>Fatura Empresa</h2>
                <p>Cliente: {preview.cliente}</p>
                <p>Morada: {preview.morada}</p>
                <p>Código Postal: {preview.codigoPostal}</p>
                <p>Número Colaborador: {preview.numeroColaborador}</p>
                <p>NIF: {preview.nif}</p>
              </div>
              <div className="content">
                <p><strong>Salário por dia:</strong> € {preview.salarioDia.toFixed(2)}</p>
                <p><strong>Dias Trabalhados:</strong> {preview.diasTrabalhados}</p>
                <p><strong>Salário Bruto Total:</strong> € {preview.salarioTotal.toFixed(2)}</p>
              </div>
              <div className="footer">
                <p>Obrigado por escolher nossos serviços!</p>
                <p className="total">Total a Pagar: € {preview.salarioTotal.toFixed(2)}</p>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default Simulacao;
