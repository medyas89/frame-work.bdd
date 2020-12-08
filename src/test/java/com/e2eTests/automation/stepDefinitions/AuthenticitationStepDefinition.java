package com.e2eTests.automation.stepDefinitions;

import org.openqa.selenium.WebDriver;

import com.e2eTests.automation.Util.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthenticitationStepDefinition {
	
	public WebDriver driver;
	public AuthenticitationStepDefinition() {
		driver=Setup.driver;
		
	}
	
	@Given("^J ouvre l application Orange$")
	public void jOuvreLApplicationOrange() throws Throwable {
		String URL="https://opensource-demo.orangehrmlive.com/";
		driver.get(URL);
		Thread.sleep(2000);
	}

	@When("^Je saisie la login$")
	public void jeSaisieLaLogin() throws Throwable {
	   
	}

	@When("^Je saisie le mot de passe$")
	public void jeSaisieLeMotDePasse() throws Throwable {
	 
	}

	@When("^Je clique sur le bouton$")
	public void jeCliqueSurLeBouton() throws Throwable {
	 
	}

	@Then("^Je verifie le compte admin$")
	public void jeVerifieLeCompteAdmin() throws Throwable {

	}
}
