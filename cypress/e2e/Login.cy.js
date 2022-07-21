import login from '../pages/Login'
//import LogiFactory from '../factories/LoginFactory'

//* $ => termina com
//! ^ => começa com
//? * => contem

describe('Login', function(){

   before(() => {

    login.url()

    cy.fixture('login').then((l)=>{
      this.login = l

    })
  })

  it.only('Pagina inicial deve estar online',() => {
      login.go()
  })

  it('Usuário Logando corretamente',() => {

    login.signin(this.login.user)
    login.submit()

    login.expectedmsg()

  })

  it('Usuário invalido logando',() => {

    login.signinvalid(this.login.invaliduser)
    login.submit()

    login.msginvalid()

  })
})