import { useSelector } from "react-redux"
import { Timer } from "../Timer/timer.js";
import './Quiz.css';
import { useEffect, useState } from "react";
import { Score } from "../Score/score.js";
import { useNavigate } from "react-router-dom";

export function Quiz() {
    //hooks////////////////////////////////////////////////////////
    const nav = useNavigate();
    const [score,setScore] = useState(0);
    const [arr, setArr] = useState([0,1,2,3]);
    const [b, setB] = useState(true);
    const [timeBool, setTimeBool] = useState(true);
    const [i, setI] = useState(0);

    //selector/////////////////////////////////////////////////////
    const quiz = useSelector(state => state.questions);
    console.log(quiz);
    //functions////////////////////////////////////////////////////
    function Next() {
        setB(true);
        setI(i => i + 1);
        setArr([...arr].sort(() => Math.random() - 0.5));
    }
    

    function Btn(Uans, id) {
        setB(false);
        console.log(Uans);
        console.log(quiz[i].correct);
        if (Uans === quiz[i].correct) {
            document.getElementById(id).style.backgroundColor = 'rgba(78, 166, 78, 0.43)';
            setScore(score=>score+1);
        }
        else {
            document.getElementById(id).style.backgroundColor = 'rgba(166, 78, 78, 0.43)';
        }
    }
    //useEffect////////////////////////////////////////////////////

    useEffect(() => {
        if(quiz.length>0 && i<=quiz.length-1){
            document.getElementById('btn1').style.backgroundColor = 'rgba(255, 251, 230, 0.998)'
            document.getElementById('btn2').style.backgroundColor = 'rgba(255, 251, 230, 0.998)'
            document.getElementById('btn3').style.backgroundColor = 'rgba(255, 251, 230, 0.998)'
            document.getElementById('btn4').style.backgroundColor = 'rgba(255, 251, 230, 0.998)'
        }
    }, [i,quiz])
    //return///////////////////////////////////////////////////////
    if (quiz.length === 0) {
        return (
            <img id="loading" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW9xM3lwb3M4d2l1MHh6dmU0cjJid3NhZ2h5ZjJlYnc1YzVkdTV3ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uFymrKF1jQZ9K/giphy.gif" alt="Loading...."></img>
        )
    } else if (i <= quiz.length - 1 && quiz.length !== 0) {
        return (
            <div id="question-div">
                <Score score={score} length={quiz.length}/>
                <Timer setTimeBool={setTimeBool} Next={Next} timeBool={timeBool} />

                <div>{quiz[i].question}</div>
                <div>
                    <div>
                        <button
                            id="btn1"
                            className="q-btn"
                            value={quiz[i].Ans[arr[0]]}
                            onClick={() => Btn(quiz[i].Ans[arr[0]], 'btn1')}
                            disabled={b===false}
                        >{quiz[i].Ans[arr[0]]}
                        </button>
                    </div>
                    <div>
                        <button
                            id="btn2"
                            className="q-btn"
                            value={quiz[i].Ans[arr[1]]}
                            onClick={() => Btn(quiz[i].Ans[arr[1]], 'btn2')}
                            disabled={b===false}
                        >{quiz[i].Ans[arr[1]]}
                        </button>
                    </div>
                    <div>
                        <button
                            id="btn3"
                            className="q-btn"
                            value={quiz[i].Ans[arr[2]]}
                            onClick={() => Btn(quiz[i].Ans[arr[2]], 'btn3')}
                            disabled={b===false}
                        >{quiz[i].Ans[arr[2]]}
                        </button>
                    </div>
                    <div>
                        <button
                            id="btn4"
                            className="q-btn"
                            value={quiz[i].Ans[arr[3]]}
                            onClick={() => Btn(quiz[i].Ans[arr[3]], 'btn4')}
                            disabled={b===false}
                        >{quiz[i].Ans[arr[3]]}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div id="last-div">
                <div id="msg">Your Quiz Finished!</div>
                _____________________________________________
                <p id="paragraph">Your Score:</p>
                <div id="score">
                    <Score score={score} length={quiz.length}/>
                </div>
                <button className="nav-btn q-btn" onClick={()=>nav('/')}>Home</button>
            </div>
        )
    }
}