import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Rotas() {
  const { push } = useRouter()

  function navegacaoSimples(url) {
    push(url)
  }

  function navegacaoComParams() {
    push({
      pathname: '/rotas/params',
      query: {
        id: 101010,
        nome: 'Anaaaa'
      }
    })
  }

  return (
    <div>
      <h1>Rotas index</h1>
      <ul>
          <Link href={'/rotas/params?id=123&nome=Ana'}>
            <li>params</li>
          </Link>
          <Link href={'/rotas/123443/buscar'}>
            <li>buscar</li>
          </Link>
          <Link href={'/rotas/123443/Daniel'}>
            <li>Daniel</li>
          </Link>
      </ul>

      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <button onClick={() => push('/rotas/1243/buscar')}>Buscar</button>
        <button onClick={() => navegacaoSimples('/rotas/1243565/Daniel')}>Daniel</button>
        <button onClick={() => navegacaoComParams()}>Params</button>
      </div>
    </div>
  )
};
