class Session {
  isAuthenticated = false
  token = null

  constructor (token, axios) {
    this.axios = axios

    if (token) {
      this.isAuthenticated = true
      this.token = token
    }
  }

  get user () {
    // load and get current user
    if (!this.isAuthenticated) 
      return Promise.resolve(null)
    
    if (this._user) 
      return Promise.resolve(this._user)

    return this.axios.request('/users/me')
      .then(resp => resp.data)
      .then(user => this._user = user, user)
  }


  authenticate () {
    window.localStorage.setItem("redirectionPathExternal", window.location.pathname)
    window.location.href = "/app/login"
  }
}


export default function({ app: { $cookies }, $axios} , inject) {
  const token = $cookies.get('auth-jwt') 
  let session;
  if (token) {
    // we have loggedIn session
    $axios.defaults.headers.common['Authorization'] = `JWT ${token}`
    session = new Session(token, $axios)
  } else {
    session = new Session(null, $axios)
  }

  inject('session', session)
}
