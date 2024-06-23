describe("login page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should login with valid email and password", () => {
    cy.viewport(1366, 768);
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("Should not be able to login with empty email", () => {
    cy.visit("/");
    cy.login(null, "123"); 
    cy.get('#mail').then($el => cy.log($el));
    cy.get('#mail').then($el => $el[0].checkValidity()).should('be.false'); 
    cy.get('#mail').then(($el) => $el[0].validationMessage)
    .should('be.equal', 'Заполните это поле.');
  });

  it("Should not be able to login with empty password", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", null); 
    cy.get('#pass').then($el => cy.log($el));
    cy.get('#pass').then($el => $el[0].checkValidity()).should('be.false');
    cy.get('#pass').then(($el) => $el[0].validationMessage)
    .should('be.equal', 'Заполните это поле.');
  });

  it("should to add a book to favorites", () => {
    cy.addBook("Война и мир",
    "В романе рассказывается о союзах и войнах между Россией и Францией в начале XIX века, а также о жизни персонажей, увлекаемых историческими событиями.",
    "Толстой Лев Николаевич");
    cy.get('h4').click();
    cy.contains("Война и мир");
  });

it("Should to remove a book from favorites", () => {
    cy.addBook("Война и мир",
    "В романе рассказывается о союзах и войнах между Россией и Францией в начале XIX века, а также о жизни персонажей, увлекаемых историческими событиями.",
    "Толстой Лев Николаевич");
    cy.contains('Favorites').click(); 
    cy.contains('Delete from favorite').click(); 
    cy.contains("Please add some book to favorit on home page!").should("be.visible");
  });

it("should not add book without title on page", () => {
    cy.addBook(
      "",
      "В романе рассказывается о союзах и войнах между Россией и Францией в начале XIX века, а также о жизни персонажей, увлекаемых историческими событиями.",
    "Толстой Лев Николаевич");
    cy.get('#title').then($el => cy.log($el));
    cy.get('#title').then($el => $el[0].checkValidity()).should('be.false'); 
    cy.get('#title').then(($el) => $el[0].validationMessage)
    .should('be.equal', 'Заполните это поле.');
  });
});