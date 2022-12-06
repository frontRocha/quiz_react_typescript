export interface MainContextData {
    gameStage: string[number],
    questions?: any,
    currentQuestion: number,
    answerSelected: boolean,
    score: number,
    help: string | null | boolean,
    optionToHide?: React.ReactNode,
    state?: string,
    action?: string,
    answer?: string;
    option?: any;
}