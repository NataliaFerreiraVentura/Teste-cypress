
describe('Transações', () => {
    // hooks --> executar o codigo antes ou depois / de cada ou de todos os testes
    // before --> Executar o codigo uma vez antes de todos os testes
    // after --> Executar o codigo uma vez depois de todos os testes
    // beforeEach --> Executar o codigo  Antes de cada teste
    // afterEach --> Executar o codigo depois de cada teste

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/")
      }) //Hook para executar o codigo antes de cada teste
    it('Cadastrar uma entrada', () => {
    
      criartransacao("NATHIZINHA", 10000)
        
        cy.get("tbody tr  td.description").should("have.text","NATHIZINHA")    

    });

it('Cadastrar uma saida', () => {
    
    criartransacao("Freela", -45)
    cy.get("tbody tr  td.description").should("have.text","Freela")    

});
it('Excluir transação',() =>{
  criartransacao("Freela", 200)

 // cy.contains(".description","Freela")
  // .parent()
 //  .find('img')
  // .click()
  cy.contains(".description", "Freela")
  .siblings()
.children('img')
})
});

function criartransacao(descricao,valor){
    cy.contains("+ Nova Transação").click()
        cy.get('#description').type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type('2023-09-25') //yyyy-mm-dd

        cy.contains('button','Salvar').click()   

}