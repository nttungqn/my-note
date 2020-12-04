![](https://www.guru99.com/images/testautomationprocess.png)# Automation Testing : What is Automated Testing?

---

## What is Automation Testing?

**Automation Testing** là kiểm thử phần mềm sử dụng special automated testing software tools để thực hiện các bộ test case

## Why Test Automation?

**Test Automation** is the best way to increase the effectiveness, test coverage, and execution speed in software testing. Automated software testing is important due to the following reasons:

- Manual Testing of all workflows, all fields, all negative scenarios is time and money consuming
- It is difficult to test for multilingual sites manually
- Test Automation does not require Human intervention. You can run automated test unattended (overnight)
- Test Automation increases the speed of test execution
- Automation helps increase Test Coverage
- Manual Testing can become boring and hence error-prone.

## Which Test Cases to Automate?

Test cases to be automated can be selected using the following criterion to increase the automation ROI

- High Risk - Business Critical test cases
- Test cases that are repeatedly executed
- Test Cases that are very tedious or difficult to perform manually
- Test Cases which are time-consuming

The following category of test cases are not suitable for automation:

- Test Cases that are newly designed and not executed manually at least once
- Test Cases for which the requirements are frequently changing
- Test cases which are executed on an ad-hoc basis.

## Automated Testing Process:

Following steps are followed in an Automation Process

**Step 1)** Test Tool Selection

**Step 2)** Define scope of Automation

**Step 3)** Planning, Design and Development

**Step 4)** Test Execution

**Step 5)** Maintenance

<img src="file:///C:/Users/nttun/AppData/Roaming/marktext/images/2020-10-03-11-38-30-image.png" title="" alt="" data-align="center">

## Test tool selection

Test Tool selection largely depends on the technology the Application Under Test is built on. For instance[, QTP](https://www.guru99.com/quick-test-professional-qtp-tutorial.html) does not support Informatica. So QTP cannot be used for testing [Informatica](https://www.guru99.com/informatica-tutorials.html) applications. **It's a good idea to conduct a Proof of Concept of Tool on AUT.**

## Define the scope of Automation

The scope of automation is the area of your Application Under Test which will be automated. Following points help determine scope:

- The features that are important for the business
- Scenarios which have **a large amount of data**
- **Common functionalities** across applications
- Technical feasibility
- The extent to which business components are reused
- **The complexity** of test cases
- Ability to use the same test cases for cross-browser testing

## Planning, Design, and Development

During this phase, you create an Automation strategy & plan, which contains the following details-

- Automation tools selected
- Framework design and its features
- In-Scope and Out-of-scope items of automation
- Automation testbed preparation
- Schedule and Timeline of scripting and execution
- Deliverables of Automation Testing

## Test Execution

Automation Scripts are executed during this phase. The scripts need input test data before there are set to run. Once executed they provide detailed test reports.

Execution can be performed using the automation tool directly or through the Test Management tool which will invoke the automation tool.

Example: Quality center is the Test Management tool which in turn it will invoke QTP for execution of automation scripts. Scripts can be executed in a single machine or a group of machines. The execution can be done during the night, to save time.

## 

Test Automation Maintenance Approach

**Test Automation Maintenance Approach** is an automation testing phase carried out to test whether the new functionalities added to the software are working fine or not. Maintenance in automation testing is executed when new automation scripts are added and need to be reviewed and maintained in order to improve the effectiveness of automation scripts with each successive release cycle.

## Framework for Automation

A framework is set of automation guidelines which help in

- Maintaining consistency of Testing
- Improves test structuring
- Minimum usage of code
- Less Maintenance of code
- Improve re-usability
- Non Technical testers can be involved in code
- The training period of using the tool can be reduced
- Involves Data wherever appropriate

There are four types of frameworks used in automation software testing:

<img src="file:///C:/Users/nttun/AppData/Roaming/marktext/images/2020-10-03-11-40-24-image.png" title="" alt="" data-align="center">

1. Data Driven Automation Framework
2. Keyword Driven Automation Framework
3. Modular Automation Framework
4. Hybrid Automation Framework

## Automation Tool Best Practices

To get maximum ROI of automation, observe the following

- The scope of Automation needs to be determined in detail before the start of the project. This sets expectations from Automation right.
- Select the right automation tool: A tool must not be selected based on its popularity, but it's fit to the automation requirements.
- Choose an appropriate framework
- Scripting Standards- Standards have to be followed while writing the scripts for Automation. Some of them are-
  - Create uniform scripts, comments, and indentation of the code
  - Adequate Exception handling - How error is handled on system failure or unexpected behavior of the application.
  - User-defined messages should be coded or standardized for Error Logging for testers to understand.
- Measure metrics- Success of automation cannot be determined by comparing the manual effort with the automation effort but by also capturing the following metrics.
  - Percent of defects found
  - The time required for automation testing for each and every release cycle
  - Minimal Time is taken for release
  - Customer Satisfaction Index
  - Productivity improvement

The above guidelines if observed can greatly help in making your automation successful.

## Benefits of Automation Testing

<img src="file:///C:/Users/nttun/AppData/Roaming/marktext/images/2020-10-03-11-42-26-image.png" title="" alt="" data-align="center">

Benefits of Automation Testing

Following are benefits of automated testing:

- 70% faster than the manual testing
- Wider test coverage of application features
- Reliable in results
- Ensure Consistency
- Saves Time and Cost
- Improves accuracy
- Human Intervention is not required while execution
- Increases Efficiency
- Better speed in executing tests
- Re-usable test scripts
- Test Frequently and thoroughly
- More cycle of execution can be achieved through automation
- Early time to market

## Types of Automated Testing

- Smoke Testing
- [Unit Testing](https://www.guru99.com/unit-testing-guide.html)
- [Integration Testing](https://www.guru99.com/integration-testing.html)
- Functional Testing
- Keyword Testing
- [Regression Testing](https://www.guru99.com/regression-testing.html)
- Data Driven Testing
- Black Box Testing

## How to Choose an Automation Tool?

Selecting the right tool can be a tricky task. Following criterion will help you select the best tool for your requirement-

- Environment Support
- Ease of use
- Testing of Database
- Object identification
- Image Testing
- Error Recovery Testing
- Object Mapping
- Scripting Language Used
- Support for various types of test - including functional, test management, mobile, etc...
- Support for multiple testing frameworks
- Easy to debug the automation software scripts
- Ability to recognize objects in any environment
- Extensive test reports and results
- Minimize training cost of selected tools

Tool selection is one of biggest challenges to be tackled before going for automation. First, Identify the requirements, explore various tools and its capabilities, set the expectation from the tool and go for a Proof Of Concept.

## Automation Testing Tools

### 1. [Ranorex Studio](https://bit.ly/2OA7In3)

### 2. [Testim](https://bit.ly/3iBePpw)

### 3. [21](https://bit.ly/38C80Qy)

### 4. Selenium

### 5. QTP (MicroFocus UFT)

### 6. Rational Functional Tester
