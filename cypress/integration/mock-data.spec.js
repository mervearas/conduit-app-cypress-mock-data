/// <reference types="cypress" />

import { Homepage } from "../pages/home-page";

const homepage = new Homepage();

describe("test the conduit app using mock data", () => {
    beforeEach(() => {
        cy.login('merve123@gmail.com', 'merve123')   
    })
    
    it("verify the tags based on the api", () => {
        cy.intercept('GET', '**/tags', { fixture:'tag.json' } )
        cy.contains('Popular Tags') 
        homepage.getUserName()
        .should('have.text', 'merve123')
        homepage.getTagList()
        .should('contain','cypress')
        .and('contain', 'automation‌‌')
        .and('contain', 'testing')
    })

    it("verify the mock data", () => {
        cy.intercept('GET', '**/articles*', { fixture:'article.json' } )
        homepage.getGlobalFeed()
        .click()
        homepage.getArticle()
        .should('contain',"merveeee")
    })
})

