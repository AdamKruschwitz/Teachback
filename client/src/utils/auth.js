class AuthService {

    getToken() {
        return localStorage.getItem('refresh_token')
    }
    
    login(refreshToken) {
        localStorage.setItem('refresh_token', refreshToken)
    }
}

export default new AuthService()