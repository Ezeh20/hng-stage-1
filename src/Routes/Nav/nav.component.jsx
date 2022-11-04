import { Outlet } from "react-router-dom"
const Nav = () => {
    return (
        <div>
            <h1 hidden>Nav</h1>
            <Outlet />
        </div>
    )
}

export default Nav