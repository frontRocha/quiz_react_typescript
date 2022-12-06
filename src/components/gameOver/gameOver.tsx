import { useQuiz } from "../../context/quiz";

const GameOver = () => {
  const { state, dispatch } = useQuiz();

  return (
    <div className="text-center max-w-[500px] flex flex-col text-white">
      <h2 className="mb-4">Fim de jogo!</h2>
      <p className="mb-4">Pontuação: {state.score}</p>
      <p className="mb-4">
        Você acertou {state.score} de {state.questions.length}{" "}
        perguntas.
      </p>
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
