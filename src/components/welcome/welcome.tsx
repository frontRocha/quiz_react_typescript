import Quiz from "../../assets/quiz.svg";
import { useQuiz } from "../../context/quiz";

const Welcome = () => {

  const { dispatch } = useQuiz()

  return (
    <div className="text-center max-w-[500px]">
      <h1 className="mb-4 text-5xl font-bold text-white">Seja bem-vindo</h1>
      <h2 className="mb-4 text-xl text-white font-bold">Teste seus conhecimentos em programação aqui</h2>
      <p className="mb-4 text-[#8435de]">Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
      <img className="mt-8" src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;
