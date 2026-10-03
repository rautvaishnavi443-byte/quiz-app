import { useState } from "react"
import {categories} from './Category.js'
import "./quizSetting.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

export function QuizSetting(){
  const [num , setNum] = useState(0);
  const [diff , setDiff] = useState('easy');
  const [type , setType] = useState('multiple');
  const [category , setCategory] = useState(9);
  console.log(type);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const submitForm = (e) => {
    // console.log(num,diff,type,category)

    fetch(`https://opentdb.com/api.php?amount=${num}&category=${category}&difficulty=${diff}&type=${type}`)
      .then(data => data.json())
      .then(data => { 
        let quesArr = data.results;
        // console.log(data.results);
        dispatch({type : 'GET_QUIZ' , payload : quesArr});
      })
      if(type==='multiple'){
        nav('/quiz');
      }else{
        nav('/trueFalse');
      }
  }
 
  return(
    <form id="form">
      <div className="inputs">
        <label>Amount of Questions:</label>
        <input type="range" id="amount" value={num} onChange={e=>setNum(e.target.value)}/> <p>{num}</p>
      </div>

      <div className="inputs">
        <label>Difficulty level:</label>

        <label>Easy
          <input type="radio" id="easy" name="diff-level" checked={diff==='easy'}  value={'easy'} onChange={e=>setDiff(e.target.value)}/>
        </label>
        <label>Medium
          <input type="radio" id="medium" name="diff-level" checked={diff==='medium'}  value={'medium'} onChange={e=>setDiff(e.target.value)}/>
        </label>
        <label>Hard
          <input type="radio" id="hard" name="diff-level" checked={diff==='hard'}  value={'hard'} onChange={e=>setDiff(e.target.value)}/>
        </label>
      </div>
      
      <div className="inputs">
        <label>Type of Questions:</label>
          <label>MCQ:
          <input type="radio" id="multiple" name="type" checked={type==='multiple'}  value={'multiple'} onChange={e=>setType(e.target.value)}/>
        </label>
        <label>True/False:
          <input type="radio" id="bool" name="type" checked={type==='boolean'}  value={'boolean'} onChange={e=>setType(e.target.value)}/>
        </label>
      </div>

      <div className="inputs">
        <div className="btn-group">
          <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </button>
          <ul className="dropdown-menu">
            {
              categories.map(item =>
                <li key={item.id}><button
                  onClick={e => setCategory(item.id)}
                  className="btn-list btn"
                  value={item.id}
                  type="button"
                >{item.id}:{item.name}
                </button>
                </li>
              )
            }
          </ul>
        </div>
        <p>{category}</p>
      </div>

            <div className="inputs">
              <button type='button' onClick={submitForm} className="btn">Get Quiz</button>
            </div>
      
    </form>
  )
}