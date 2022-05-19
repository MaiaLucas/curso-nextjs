export function getStaticProps( ) {
  return {
    props: {
      numero: Math.floor(Math.random() * 999999)
    }
  }
};



export default function Estatico(props) {
  return (
    <div>
      <h1>Aleatório: {props.numero}</h1>
    </div>
  )
};
