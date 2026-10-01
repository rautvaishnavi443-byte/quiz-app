export async function adduser(username,password){
    const param = {
        method : 'POST',
        headers : {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({name : username , password : password}),
    }
    let status = 200;
   const data = await fetch('https://quiz-app-backend-jet.vercel.app/login',param)
    .then(data=>data)
    .then(data=>{status = data.status;return data.json()});
    if(status==200){
        localStorage.setItem('token',data[0].token);
    }
    console.log(data,status);

    if(status==401){
        const login_data = await fetch('https://quiz-app-backend-jet.vercel.app/adduser',param)
        .then(data=>data.json())
        .then(data=>data);
        const usertoken = login_data;
        localStorage.setItem('token',usertoken);
        // console.log(login_data);
    }
}

