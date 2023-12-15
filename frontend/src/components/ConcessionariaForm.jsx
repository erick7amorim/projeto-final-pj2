import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ConcessionariaForm = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://backend-wxoe.onrender.com/concessionarias', { nome });
      console.log('Concessionária cadastrada:', response.data);

      navigate('/concessionarias');
    } catch (error) {
      console.error('Erro ao cadastrar concessionária:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <button type="submit">Cadastrar Concessionária</button>
    </form>
  );
};

export default ConcessionariaForm;
