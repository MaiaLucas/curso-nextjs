export default function questao(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    res.status(200).json({
      id,
      enunciado: "cor favorita?",
      respostas: ["branca", "roxa", "verde", "azul"],
    });
  } else {
    res.status(405).send();
  }
}
