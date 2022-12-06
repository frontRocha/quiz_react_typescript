import { MainContextData } from "../MainContextData/MainContextData"
import questions from '../../data/questions_completed'

export const STAGES = ["Start", "Category", "Playing", "End"]

export const initalState: MainContextData = {
    gameStage: STAGES[0],
    questions: questions,
    currentQuestion: 0,
    answerSelected: false,
    score: 0,
    help: false,
}