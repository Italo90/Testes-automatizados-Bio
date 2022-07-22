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

  it('Usuário Logando corretamente',() => {

    login.signin(this.login.user)
    login.submit()

    login.expectedmsg()

  })
})