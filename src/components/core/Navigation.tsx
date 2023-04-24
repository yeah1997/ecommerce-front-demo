import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { isAuth } from "../../helpers/auth"
import { Jwt } from "../../store/models/auth"
import { useSelector } from 'react-redux'
import { AppState } from '../../store/reducers'
import { RouterState } from 'connected-react-router'

function useActive(currentPath: string, path: string) {
    return currentPath === path ? "ant-menu-item-selected" : ""
}

const Navigation = () => {
    const router = useSelector<AppState, RouterState>(state => state.router)
    const pathname = router.location.pathname

    const isHome = useActive(pathname, "/")
    const isShop = useActive(pathname, "/shop")
    const isSignin = useActive(pathname, "/signin")
    const isSignup = useActive(pathname, "/signup")
    const isDashboard = useActive(pathname, getDashboarUrl())

    function getDashboarUrl() {
        let url = "/user/dashboard"
        if (isAuth()) {
            const {
                user: { role }
            } = isAuth() as Jwt

            if (role === 1) {
                url = "/admin/dashboard"
            }
        }
        return url
    }

    return (
        <Menu mode="horizontal" selectable={false}>
            <Menu.Item className={isHome}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item className={isShop}>
                <Link to="/shop">Shop</Link>
            </Menu.Item>
            <Menu.Item className={isSignin}>
                <Link to="/signin">Login</Link>
            </Menu.Item>
            <Menu.Item className={isSignup}>
                <Link to="/signup">Sign up</Link>
            </Menu.Item>
            {isAuth() && (
                <Menu.Item className={isDashboard}>
                    <Link to={getDashboarUrl()}>dashboard</Link>
                </Menu.Item>
            )}
        </Menu>
    )
}

export default Navigation
