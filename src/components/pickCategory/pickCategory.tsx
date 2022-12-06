import { useQuiz } from "../../context/quiz";
import imageSelect from '../../assets/category.svg'

const PickCategory = () => {
  const { state, dispatch } = useQuiz();

  function chooseCategoryAndReorderQuestions(category: string) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div className="text-center max-w-[500px]">
      <h2 className="text-white mb-4 text-2xl font-bold">Escolha uma categoria</h2>
      <p className="text-white mb-4 text-xm font-thin">As perguntas serão referentes a uma das linguagens abaixo:</p>
      {state.questions.map((question: any) => (
        <button
          className="mx-2"
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}

      <img className="mt-8 max-w-[300px] mx-auto" src={imageSelect} alt="Categoria do Quiz" />
    </div>
  );
};

export default PickCategory;
