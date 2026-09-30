
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function Protect({ comp }) {
    console.log('object');
    const [isAuthenticated, setAuthentication] = useState(false);
    const nav = useNavigate();
    const param = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    }
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:5050/protected', param)
            .then( data => data );
            if (res.status==200) {
                nav('/');
            } else {
                alert('Not login');
                nav('/login');
            }

        }
        fetchData();
    },
        [])
    return(
        comp
    )
}