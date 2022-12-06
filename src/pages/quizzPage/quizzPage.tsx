import { useQuiz } from "../../context/quiz";
import GameOver from "../../components/gameOver/gameOver";
import PickCategory from "../../components/pickCategory/pickCategory";
import Question from "../../components/question/question";
import Welcome from "../../components/welcome/welcome";


export default function QuizzPage() {
    const { state, dispatch } = useQuiz()

    return (
        <div className="text-center pt-6 flex flex-col items-center justify-center mx-auto bg-[#1c1c1c] min-h-screen pr-1 pl-1">
            {state.gameStage === "Start" && <Welcome />}
            {state.gameStage === "Category" && <PickCategory />}
            {state.gameStage === "Playing" && <div>
                <Question /> <button className="my-4" onClick={() => dispatch({ type: "RETURN_HOME" })}>Voltar</button>
            </div>}
            {state.gameStage === "End" && <GameOver />}
        </div>
    )

}