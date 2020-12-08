package com.e2eTests.automation.pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AuthenticitationPage {

	final static String USER_NAME_ID = "txtUsername";
	final static String PASS_ID = "txtPassword";
	final static String BTN_LOG = "btnLogin";

	/* @FindBy */
	@FindBy(how = How.ID, using = USER_NAME_ID)
	public static WebElement userName;

	/* @FindBy */
	@FindBy(how = How.ID, using = PASS_ID)
	public static WebElement passWord;

	/* @FindBy */
	@FindBy(how = How.ID, using = BTN_LOG)
	public static WebElement btnLogin;

	/* Method */
	public void fillUSERName() {
		userName.sendKeys("Admin");
	}

	public void fillPass() {
		passWord.sendKeys("admin123");
	}

	public void btnLoginButton() {
		btnLogin.click();
	}

}
