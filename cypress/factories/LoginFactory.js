var faker = require ('faker')

export default {

    login: function(){

        var data = {
        email: faker.internet.email(),
        senha: 'Bio@1234'
      }

      return data
    }
}