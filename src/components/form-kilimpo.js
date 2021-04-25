import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class FormKilimpo extends Component {
    constructor(props) {
        super(props);

        this.backendUrl = 'http://ec2-54-175-209-214.compute-1.amazonaws.com:3389/kilimpo';

        this.baseState = {
            nome: '',
            telefone: '',
            whatsapp: '',
            marca: '',
            modelo: '',
            ano: '',
            horario: '',
            placa: '',
            whats: [
                { value: 'Sim', label: "Sim         " },
                { value: 'Nao', label: "Não" },
            ],
            data: '',
            horarios: [
                { value: '08:00h', label: "08:00h" },
                { value: '08:30h', label: "08:30h" },
                { value: '09:00h', label: "09:00h" },
                { value: '09:30h', label: "09:30h" },
                { value: '10:00h', label: "10:00h" },
                { value: '10:30h', label: "10:30h" },
                { value: '11:00h', label: "11:00h" },
                { value: '11:30h', label: "11:30h" },
                { value: '12:00h', label: "12:00h" },
                { value: '12:30h', label: "12:30h" },
                { value: '13:00h', label: "13:00h" },
                { value: '13:30h', label: "13:30h" },
                { value: '14:00h', label: "14:00h" },
                { value: '14:30h', label: "14:30h" },
                { value: '15:00h', label: "15:00h" },
                { value: '15:30h', label: "15:30h" },
                { value: '16:00h', label: "16:00h" },
                { value: '16:30h', label: "16:30h" },
                { value: '17:00h', label: "17:00h" },
                { value: '17:30h', label: "17:30h" },
            ],
            contexto: {}
        }// fim de this.baseState

        this.state = this.baseState;

        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeTelefone = this.onChangeTelefone.bind(this);
        this.onChangeWhatsapp = this.onChangeWhatsapp.bind(this);
        this.onChangeMarca = this.onChangeMarca.bind(this);
        this.onChangeModelo = this.onChangeModelo.bind(this);
        this.onChangeAno = this.onChangeAno.bind(this);
        this.onChangePlaca = this.onChangePlaca.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
        this.onChangeHorario = this.onChangeHorario.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
    }// fim do constructor()

    onChangeNome(e) {
        this.setState({ nome: e.target.value })
    }
    onChangeTelefone(e) {
        this.setState({ telefone: e.target.value })
    }
    onChangeWhatsapp(e) {
        this.setState({ whatsapp: e.target.value })
    }
    onChangeMarca(e) {
        this.setState({ marca: e.target.value })
    }
    onChangeModelo(e) {
        this.setState({ modelo: e.target.value })
    }
    onChangeAno(e) {
        this.setState({ ano: e.target.value })
    }
    onChangePlaca(e) {
        this.setState({ placa: e.target.value })
    }
    onChangeData(e) {
        this.setState({ data: e.target.value })
    }
    onChangeHorario(e) {
        this.setState({ horario: e.target.value })
    }

    onReset(e) {
        this.setState(this.baseState);
    }

    onSubmit(e) {
        e.preventDefault();
        const kilimpo = {
            nome: this.state.nome,
            telefone: this.state.telefone,
            whatsapp: this.state.whatsapp,
            marca: this.state.marca,
            modelo: this.state.modelo,
            ano: this.state.ano,
            placa: this.state.placa,
            horario: this.state.horario,
            data: this.state.data,
        };// fim do const kilimpo

        axios.post(this.backendUrl, kilimpo)
            .then(res => this.setState({ contexto: res.data }))
            .catch(erro => this.setState({ contexto: erro.response.data }));

        this.setState(this.baseState);
    }// fim do onSubmit()

    render() {

        const contexto = this.state.contexto;
        let erros = [];
        if (contexto.erros) {
            console.log(erros); 
            console.log(contexto.erros); 
            console.log(erros === contexto.erros);
            if (erros === contexto.erros){
            }

            erros = contexto.erros.map(
                (erro, idx) => (
                    <li key={idx}>{erro.msg}</li>));
        }

        let kilimpo = [];
        if (contexto.kilimpo) {
            kilimpo = [
                (<li key='1'>
                    <b>Nome:</b> {contexto.kilimpo.nome}
                </li>),
                (<li key='2'>
                    <b>Telefone:</b> {contexto.kilimpo.telefone}
                </li>),
                (<li key='3'>
                    <b>Whatsapp:</b> {contexto.kilimpo.whatsapp}
                </li>),
                (<li key='4'>
                    <b>Marca do veículo:</b> {contexto.kilimpo.marca}
                </li>),
                (<li key='5'>
                    <b>Modelo:</b> {contexto.kilimpo.modelo}
                </li>),
                (<li key='6'>
                    <b>Ano:</b> {contexto.kilimpo.ano}
                </li>),
                (<li key='7'>
                    <b>Placa:</b> {contexto.kilimpo.placa}
                </li>),
                (<li key='8'>
                    <b>Data:</b> {contexto.kilimpo.data}
                </li>),
                (<li key='9'>
                    <b>Horario:</b> {contexto.kilimpo.horario}
                </li>),
            ]
        } // fim do if (contexto.kilimpo)

        return (
            <> <Container fluid>
                <font face="Arial">
                <h1 className="text-center">
                    Lavação automotiva KiLimpo
                </h1>
                <br /><br /><br />
                <h2 className="text-center">
                    Informações do proprietário
                </h2>
                <br />
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className="col-md-6 offset-md-4">
                        <Form.Row className="text-center">
                            <Form.Label column sm={2}>
                                Nome completo *
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control type="text" value={this.state.nome} onChange={this.onChangeNome} />
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-4">
                        <Form.Row className="text-center">
                            <Form.Label column sm={2}>
                                Telefone
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control type="text" value={this.state.telefone} onChange={this.onChangeTelefone} />
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <fieldset>
                        <Form.Group className="col-md-6 offset-md-4">
                            <Form.Row>
                                <Form.Label as="legend" column sm={2} className="text-center">
                                    Possui Whatsapp?
                                </Form.Label>
                                <Col>
                                    {
                                        this.state.whats.map((obj, idx) => {
                                            return (<React.Fragment key={idx}>
                                                <Form.Check inline
                                                    type="radio"
                                                    name="Whatsapp"
                                                    checked={this.state.whatsapp === obj.value}
                                                    value={obj.value}
                                                    onChange={this.onChangeWhatsapp} />
                                                {obj.label}
                                            </React.Fragment>);
                                        })
                                    }
                                </Col>
                            </Form.Row>    
                        </Form.Group>
                    </fieldset>
                    <br /><br /><br />

                    <h2 className="text-center">
                        Informações do veículo
                    </h2>
                    <br />

                    <Form.Row className="text-center">
                        <Form.Group as={Col}>
                            <Form.Label>
                                Marca *
                            </Form.Label>
                            <Form.Control type="text" value={this.state.marca} onChange={this.onChangeMarca} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>
                                Modelo *
                            </Form.Label>
                            <Form.Control type="text" value={this.state.modelo} onChange={this.onChangeModelo} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>
                                Placa *
                            </Form.Label>
                            <Form.Control type="text" value={this.state.placa} onChange={this.onChangePlaca} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>
                                Ano
                            </Form.Label>
                            <Form.Control type="text" value={this.state.ano} onChange={this.onChangeAno} />
                        </Form.Group>
                    </Form.Row>
                    <br /><br /><br />
                    
                    <h2 className="text-center">
                        Data e horário do agendamento
                    </h2>
                    <br />

                    <Form.Row className="text-center">
                        <Form.Group as={Col}>
                            <Form.Label>
                                Data *
                            </Form.Label>
                            <Form.Control type="date" value={this.state.data} onChange={this.onChangeData} className="text-center"/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>
                                Horário *
                            </Form.Label>
                            <Form.Control as="select" custom value={this.state.horario} 
                            onChange={this.onChangeHorario} className="text-center">
                                <option value="-1">--Selecione o horário de atendimento</option>
                                {
                                    this.state.horarios.map(obj => {
                                        return(<option key={obj.value}
                                        value={obj.value}>{obj.label}</option>);
                                    })
                                }
                            </Form.Control>
                            {/* <Form.Control type="text" value={this.state.modelo} onChange={this.onChangeModelo} /> */}
                        </Form.Group>
                    </Form.Row>


                    <br /><br /><br />
                    <Form.Group>
                        <Button type="submit" variant="success">Enviar</Button>{' '}
                        {/* <input type="submit" value="Enviar" /> */}
                        <Button variant="secondary" onClick={this.onReset}>Limpar</Button>{' '}
                        {/* <input type="button" value="Limpar" onClick={this.onReset} /> */}
                    </Form.Group>
                </Form>

                    {/* <fieldset>
                            <legend>Agendamento</legend>
                            Nome completo: *<br />
                            <input type="text" value={this.state.nome}
                            onChange={this.onChangeNome} /><br />
                            
                            Telefone: <br />
                            <input type="text" value={this.state.telefone}
                            onChange={this.onChangeTelefone} /><br />
                            
                            Este número possui Whatsapp? * ([NÃO] caso prefira não informar o telefone)
                            <br />
                            {
                                this.state.whats.map((obj, idx) => {
                                    return(<React.Fragment key={idx}>
                                        <input type="radio" name="whatsapp"
                                        checked={this.state.whatsapp === obj.value}
                                        value={obj.value}
                                        onChange={this.onChangeWhatsapp} />
                                        {obj.label}
                                        </React.Fragment>);
                                    })
                                }
                                <br />
                                <br />
                                <br />
                                Marca do veículo: *<br />
                                <input type="text" value={this.state.marca}
                                onChange={this.onChangeMarca} /><br />
                                
                                Modelo: *<br />
                                <input type="text" value={this.state.modelo}
                                onChange={this.onChangeModelo} /><br />
                                
                                Ano: <br />
                                <input type="text" value={this.state.ano}
                                onChange={this.onChangeAno} /><br />
                                
                                Placa: *<br />
                                <input type="text" value={this.state.placa}
                                onChange={this.onChangePlaca} /><br /><br /><br />
                                
                                Data e horário de atendimento *<br />
                                <input type="date" value={this.state.data}
                                onChange={this.onChangeData}/>
                                
                                
                                
                                
                                <select value={this.state.horario}
                                onChange={this.onChangeHorario}>
                                <option value="-1">--Selecione o horário de atendimento</option>
                                {
                                    this.state.horarios.map(obj => {
                                        return(<option key={obj.value}
                                            value={obj.value}>{obj.label}</option>);
                                        })
                                    }
                                    </select><br />
                                    
                                    <hr />
                                    <input type="submit" value="Enviar" />
                                    <input type="button" value="Limpar"
                                    onClick={this.onReset} />
                                    * Campos obrigatórios
                                </fieldset> */}

                    {
                        contexto.erros && <ul>{erros}</ul>
                    }

                    <div id="resultado">
                        <h2>Seu horário foi agendado com sucesso!</h2><br />
                        <h2>Dados recebidos:</h2>
                        {contexto.kilimpo && <ul>{kilimpo}</ul>}
                    </div>
                </font>
            </Container>
            </>
        );// fim do return
    }// fim do render()
}// fim da classe Formkilimpo
