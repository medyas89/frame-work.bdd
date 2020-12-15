package com.e2eTests.automation;



import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//class configuration
@CucumberOptions(
		//glue={"stepDefinitions"},
		features= {"src/specs/features"},
		plugin=  {"pretty","html:target/cucumber-html-report","json:target/cucumber.json","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/OrangeHRM-report.html"},
		snippets=SnippetType.CAMELCASE,monochrome = true,
		tags= {("@accueil")}
		)
public class TestRunner {
        @AfterClass
 public static void writeExtentReport() {
      Reporter.loadXMLConfig(new File("src/test/resources/configs/extent-config.xml"));


        }
}
