import { useState, useEffect } from 'react'
import './App.css'
import { api } from './api/api'

function App() {
  const [data, setData] = useState([])
  const [funcionario, setFuncionario] = useState([])
  const [ex, setEx] = useState([])


  useEffect(() => {
    api.get('/').then((res) => {
      setData(res.data)
    })
  })

  useEffect(() => {
    api.get('/funcionarios').then((res) => {
      setFuncionario(res.data.items)
    })
  })

  useEffect(() => {
    api.get('/ex').then((res) => {
      setEx(res.data.items)
    })
  })

  return (
    <>
      {data}
      <br/><br />
      {funcionario.map((items) => {
        return(
          <div key={items.id}>
            <h3>Nome: {items.nome}</h3>
            <p>Profissão: {items.cargo}</p>
            <p>Idade: {items.idade}</p>
            <p>Licença: {items.temLicenca ? "Habilitado 😎" : "Sem premissao 👈"}</p>
          </div>
        )
      })}

      <br /><br />
      {ex.map((items) => {
        return(
          <div key={items.id}>
            <h3>{items.name}</h3>
            <img src={items.img} alt={items.name} />
          </div>
        )
      })}
    </>
  )
}

export default App
