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

    // Convert values to numbers and calculate total salary
    const salarioDiaNum = parseFloat(salarioDia);
    const diasTrabalhadosNum = parseInt(diasTrabalhados, 10);
    const salarioTotal = salarioDiaNum * diasTrabalhadosNum;

    // Update preview with calculated total salary
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

    // Open modal dialog
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
            <Typography>Nome Cliente: {preview.cliente}</Typography>
            <Typography>Morada: {preview.morada}</Typography>
            <Typography>Código Postal: {preview.codigoPostal}</Typography>
            <Typography>Numero Colaborador: {preview.numeroColaborador}</Typography>
            <Typography>NIF: {preview.nif}</Typography>
            <Typography>Salário por dia: € {preview.salarioDia}</Typography>
            <Typography>Dias Trabalhados: {preview.diasTrabalhados}</Typography>
            <Typography>Salário Brut Total: € {preview.salarioTotal}</Typography>
            <Typography>
            </Typography>
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
