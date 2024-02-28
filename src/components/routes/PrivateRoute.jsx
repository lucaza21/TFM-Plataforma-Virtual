import useAutorizacion from "../../hooks/useAutorizacion"

function PrivateRoute({ children }) {
    const { user, loadUser } = useAutorizacion()

    useEffect(() => {
        loadUser()
    }, [loadUser])

    return user ? children : <Navigate to="/login" replace={true} />
}

export default PrivateRoute
