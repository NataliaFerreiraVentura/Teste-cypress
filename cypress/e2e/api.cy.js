describe('Teste de API', () => {
    it('GET - Consultar informações de um usuário', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.name).to.eq('Leanne Graham')
        })
    })
  })
  