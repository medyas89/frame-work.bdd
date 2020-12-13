package com.e2eTests.automation.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CommonMethods {
	public CommonMethods() {
		driver=Setup.driver;
	}
		protected static final Logger logger = LoggerFactory.getLogger(AbstractPage.class);
		
	public static WebDriver  driver;
	public void scrollerBottom() {
		
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,200)","");
	}
	
	public void scrollerTop() {
		JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
		javascriptExecutor.executeScript("window.scrollTo("+0+","+0+")", "");
		}

		public void readFromConfigFile(String url) throws IOException {
		Properties prop = new Properties();
		FileInputStream fis = new FileInputStream("src/test/resources/configs/propertes");
		prop.load(fis);
		driver.get(prop.getProperty(url));
}}
