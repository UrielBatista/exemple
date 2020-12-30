import React, { useState, useEffect } from 'react';
import { GetCharacter } from '../services/getCharacter';

import AtoresDetail from './AtoresDetail';
import file from '../assets/loading.png';
import '../App.css';

const Atores = () => {
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredAtores, setFilteredAtores] = useState([]);

  useEffect(() => {
    setLoading(true)
    const dados = GetCharacter()
    dados.then((props) => {
      setPessoas(props[0])
      setLoading(false)
    })
  }, []);

  useEffect(() => {
    setFilteredAtores(
      pessoas.filter((pessoas) =>
        pessoas.PRIMEIRO_NOME.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pessoas]);

  if (loading) {
    return <img src={file} style={{ width: '30%', marginLeft: '35%', marginTop: '100px' }} className="logo_loading" alt="loading" />;
  }

  return (
    <div className="pessoas_base">
      <h1>
        Pessoas da Base
      </h1>

      <h4>Procurar Nomes</h4>
      <input
        style={{
          width: '50%',
          marginBottom: '15px',
          height: '35px',
          textAlign: 'center'
        }}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredAtores.map((atores, idx) => (
        <AtoresDetail key={idx} {...atores} />
      ))}
      <br></br>
      <br></br>

    </div>
  );
}
export default Atores;