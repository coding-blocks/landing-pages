import qs from 'qs'

export default function({ $axios, redirect }) {
  // $axios.defaults.headers.common['x-auth'] = "hello"

  $axios.onRequest(config => {
    config.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'brackets' });
    return config;
  })
}
