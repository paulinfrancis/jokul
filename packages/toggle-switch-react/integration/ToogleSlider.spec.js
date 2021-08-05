/// <reference types="cypress" />

beforeEach(() => {
    cy.testComponent("toggleswitch");
});

describe("ToggleSwitch", () => {
    it("renders correctly", () => {
        cy.getComponent().eq(0).toMatchImageSnapshot();
        cy.get(".jkl-toggle-switch").focus();
        cy.getComponent().eq(0).toMatchImageSnapshot();
        cy.get(".jkl-toggle-switch").click().waitForAnimation();
        cy.getComponent().eq(0).toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().eq(0).toMatchImageSnapshot();
            cy.get(".jkl-toggle-switch").focus();
            cy.getComponent().eq(0).toMatchImageSnapshot();
            cy.get(".jkl-toggle-switch").click().waitForAnimation();
            cy.getComponent().eq(0).toMatchImageSnapshot();
        });
    });
});

describe("ToggleSlider", () => {
    it("renders correctly", () => {
        cy.getComponent().eq(1).toMatchImageSnapshot();
        cy.getByTestid("jkl-toggle-slider").focus();
        cy.getComponent().eq(1).toMatchImageSnapshot();
        cy.getByTestid("jkl-toggle-slider").click().waitForAnimation();
        cy.getComponent().eq(1).toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().eq(1).toMatchImageSnapshot();
            cy.getByTestid("jkl-toggle-slider").focus();
            cy.getComponent().eq(1).toMatchImageSnapshot();
            cy.getByTestid("jkl-toggle-slider").click().waitForAnimation();
            cy.getComponent().eq(1).toMatchImageSnapshot();
        });
    });
});
