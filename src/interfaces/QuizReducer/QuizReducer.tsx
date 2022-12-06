import { STAGES } from "../InitialState/initalState";
import { MainContextData } from "../MainContextData/MainContextData";
import { Action } from "../Actions/Actions";
import { initalState } from "../InitialState/initalState";
import questions from '../../data/questions_completed'


export const quizReducer = (state: MainContextData, action: Action) => {
    switch (action.type) {
        case "CHANGE_STAGE":
            return {
                ...state,
                gameStage: STAGES[1]
            }

        case "START_GAME":
            let quizQuestions = null;

            state.questions.forEach((question: { category: string, questions: string }) => {
                if (question.category === action.payload) {
                    quizQuestions = question.questions;
                }
            });

            return {
                ...state,
                questions: quizQuestions,
                gameStage: STAGES[2],
            };

        case "REORDER_QUESTIONS":
            const reorderedQuestions = state.questions.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderedQuestions,
            };

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;

            if (!state.questions[nextQuestion]) {
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[3] : state.gameStage,
                answerSelected: false,
                help: false,
            };


        case "NEW_GAME":
            return initalState;

        case "CHECK_ANSWER": {
            if (state.answerSelected) return state

            const answer = action.payload.answer;
            const option = action.payload.option;

            let correctAnswer = 0;

            if (answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            };
        }

        case "SHOW_TIP":
            return {
                ...state,
                help: true,
            };

        case "REMOVE_OPTION":
            const questionWithoutOption = state.questions[state.currentQuestion];

            let repeat = true;
            let optionToHide;

            questionWithoutOption.options.forEach((option: string) => {
                if (option !== questionWithoutOption.answer && repeat) {
                    optionToHide = option;
                    repeat = false;
                }
            });

            return {
                ...state,
                optionToHide,
                help: 'tip',
            };

        case "RETURN_HOME":
            return {
                ...state,
                gameStage: STAGES[1],
                questions: questions,
                currentQuestion: 0,
                score: 0,
                answerSelected: false
            };


        default:
            return state
    }
}