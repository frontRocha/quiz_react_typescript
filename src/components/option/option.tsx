import { useQuiz } from "../../context/quiz";

interface configs {
  option: string,
  selectOption: () => void,
  answer: string,
  hide: string | null
}


const Option = ({ option, selectOption, answer, hide }: configs) => {
  const { state } = useQuiz();

  return (
    <div
      onClick={() => selectOption()}
      className={` text-white
      option
        ${state.answerSelected && option === answer ? "correct" : ""} ${state.answerSelected && option !== answer ? "wrong" : ""
        }
        ${hide ? "hide" : ""}
        `}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
