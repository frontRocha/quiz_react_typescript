import { createContext, useContext, useReducer } from "react";
import { MainContextData } from "../interfaces/MainContextData/MainContextData";
import { initialState } from "../interfaces/InitialState/initialState";
import { quizReducer } from "../interfaces/QuizReducer/QuizReducer";

interface MainContextProvider {
    children: React.ReactNode;
}

const QuizContext = createContext<{
    state: MainContextData;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null
});

export const QuizProvider = ({ children }: MainContextProvider) => {

    const [state, dispatch] = useReducer(quizReducer, initialState)

    return (
        <QuizContext.Provider
            value={{ state, dispatch }}
        >
            {children}
        </QuizContext.Provider>
    )
}

export const useQuiz = () => useContext(QuizContext)
