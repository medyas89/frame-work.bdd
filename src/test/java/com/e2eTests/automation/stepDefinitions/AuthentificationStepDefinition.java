package com.e2eTests.automation.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.e2eTests.automation.pageObjects.AuthentificationPage;
import com.e2eTests.automation.util.CommonMethods;
import com.e2eTests.automation.util.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationStepDefinition extends CommonMethods {
	
	public WebDriver driver;
    private AuthentificationPage authenticitationPage=new AuthentificationPage();
    private CommonMethods commonMethods = new CommonMethods();
	public AuthentificationStepDefinition() {
		driver=Setup.driver;
	}
	
	@Given("^J ouvre l application Orange$")
	public void jOuvreLApplicationOrange() throws Throwable {
		logger.info("J ouvre l application Orange");
	    commonMethods.readFromConfigFile("url");
	}

	@When("^Je saisie la login$")
	public void jeSaisieLaLogin() throws Throwable {
		logger.info("Je saisie la login");
		PageFactory.initElements(driver, AuthentificationPage.class);
		authenticitationPage.fillUSERName();
	}

	@When("^Je saisie le mot de passe$")
	public void jeSaisieLeMotDePasse() throws Throwable {
		authenticitationPage.fillPass();
		logger.info("Je saisie le mot de passe");
	}

	@When("^Je clique sur le bouton$")
	public void jeCliqueSurLeBouton() throws Throwable {
		authenticitationPage.btnLoginButton();
		logger.info("Je clique sur le bouton");
	}

	@Then("^Je verifie le compte admin$")
	public void jeVerifieLeCompteAdmin() throws Throwable {
		String text = AuthentificationPage.messageTxt.getText();
		Assert.assertTrue(text.contains("Welcome"));
		logger.info("Je verifie le compte admin");
	}
}
