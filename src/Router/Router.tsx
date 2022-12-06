import { QuizProvider } from '../context/quiz'
import Rotas from './rotas/rotas'

export default function Router() {
    return (
        <QuizProvider>
            <Rotas />
        </QuizProvider>
    )
}