export default class DoorModel {
  #numero: number;
  #temPresente: boolean;
  #selecionada: boolean;
  #aberta: boolean ;

  constructor(
    numero: number,
    temPresente = false,
    selecionada = false,
    aberta = false
  ) {
    this.#numero = numero;
    this.#temPresente = temPresente;
    this.#selecionada = selecionada;
    this.#aberta = aberta;
  }

  //getters
  get numero() {
    return this.#numero;
  }
  get temPresente() {
    return this.#temPresente;
  }
  get selecionada() {
    return this.#selecionada;
  }
  get aberta() {
    return this.#aberta;
  }

  desselecionar() {
    const selecionada = false;
    return new DoorModel(this.numero, this.temPresente, selecionada, this.aberta);
  }

  alternarSelecao() {
    const selecionada = !this.selecionada
    return new DoorModel(this.numero, this.temPresente, selecionada, this.aberta);
  }
  abrir() {
    const aberta = true;
    return new DoorModel(this.numero, this.temPresente, this.selecionada, aberta);
  }
}
