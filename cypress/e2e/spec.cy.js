import Login from "./pageObjects/login";
import email from "../fixtures/example.json"


const login = new Login();

describe('01 login scenario', () => {
    it('01 given an user with valid credentials, he should ' +
        'be able to log into https://www.amazon.in successfully', () => {
        cy.visit({url: Cypress.env("BASE_URL"), failOnStatusCode: false});
        login.signInDropDownButton().click();
        login.emailTextBox().type(Cypress.env("EMAIL"));
        login.continueButton().click();
        login.passwordTextBox().type(Cypress.env("PASSWORD"));
        login.signInButton().click();
        cy.signOut();
        // console.error("E");
        // cy.pause();
        // cy.task("sleep", 5);
        cy.log(email.body);
        // cy.writeFile("out.txt", "Hi");
        cy.screenshot({capture: "runner"});
        cy.contains("Sign");
        cy.location("pathname").should("not.include", "/thanks");
    })
})