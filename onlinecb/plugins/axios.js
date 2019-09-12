export default function({ axios, redirect }) {
  $axios.defaults.headers.common['x-auth'] = "hello"
}
