const usuarios = [];

export default function form(req, res) {
  console.log(req.body);
  if (req.method === "POST") return post(req, res);
  return res.status(200).json(usuarios);
}

function post(req, res) {
  const usuario = JSON.parse(req.body);

  usuarios.push(usuario);

  res.status(204).send();
}
