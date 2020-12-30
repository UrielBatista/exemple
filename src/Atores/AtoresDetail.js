import React from 'react';
import './table.css';
import api from '../services/api';


import Swal from 'sweetalert2';

const AtoresDetail = (props) => {

  const { ID_PESSOA, PRIMEIRO_NOME, SEGUNDO_NOME, IDADE, ENDERESSO, TELEFONE, NUMERO_CASA } = props;

  const handleClick = () => {
    Swal.fire({
      title: `<strong>Dados de ${PRIMEIRO_NOME} ${SEGUNDO_NOME}</strong>`,
      icon: 'info',
      html:
        `<p>Idade: ${IDADE}</p>` +
        `<p>Enderesso: ${ENDERESSO}</p>` +
        `<p>Telefone: ${TELEFONE}</p>` +
        `<p>Numero da Casa: ${NUMERO_CASA}</p>`,
      showCloseButton: true,
      showCancelButton: true,
      showDenyButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Ok',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      denyButtonText: `Deletar`,
    }).then((result) => {
      if (result.isDenied) {
        console.log(ID_PESSOA)
        api.delete(`/orders/delete/${ID_PESSOA}`)
          .then((result) => {
            Swal.fire({
              title: `A pessoa ${PRIMEIRO_NOME} foi deletada com sucesso`,
              icon: 'success'
            })
          })
      }
    })
  }

  return (
    <div style={{ textAlign: 'center' }}>

      <div className="nomesPersonagens">
        <p className="p_lista" onClick={handleClick}>{PRIMEIRO_NOME}&nbsp;&nbsp;{SEGUNDO_NOME}</p>
      </div>
    </div>
  );
}
export default AtoresDetail;