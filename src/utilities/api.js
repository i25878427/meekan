module.exports = {
  SERVER_URL: 'https://boiling-tor-31289.herokuapp.com/users/me/polls',

  fetchAPI: (params) => {
    const method = params.method || 'GET'
    let qs = ''
    let body
    const headers = params.headers || {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    if (['GET', 'DELETE'].indexOf(method) > -1) {
      qs = `?${getQueryString(params.data)}`
    } else { // POST or PUT
      body = JSON.stringify(params.data)
    }
    const url = params.url + qs
    const f = fetch(url, { method, headers }).then((response) => {
      return response.json()
    })
    .then((responseData) => {
      return responseData
    })
    .catch((error) => {
      return error
    })
    return f
  }
}

const getQueryString = (params) => {
  return Object
  .keys(params)
  .map(k => {
    if (Array.isArray(params[k])) {
      return params[k]
      .map(val => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
      .join('&')
    }

    return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
  })
  .join('&')
}
