
class Login {
    url(){
      cy.visit('/')
    }

    go() {
      cy.get('#hello-user div[class$=step-2] h5 ').should('have.text', 'Preencha o(s) campo(s) para entrar.')
    }

    signin(user){
        cy.get('#user_login_application').select('Bionexo').should('have.value','bio',{force: true})
        cy.get('#user_email').type(user.email,{force: true})
        cy.get('#nextStep').click()

        cy.get('#user_password').type(user.senha,{force:true})
    }

    signinvalid(invaliduser){
        cy.get('#user_login_application').select('Bionexo').should('have.value','bio')
        cy.get('#user_email').type(invaliduser.email,{force: true})
        cy.get('#nextStep').click()

        cy.get('#user_password').type(invaliduser.senha,{force:true})

    }

    submit(){
        cy.get('#sign_in').click()
    }

    expectedmsg(){
        cy.get('div[class*=form-select] h3').should('have.text','Selecione uma empresa')
    }

    msginvalid(){
        cy.get('div #invalid').should('have.text','O e-mail e a senha digitados não conferem.')
    }

}

export default new Login;