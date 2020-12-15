package com.e2eTests.automation.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.e2eTests.automation.pageObjects.AccueilPage;
import com.e2eTests.automation.util.Setup;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AccueilStepDefinition {

	 public WebDriver driver;
	private AccueilPage accueilPage = new AccueilPage();

	public AccueilStepDefinition() {
		driver = Setup.driver;
		PageFactory.initElements(driver, AccueilPage.class);
	}

	@When("^je clique sur le module Recruitment$")
	public void jeCliqueSurLeModuleRecruitment() throws Throwable {
		accueilPage.goToRecruitment();
	}

	@Then("^je verifie la page Recruitment \"([^\"]*)\"$")
	public void jeVerifieLaPageRecruitment(String sub_menu_rec) throws Throwable {
		String pageRec = AccueilPage.pageRec.getText();
		Assert.assertTrue(pageRec.contains(sub_menu_rec));
	}

	@When("^je clique sur le module PIM$")
	public void jeCliqueSurLeModulePIM() throws Throwable {
		accueilPage.goToPim();
	}

	@Then("^je verifie la page PIM \"([^\"]*)\"$")
	public void jeVerifieLaPagePIM(String sub_menu_PIM) throws Throwable {
		String pagePim = AccueilPage.pagePIM.getText();
		Assert.assertTrue(pagePim.contains(sub_menu_PIM));
	}

}