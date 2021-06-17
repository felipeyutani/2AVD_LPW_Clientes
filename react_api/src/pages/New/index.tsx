import React, { useEffect, useState } from 'react'
import { Form } from './styles'
import api from '../../services/api'
import { useRouteMatch } from 'react-router'

interface ClientesParametros {
  id: string
}

interface Cadastro {
  cliente: string;
  telefone: string;
  email: string;
}


const New: React.FC = () => {
  const { params } = useRouteMatch<ClientesParametros>()

  const [clientes, setClientes] = useState<Cadastro[]>([])
  const [id, setID] = useState('')
  const [cliente, setCliente] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    async function loadData() {
      const dados = await api.get(`/clients/${params.id}`).then(response => response.data)
      console.log(dados)
      if (dados) {
        setID(dados.id)
        setCliente(dados.cliente)
        setTelefone(dados.telefone)
        setEmail(dados.email)
      } else {
        setClientes([])
      }
    }
    loadData()
  }, [])

  async function AddClientes(event: any) {
    event.preventDefault()

    const { target: form } = event

    const novoCadastro = {
      cliente: form.cliente.value,
      telefone: form.telefone.value,
      email: form.email.value,
    }

    if (id) {
      await api.put(`/clients/${id}`, novoCadastro)
      alert('Dados Alterados com sucesso !!')
    } else {
      await api.post('/clients', novoCadastro)
      alert('Dados incluidos com sucesso !!')
    }

    setClientes([...clientes, novoCadastro])
    setCliente('')
    setTelefone('')
    setEmail('')
  }

  return (
    <Form onSubmit={AddClientes}>
      <input type='text' name='cliente' value={cliente}
        onChange={e => setCliente(e.target.value)} placeholder='Cliente' />
      <input type='text' name='telefone' value={telefone}
        onChange={e => setTelefone(e.target.value)} placeholder='Telefone' />
      <input type='text' name='email' value={email}
        onChange={e => setEmail(e.target.value)} placeholder='Email' />
      <button type='submit'>Enviar</button>
    </Form>
  )
}

export default New
