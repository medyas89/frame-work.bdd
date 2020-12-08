package com.e2eTests.automation.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.e2eTests.automation.Util.Setup;
import com.e2eTests.automation.pageObjects.AuthenticitationPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthenticitationStepDefinition {
	
	public WebDriver driver;
    private AuthenticitationPage authenticitationPage=new AuthenticitationPage();
    
	public AuthenticitationStepDefinition() {
		driver=Setup.driver;
	}
	
	@Given("^J ouvre l application Orange$")
	public void jOuvreLApplicationOrange() throws Throwable {
		String url = "https://opensource-demo.orangehrmlive.com/";
		driver.get(url);
	}

	@When("^Je saisie la login$")
	public void jeSaisieLaLogin() throws Throwable {
		PageFactory.initElements(driver, AuthenticitationPage.class);
		authenticitationPage.fillUSERName();
	}

	@When("^Je saisie le mot de passe$")
	public void jeSaisieLeMotDePasse() throws Throwable {
		authenticitationPage.fillPass();
	}

	@When("^Je clique sur le bouton$")
	public void jeCliqueSurLeBouton() throws Throwable {
		authenticitationPage.btnLoginButton();
	}

	@Then("^Je verifie le compte admin$")
	public void jeVerifieLeCompteAdmin() throws Throwable {
		System.out.println("Succesfully login");
	}
}
