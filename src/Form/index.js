import React, { useState } from 'react';

import api from '../services/api';
import './input.css';
import Swal from 'sweetalert2';
import {
    Input,
    Button
} from 'reactstrap';

import MascaraTelefone from 'react-text-mask';


const FormInput = () => {

    const [PRIMEIRO_NOME, setNome] = useState('')
    const [SEGUNDO_NOME, setSobrenome] = useState('')
    const [IDADE, setIdade] = useState('')
    const [ENDERESSO, setEnderesso] = useState('')
    const [NUMERO_CASA, setNum_casa] = useState('')
    const [TELEFONE, setTelefone] = useState('')
    const [UF_FAVORECIDO, setUf] = useState('')
    const [ANO_NASCIMENTO, setNascimento] = useState('')
    const [EMAIL_VALIDACAO, setEmail] = useState('')

    const limparCampos = () => {
        setNome('')
        setSobrenome('')
        setIdade('')
        setEnderesso('')
        setNum_casa('')
        setTelefone('')
        setUf('')
        setNascimento('')
        setEmail('')
    }

    const handleSubmit = () => {
        let formdata = {
            PRIMEIRO_NOME,
            SEGUNDO_NOME,
            IDADE,
            ENDERESSO,
            NUMERO_CASA,
            TELEFONE,
            UF_FAVORECIDO,
            ANO_NASCIMENTO, EMAIL_VALIDACAO
        }

        if (!PRIMEIRO_NOME || !SEGUNDO_NOME || !IDADE || !ENDERESSO || !NUMERO_CASA || !TELEFONE || !UF_FAVORECIDO || !ANO_NASCIMENTO || !EMAIL_VALIDACAO) {
            // Swal.fire({title: 'Oops, Algum campo não foi preenchido!!', icon: 'error'});
            Swal.fire({
                title: 'Oops, Algum campo não foi preenchido!!',
                width: 600,
                padding: '3em',
                background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://sweetalert2.github.io/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
            })
        } else {
            api.post(`/create/pessoas`, formdata)
                .then(response => {
                    if (response.status === 201) {
                        limparCampos()
                        Swal.fire({ title: 'Dados cadastrados com sucesso!!', icon: 'success' });
                    }
                })
        }
    }

    return (
        <div style={{ textAlign: 'center' }} className="form">
            <h1>Inserindo na Base</h1>
            <h4>Preencha os campos com letra maiúscula*</h4>
            <Input id="na_me" className="name" value={PRIMEIRO_NOME} placeholder="Nome" onChange={event => setNome(event.target.value)} />
            <Input id="last_name" className="lastname" value={SEGUNDO_NOME} placeholder="Sobrenome" onChange={event => setSobrenome(event.target.value)} />
            <Input id="a_ge" className="age" value={IDADE} placeholder="Idade" onChange={event => setIdade(event.target.value)} />
            <Input id="add_ress" className="address" value={ENDERESSO} placeholder="Enderesso" onChange={event => setEnderesso(event.target.value)} />
            <Input id="nu_mer" className="num" value={NUMERO_CASA} placeholder="Numero da residência" onChange={event => setNum_casa(event.target.value)} />

            <MascaraTelefone value={TELEFONE} type="text" id="fo_ne" className="fone"
                mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholder="Telefone"
                onChange={e => setTelefone(e.target.value)}
            >
            </MascaraTelefone>

            <Input id="uf_city" className="uf" value={UF_FAVORECIDO} placeholder="Uf" onChange={event => setUf(event.target.value)} />
            <Input id="year_born" className="yearBorn" value={ANO_NASCIMENTO} placeholder="Ano de Nascimento" onChange={event => setNascimento(event.target.value)} />
            <Input id="ma_il" className="mail" value={EMAIL_VALIDACAO} placeholder="Email" onChange={event => setEmail(event.target.value)} />
            <Button className="submit" onClick={handleSubmit}>Enviar</Button>
        </div>
    );
}
export default FormInput;