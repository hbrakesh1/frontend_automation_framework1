class login {
    signInDropDownButton() {
        return cy.get('#nav-link-accountList > .nav-line-2 > .nav-icon');
    }

    emailTextBox() {
        return cy.get('#ap_email');
    }

    continueButton() {
        return cy.get('.a-button-inner > #continue');
    }

    passwordTextBox() {
        return cy.get('#ap_password');
    }

    signInButton() {
        return cy.get('#signInSubmit');
    }
}

export default login