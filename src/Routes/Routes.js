import { Routes, Route } from 'react-router-dom';
import { QuizSetting } from '../QuizSetting/quizSetting.js';
import { Quiz } from '../QuizPage/Quiz.js';
import { PageNotFound } from "../404PageNotFound/PageNotFound.js";
import { Score } from '../Score/score.js';
import { Truefalse } from '../True-False-Page/TrueFalse.js';
import { Protect } from '../ProtectedRoutes/ProtectedRoutes.js';
import { LoginPage } from '../Login/LoginPage.js';
export function MyRoutes() {

    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<Protect comp={ <QuizSetting/> }/>}/>
           <Route path='/quiz' element={<Protect comp={ <Quiz/> }/>}/>
            <Route path='/score' element={<Protect comp={ <Score/> }/>}/>
            <Route path='/truefalse' element={<Protect comp={ <Truefalse/> }/>}/>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}