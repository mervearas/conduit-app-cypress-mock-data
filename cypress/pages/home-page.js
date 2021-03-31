export class Homepage {
    getUserName() {
        return cy.get(':nth-child(4) > .nav-link')
    }

    getTagList() {
        return cy.get('div.tag-list')
    }

    getGlobalFeed() {
        return cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link')
    }

    getArticle() {
        return cy.get(':nth-child(1) > .article-preview')
    }
}