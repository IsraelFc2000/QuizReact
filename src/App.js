import { useState } from "react";

function App() {
  const perguntas = [
    {
      pergunta: "O que é Front-end?",
      alternativas: [
        "Parte de um sistema que é oculta para o usuário.",
        "Parte de um sistema que é visível e interativa ao usuário.",
        "Parte lógica que recebe as regras de negócio.",
        "Nenhuma das alternativas anteriores.",
      ],
      resposta: "Parte de um sistema que é visível e interativa ao usuário.",
    },
    {
      pergunta: "O que é React JS?",
      alternativas: [
        "Uma poderosa biblioteca JavaScript.",
        "Uma linguagem de programação.",
        "Um servidor de Cloud.",
        "Todas as alternativas anteriores.",
      ],
      resposta: "Uma poderosa biblioteca JavaScript.",
    },
    {
      pergunta: "Quais são as principais tecnologias do mundo Front-end?",
      alternativas: [
        "Java, golang e python.",
        "AWS, Google Cloud e Azure.",
        "Kotlin, HTML e CSS.",
        "HTML, CSS e JavaScript.",
      ],
      resposta: "HTML, CSS e JavaScript.",
    },
  ];

  const [perguntaAtual, novaPergunta] = useState(0);
  const [resposta, novaResposta] = useState(null);
  const [pontuacao, novaPontuacao] = useState(0);

  function RespostaEscolhida(alternativa) {
    novaResposta(alternativa);

    if (alternativa === perguntas[perguntaAtual].resposta) {
      novaPontuacao(pontuacao + 1);
    }
  }

  function ProximaPergunta() {
    novaResposta(null);

    if (perguntaAtual === perguntas.length - 1) {
      alert("Fim do quiz! Sua pontuação foi: " + pontuacao);
    } else {
      novaPergunta(perguntaAtual + 1);
    }
  }

  return (
    <div className="App">
      <h1>Quiz Front-end!</h1>

      <h2>{perguntas[perguntaAtual].pergunta}</h2>
      <ul>
        {perguntas[perguntaAtual].alternativas.map((alternativa, id) => (
          <li key={id}>
            <label>
              {alternativa}
              <button onClick={() => RespostaEscolhida(alternativa)}>
                Escolher
              </button>
            </label>
          </li>
        ))}
      </ul>

      {resposta && (
        <p>
          Resposta {resposta === perguntas[perguntaAtual].resposta ? "correta!" : "incorreta!"}
        </p>
      )}

      <button onClick={ProximaPergunta}>Próxima pergunta</button>
    </div>
  );
}

export default App;
