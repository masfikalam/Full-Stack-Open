Cypress.Commands.add("login", ({ username, password }) => {
  cy.request(
    "POST",
    "https://bloglist-fso-2021.herokuapp.com/api/users/login",
    { username, password }
  ).then((res) => {
    localStorage.setItem("user", JSON.stringify(res.body));
    cy.visit("http://localhost:3000");
  });
});
