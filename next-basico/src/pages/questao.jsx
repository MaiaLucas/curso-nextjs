import { useState, useEffect } from 'react'

export default function Questao() {
  const [questao, setQuestao] = useState({})
  useEffect(() => {
    fetch('http://localhost:3000/api/questao/123').then((res) => res.json()).then((result) => setQuestao(result))
  }, [])

  function renderizarRespostas() {
    console.log(questao)
    if(questao)
      return questao.respostas?.map((resp, index) => {
        return (
          <li key={index}>{resp}</li>
        )
      })
  }
  
  return (
    <div>
      <h1>questao</h1>
      <div>
        <span>{questao.enunciado}</span>
        {renderizarRespostas()}
      </div>
    </div>
  )
};
