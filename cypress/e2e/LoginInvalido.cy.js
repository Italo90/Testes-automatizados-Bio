import login from '../pages/Login'

describe('Login', function(){

    before(() => {

     login.url()

     cy.fixture('login').then((l)=>{
       this.login = l

     })
   })

   it('Usuário invalido logando',() => {

    login.signinvalid(this.login.invaliduser)
    login.submit()

    login.msginvalid()

  })
})