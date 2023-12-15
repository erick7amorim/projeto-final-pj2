// CadastroVeiculoPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import VeiculoForm from '../components/VeiculoForm';

const CadastroVeiculoPage = () => {
  const handleCadastroVeiculo = (data) => {

    console.log('Dados do formulário:', data);

  };

  return (
    <div className="container">
      <h1 className="title">Cadastro de Veículo</h1>
      <VeiculoForm onSubmit={handleCadastroVeiculo} />
      <Link to="/" className="link">Voltar para a Página Inicial</Link>
    </div>
  );
};

export default CadastroVeiculoPage;
