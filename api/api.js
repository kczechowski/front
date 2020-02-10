export default {
  url: 'http://192.168.0.80:8080',
  login: function (user, pass) {
    return fetch(this.url + '/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Authorization': 'Basic ' + btoa(user + ":" + pass)
      },
    }).then(res => {
      if (!res.ok) throw new Error();
      return res.json()
    });
  },
  register: function (email, user, pass) {
    return fetch(this.url + '/users', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nickname: user,
        email: email,
        password: pass
      })
    }).then(res => {
      if (!res.ok) throw new Error();
      return res.json()
    });
  },
  askQuestion: function (title, content, tags) {

    return fetch(this.url + '/questions', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title, content, tags
      })
    }).then(res => {
      if (!res.ok) throw new Error();
      return res.json()
    });

  },
  getQuestion: function (id) {

    return fetch(this.url + '/questions/' + id, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => {
      if (!res.ok) throw new Error();
      return res.json()
    });

  },
  getQuestions: function (filters = {}) {

    const searchParams = new URLSearchParams(filters);

    return fetch(this.url + '/questions/?' + searchParams.toString(), {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => {
      if (!res.ok) throw new Error();
      return res.json()
    });

  },
  deleteQuestion: function (id) {

    return fetch(this.url + '/questions/' + id, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => {
      if (!res.ok) throw new Error();
      return res;
    });

  },

  answerQuestion: function (id, content) {

    return fetch(this.url + `/questions/${id}/answers`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content})
    }).then(res => {
      if (!res.ok) throw new Error();
      return res.json()
    });

  },

  getUser: function (id) {
    return fetch(this.url + `/users/${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => {
      if (!res.ok) throw new Error();
      return res.json()
    });
  },


}
