import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import api from '../../services/api'
import { Container, Clients } from './styles'
import { Link } from 'react-router-dom'

interface Cadastro {
  id: string;
  cliente: string;
  telefone: string;
  email: string;
}

interface DeleteClientes {
  id: string;
  cliente: string;
  telefone: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const [clientes, setClientes] = useState<Cadastro[]>([])
  const [clients, setClients] = useState<DeleteClientes[]>([])

  useEffect(() => {
    api.get('/clients').then(response => setClientes(response.data))
  }, [])
  console.log(clientes)

  async function DeleteClient(id: string) {
    await api.delete(`/clients/${id}`)
    alert('Dados excluidos com sucesso!!')
    setClients(clients.filter(client => client.id !== id))
  }

  useEffect(() => {
    ListarClientes()
  }, [])

  async function ListarClientes() {
  const ListClientes = await api.get('/clients')
  setClientes(ListClientes.data)
  }

  return (
    <Container>
      <Clients>
      <ul>
        {clientes.map((client, index) =>
          <li key={index.toString()}>
            <h3>{client.cliente} - {client.email}</h3>
            <Link to={`/new/${client.id}`}><button type="button">Alterar</button></Link>
            <a href='/'><button type="button" onClick={() => DeleteClient(client.id)}>Excluir</button></a>
          </li>
        )}
      </ul>
      <ul>
        {clientes.map((client, index) =>
          <li key={index}>
            <span>Cliente: {client.cliente}</span>
            <span>Telefone: {client.telefone}</span>
            <span>Email: {client.email}</span>
          </li>
        )}
      </ul>
      </Clients>
    </Container>
  )
}

export default Dashboard