import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const USER_KEY = 'user'
const USERS_DB_KEY = 'swoo_users'

function loadUser() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function loadUsersDb() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(USERS_DB_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveUsersDb(users) {
  window.localStorage.setItem(USERS_DB_KEY, JSON.stringify(users))
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadUser)

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(USER_KEY, JSON.stringify(user))
    } else {
      window.localStorage.removeItem(USER_KEY)
    }
  }, [user])

  // Create a new account, log the person in immediately, and remember the
  // name+email+password so login() can validate against it later.
  const register = ({ name, email, password }) => {
    const users = loadUsersDb()
    const normalizedEmail = email.trim().toLowerCase()

    if (users.some((u) => u.email === normalizedEmail)) {
      return { success: false, error: 'An account with this email already exists. Please log in instead.' }
    }

    const newUser = { name: name.trim(), email: normalizedEmail, password }
    saveUsersDb([...users, newUser])

    const sessionUser = { name: newUser.name, email: newUser.email }
    setUser(sessionUser)
    return { success: true, user: sessionUser }
  }

  const login = ({ email, password }) => {
    const users = loadUsersDb()
    const normalizedEmail = email.trim().toLowerCase()
    const match = users.find((u) => u.email === normalizedEmail && u.password === password)

    if (!match) {
      return { success: false, error: 'Invalid email or password. Please try again or register.' }
    }

    const sessionUser = { name: match.name, email: match.email }
    setUser(sessionUser)
    return { success: true, user: sessionUser }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
