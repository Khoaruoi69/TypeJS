import { useState } from "react"

export const LoggedIn = ()=>{

    const [isLoggedIn,setInLoggedIn] = useState(false)

    const handleLogin = ()=>{
        setInLoggedIn(true);
    }
    const handeLogout = ()=>{
        setInLoggedIn(false);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handeLogout}>Logout</button>
            <div> User is {isLoggedIn? 'Logged in ': 'Logged out '}  </div>
        </div>
    )
}