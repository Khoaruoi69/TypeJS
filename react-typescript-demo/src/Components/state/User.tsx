import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}
export const User =()=>{
    const [user, setUser]= useState<AuthUser>({}as AuthUser) // khi tao doi tuong trong loaij AuthUser
    const handleLogin = () => {
        setUser({
            name: "khoa",
            email: 'khoa@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser({} as AuthUser)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div> User name is {user.name} </div>
            <div> User email is {user.email} </div>
        </div>
    )
}