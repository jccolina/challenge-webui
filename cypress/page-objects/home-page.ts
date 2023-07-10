class HomePage {
  constructor() {
  }

  public open() {
    cy.visit('/');
  }

  private get searchBoxInput() {
    return cy.get('#searchbox_input');
  }

  private get searchButton() {
    return cy.get('[aria-label="Search"]');
  }

  private get resultLinks() {
    return cy.get('[data-testid="result-title-a"]');
  }

  public search(searchCriteria: string) {
    this.searchBoxInput.type(searchCriteria);
    this.searchButton.click();
  }

  public getLinkFromResults(numberOfLink: number) {
    return this.resultLinks.eq(numberOfLink);
  }
}

export default new HomePage();