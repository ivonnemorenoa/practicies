describe('My First Test', () => {

  it('Visits the initial project page', () => {
    
    cy.visit('/');
    cy.contains('0');
    cy.get('[value="contar"]').click();
    cy.contains('1');
    //que tenga 0
    // que de eventoclick
    //que cambie el contador a 1

  })
  it('Cambiar color del boton',()=>{
    cy.visit('/');
    // cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)')
    
    
    
    // validar contador inicial sea color rojo
    cy.get('div').should('have.css','color','rgb(255, 0, 0)');
    
     
    
    // ejecutar clic para cambio de color
    cy.get('[value="colorear"]').click();
    
    
    // validar estado sea color verde
    cy.get('div').should('have.css','color','rgb(0, 0, 255)');
  }) 
}) 
