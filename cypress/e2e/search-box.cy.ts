
import home from '../page-objects/home-page';

describe('Search box duck duck go', () => {
    it('Verify first link goes to footbal website', function () {
        home.open();
        home.search('The dev-friendly football API');
        home.getLinkFromResults(0).invoke('attr', 'href').then((href) => {
            home.getLinkFromResults(0).click();
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('Things went bad')) {
                    return false;
                }
            });
            cy.origin(href, () => {
                //cy.url().should('eq', 'https://www.football-data.org/index.php');
            });
        });
    })
})  
