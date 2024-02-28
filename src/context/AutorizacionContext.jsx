import { createContext, useCallback, useEffect, useState } from "react"
import { mockLogin } from "../utils/mock_respuesta"
import {
  getCurrentUser,
  isTokenActive,
  setLogoutIfExpiredHandler,
  logout as logoutService,
  setAuthToken
} from "../utils/Autorizacion"

const AutorizacionContext = createContext({
  user: undefined,
  isLoading: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  loadUser: () => {}
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getCurrentUser())
  const [isLoading, setIsLoading] = useState(false)

  const loadUser = useCallback(() => {
    const currentUser = getCurrentUser()
    setUser(currentUser)
  }, [])

  useEffect(() => {
    if (isTokenActive()) {
      setLogoutIfExpiredHandler(setUser)
      loadUser()
    } else {
      logoutService()
      setUser(undefined)
    }
  }, [loadUser])

  const login = useCallback(
    async (username, password) => {
      setIsLoading(true)
      try {
        const result = await mockLogin(username, password)
        console.log(result)
        setAuthToken(result.token)    
        setLogoutIfExpiredHandler(setUser)
        loadUser()
      } catch (apiError) {
        throw new Error()
      } finally {
        setIsLoading(false)
      }
    },
    [setUser, loadUser]
  )

  const logout = useCallback(async () => {
    logoutService()
    setUser(undefined)
  }, [])

  return (
    <AutorizacionContext.Provider value={{ user, isLoading, login, logout, loadUser }}>
      {children}
    </AutorizacionContext.Provider>
  )
}

export default AutorizacionContext