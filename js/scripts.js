const obj = [
  {
    nome: "Gustavo",
    idade: 26,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissao: "TI",
      empresa: "Empresa Z",
    },
    hobbies: ["Programar", "Correr", "Ler"],
  },
  {
    nome: "John Wick",
    idade: 39,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: "Agente",
      empresa: "Empresa Continental",
    },
    hobbies: ["Tiro", "Luta", "Caça"],
  },
]


// JSON
// Converter objeto para JSON

const jsonData = JSON.stringify(obj)

console.log(jsonData);
console.log(typeof jsonData)

// JSON
// Converter JSON para Object

const objData = JSON.parse(jsonData);
console.log(objData);

objData.map((pessoa) => {
    console.log(pessoa.nome)
})