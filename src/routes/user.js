module.exports = (app) => {
  app.get('/registration', showRegistrationPage)
  app.post('/registration', registerUser)
}

function showRegistrationPage (request, response) {
  response.render('registration');
}

function registerUser (request, response) {
  response.json('ok')
}
