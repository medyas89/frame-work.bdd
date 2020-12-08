package com.e2eTests.automation;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"src/speaces/features"},
		plugin=  {"pretty","html:target/cucumber-html-report"},
		snippets=SnippetType.CAMELCASE,
		tags= {("@authenticitation")}
		)
public class TestRunner {

}