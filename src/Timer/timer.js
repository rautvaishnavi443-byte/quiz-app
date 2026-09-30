import { useEffect, useState } from "react";
export function Timer({ setTimeBool, Next ,timeBool}) {
    const [count, setCount] = useState(10);
    let id = 0;
    useEffect(() => {
        id = setTimeout(() => {
            setCount(count => count - 1);
        }, 1000)

        if (count == 0) {
            setCount(10);
            setTimeBool(false);
            clearTimeout(id);
            Next();
        }
    }, [count])

    return (
        <h4>{count}</h4>
    )
}