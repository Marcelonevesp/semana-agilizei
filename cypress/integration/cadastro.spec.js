/// <reference types="cypress" />

import Chance from 'chance';
let chance = new Chance();

context('Cadastro', () => {
    it('Cadsastro de usuário no site', () => {
        //rotas
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

        //type
        cy.get('input[placeholder="First Name"]').type(chance.first());
        cy.get('input[ng-model^=Last]').type(chance.last());
        cy.get('input[ng-model^=Email]').type(chance.email());
        cy.get('input[ng-model^=Phone]').type(chance.phone({formatted: false}));

        //check -> radio's e checkboxes
        cy.get('input[value=Male]').check();
        cy.get('input[type=checkbox]').check('Cricket');
        cy.get('input[type=checkbox]').check('Hockey');

        //Select -> select & select2 (combo)
        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Argentina');
        cy.get('select#country').select('Australia', {force: true});
        cy.get('select#yearbox').select('1989');
        cy.get('select[ng-model=monthbox]').select('May');
        cy.get('select#daybox').select('31');
        cy.get('input#firstpassword').type('Agilizei@2020');
        cy.get('input#secondpassword').type('Agilizei@2020');

        //upload de arquivo -> attach File
        cy.get('input#imagesrc').attachFile('Arquivo.jpg');

        //Clicks
        cy.get('#submitbtn').click();

        cy.wait('@postNewTable').then((resNewtable) => {
            expect(resNewtable.status).to.eq(200)
        })

        cy.wait('@postUserTable').then((resUsertable) => {
            expect(resUsertable.status).to.eq(200)
        })

        cy.wait('@getNewTable').then((resNewtable) => {
            expect(resNewtable.status).to.eq(200)
        })

        cy.url().should('contain', 'WebTable');
    });
});

