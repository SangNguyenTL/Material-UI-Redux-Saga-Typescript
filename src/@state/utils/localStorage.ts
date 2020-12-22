const storage = {
  getToken(): string | null {
    return localStorage.getItem('token')
  },
  setToken(token: string): void {
    localStorage.setItem('token', token)
  },
}

export default storage
