import { useEffect, useState ,useRef} from "react";
export function Timer({ setTimeBool, Next }) {
    const [count, setCount] = useState(10);
    let id = useRef(null);
    useEffect(() => {
        
        if (count === 0) {
            setCount(10);
            setTimeBool(false);
            clearTimeout(id.current);
            Next();
            return;
        }

        id.current = setTimeout(() => {
            setCount(count => count - 1);
        }, 1000)

    }, [count,Next,setTimeBool])

    return (
        <h4>{count}</h4>
    )
}