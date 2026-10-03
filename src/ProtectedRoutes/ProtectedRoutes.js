
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function Protect({ comp }) {
    console.log(localStorage.getItem('token'));
    // const [isAuthenticated, setAuthentication] = useState(false);
    const nav = useNavigate();
    
    useEffect(() => {
        const param = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    }
        async function fetchData() {
            const res = await fetch('https://quiz-app-backend-jet.vercel.app/protected',param)
            .then( data => data );
            console.log(res);
            
            if (res.status===200) {
                nav('/quiz');
            } else {
                alert('Not login');
                nav('/login');
            }

        }
        fetchData();
    },
        [nav])
    return(
        comp
    )
}