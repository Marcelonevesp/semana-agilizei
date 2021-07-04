//Steps comuns a mais de uma feature

Given(/^que acesso o site$/, () => {
    cy.server()
    cy.route({
    method: 'POST',
    url: '**/api/1/databases/userdetails/collections/newtable?**',
    status: 200,
    response: {}
    }).as('postNewTable');

    cy.route({
        method: 'POST', 
        url: '**/api/1/databases/userdetails/collections/usertable?**', 
        status: 200, 
        response: {}
    }).as('postUserTable');

    cy.route({
    method: 'GET',
    url: '**/api/1/databases/userdetails/collections/newtable?**',
    status: 200,
    response: {}
    }).as('getNewTable');

    cy.visit('Register.html');
});