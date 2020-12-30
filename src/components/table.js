import React, { useState, useEffect } from 'react';
import { GetCharacter } from '../services/getCharacter';

import { Table } from 'antd';
import './pagination.css';

const { Column, ColumnGroup } = Table;

const DataTable = () => {
  const [pessoas, setPessoas] = useState([])

  useEffect(() => {
    const dados = GetCharacter()
    dados.then((props) => {
      setPessoas(props[0])

    })
  }, []);

  console.log(pessoas)

  return (
    <Table dataSource={pessoas} rowKey='ID_PESSOA' className="table_pagination">
      <ColumnGroup>
        <Column title="Nome" dataIndex="PRIMEIRO_NOME" key="ID_PESSOA" />
        <Column title="Sobrenome" dataIndex="SEGUNDO_NOME" key="ID_PESSOA" />
      </ColumnGroup>
    </Table>
  );
}
export default DataTable;