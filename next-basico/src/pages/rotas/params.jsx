import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Params() {
  const {query} = useRouter()
  console.log(query)
  return (
    <div>
      <h1>Rotas params {query.id} - {query.nome}</h1>
      <Link href={'/rotas'}>
        <button>
          voltar
        </button>
      </Link>
    </div>
  )
};
