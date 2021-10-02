describe("blog app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("login form is shown", function () {
    cy.contains("login to application").click();
    cy.contains("username");
    cy.contains("password");
  });
});

describe("login", function () {
  it("successfull login", function () {
    cy.contains("login to application").click();
    cy.get("input:first").type("panda_dragon");
    cy.get("input:last").type("masfik123");
    cy.get("#login-btn").click();
    cy.contains("logged in as (panda_dragon)");
  });

  it("invalid login", function () {
    cy.contains("logout").click();
    cy.contains("login to application").click();
    cy.get("input:first").type("panda_drag");
    cy.get("input:last").type("masfik");
    cy.get("#login-btn").click();
    cy.contains("wrong credentials");
  });
});

describe("blogs", function () {
  beforeEach(function () {
    cy.login({ username: "panda_dragon", password: "masfik123" });
  });

  it("add a blog", function () {
    cy.contains("post new blog").click();
    cy.get("#author").type("Masfik Alam");
    cy.get("#title").type("Hello Sun");
    cy.get("#url").type("https://youtube.com");
    cy.contains("post").click();
    cy.contains("Hello Sun (Masfik Alam) ");
  });

  it("like a blog", function () {
    cy.contains("Hello Sun").parent().contains("view").click();
    cy.contains("Hello Sun").parent().contains("like").click();
  });

  it("delete a blog", function () {
    cy.contains("Hello Sun").parent().contains("view").click();
    cy.contains("Hello Sun").parent().contains("remove").click();
  });

  it("sort all blogs", function () {
    cy.request("GET", "https://bloglist-fso-2021.herokuapp.com/api/blogs").then(
      (res) => {
        const arr = [...res.body];
        arr.sort((a, b) => a.likes - b.likes);
        const mostLike = arr[arr.length - 1].likes;
        const lessLike = arr[0].likes;

        cy.get(".blog:first").contains("view").click();
        cy.get(".blog:first").contains(mostLike);
        cy.get(".blog:last").contains("view").click();
        cy.get(".blog:last").contains(lessLike);
      }
    );
  });
});
