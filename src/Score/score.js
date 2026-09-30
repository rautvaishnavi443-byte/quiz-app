import { useSelector } from "react-redux";
export function Score({score,length}){
    const quiz = useSelector(state => state.questions);
    console.log(quiz);
    return(
        <>
        <div id="score">{score}/{length}</div>
        </>
        
    )
}