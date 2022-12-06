import { useQuiz } from "../../context/quiz";
import Option from "../option/option";

const Question = () => {
  const { state, dispatch } = useQuiz()
  const currentQuestion = state.questions[state.currentQuestion];

  const onSelectOption = (option: string) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div className="mx-auto sm:w-[320px] md:w-[400px] lg:w-[500px] bg-[#8435de] rounded-xl py-8 px-4">
      <p className="mb-4">
        Pergunta {state.currentQuestion + 1} de {state.questions.length}
      </p>
      <h2 className="mb-8 text-white">{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option: string) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={state.optionToHide === option ? "hide" : null}
          />
        ))}
      </div>
      {!state.answerSelected && !state.help && (
        <>
          {currentQuestion.tip && (
            <button className="border-2 border-white m-4" onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
          )}
          <button className="border-2 border-white m-4" onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
            Excluir uma
          </button>
        </>
      )}
      {!state.answerSelected && state.help === true && (
        <p>{currentQuestion.tip}</p>
      )}
      {state.answerSelected && (
        <button className="border-x-2 border-black m-4" onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
