class AuthService {

    getToken() {
        return localStorage.getItem('refresh_token')
    }
    
    login(userObject) {
        localStorage.setItem('refresh_token', userObject)
    }
}

export default new AuthService()