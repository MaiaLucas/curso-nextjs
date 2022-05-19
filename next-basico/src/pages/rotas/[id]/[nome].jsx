import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nome() {
  const {query} = useRouter()
  console.log(query)
  return (
    <div>
      <h1>Rotas / {query.id} / {query.nome}</h1>
      <Link href={'/rotas'}>
        <button>
          voltar
        </button>
      </Link>
    </div>
  )
};
