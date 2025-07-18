import React, { useState } from 'react';
import "../styles/SobreNos.css";
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
import { jsPDF } from 'jspdf';

const SobreNos = () => {
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

  const handleExportPDF = () => {
    const doc = new jsPDF();

    // Cabeçalho da fatura
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Fatura Empresa', 105, 20, null, null, 'center');
    
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('Data: ' + new Date().toLocaleDateString(), 160, 30);

    doc.text(`Cliente: ${preview.cliente}`, 20, 40);
    doc.text(`Morada: ${preview.morada}`, 20, 50);
    doc.text(`Código Postal: ${preview.codigoPostal}`, 20, 60);
    doc.text(`Número Colaborador: ${preview.numeroColaborador}`, 20, 70);
    doc.text(`NIF: ${preview.nif}`, 20, 80);

    // Adicionando uma linha horizontal para separar seções
    doc.setLineWidth(0.5);
    doc.line(20, 90, 190, 90);

    // Tabela para detalhamento do salário
    doc.text('Descrição', 20, 100);
    doc.text('Valor', 150, 100);

    doc.setFont('Helvetica', 'normal');
    doc.text(`Salário por dia:`, 20, 110);
    doc.text(`€ ${preview.salarioDia.toFixed(2)}`, 150, 110);

    doc.text(`Dias Trabalhados:`, 20, 120);
    doc.text(`${preview.diasTrabalhados}`, 150, 120);

    doc.text(`Salário Bruto Total:`, 20, 130);
    doc.text(`€ ${preview.salarioTotal.toFixed(2)}`, 150, 130);

    // Linha final para rodapé
    doc.setLineWidth(0.5);
    doc.line(20, 140, 190, 140);

    // Rodapé
    doc.setFont('Helvetica', 'italic');
    doc.text('Obrigado por escolher nossos serviços!', 20, 150);

    doc.setFont('Helvetica', 'bold');
    doc.text(`Total a Pagar: € ${preview.salarioTotal.toFixed(2)}`, 150, 160);

    // Gerar o PDF
    doc.save('fatura.pdf');
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
            <Button onClick={handleExportPDF} color="primary">
              Exportar PDF
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default SobreNos;
