import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuizzPage from '../../Pages/quizzPage/quizzPage'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<QuizzPage />} />
            </Routes>
        </BrowserRouter>
    )
}