import { useState } from 'react'

export default function Form() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState(0)
  const [usuarios, setUsuarios] = useState([])

  async function salvarUser() {
    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify({ nome, idade })
    })

    setNome("")
    setIdade(0)

    const resp = await fetch('/api/form')
    const usuarios = await resp.json()

    setUsuarios(usuarios)
  }

  return (
    <div>
      <h1>Integrando com API #2</h1>

      <input type="text" name="name" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input type="number" name="idade" value={idade} onChange={(e) => setIdade(+e.target.value)} />

      <button onClick={salvarUser}>salvar</button>

      <div>
        <ul>
          {
            usuarios.map((usuario, idx) => <li key={idx}>{usuario.nome} - {usuario.idade} </li>)
          }
        </ul>
      </div>
    </div>
  )
};
