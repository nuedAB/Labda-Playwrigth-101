Test Scenario 1: Simple Form Demo
Objective
Verify the functionality of the "Simple Form Demo" page, including message input and output validation.

Steps
Navigate to the LambdaTest Selenium Playground.
Click on the "Simple Form Demo" link.
Validate that the URL contains the string "simple-form-demo".
Create a variable (e.g., message) with a string value, such as:
arduino
Code kopieren
"Welcome to LambdaTest"  
Enter the variable’s value into the "Enter Message" text box.
Click the "Get Checked Value" button.
Validate that the same text message is displayed under the "Your Message:" section on the right-hand panel.

*********************************************************************************************************************************

Test Scenario 2: Drag & Drop Sliders
Objective
Test the slider functionality by setting a specific range value and validating the outcome.

Steps
Open the LambdaTest Selenium Playground.
Click on the "Drag & Drop Sliders" link.
Locate the slider labeled "Default value 15".
Drag the slider to adjust the value to 95.
Validate that the displayed range value matches 95.

*********************************************************************************************************************************

Test Scenario 3: Input Form Submit
Objective
Verify the input form validation and successful submission flow.

Steps
Navigate to the LambdaTest Selenium Playground.
Click on the "Input Form Submit" link.
Click the "Submit" button without filling in any form fields.
Assert the error message "Please fill in the fields" appears.
Fill in the required fields:
Name
Email
Other necessary fields.
From the Country drop-down, select "United States" using the text property.
Complete all remaining fields and click the "Submit" button.
Validate the success message:
arduino
Code kopieren
"Thanks for contacting us, we will get back to you shortly."  

*********************************************************************************************************************************


Execution Environment
Base URL: https://www.lambdatest.com/selenium-playground
Browser: Chrome/Firefox/Edge
Test Framework: e.g., TestNG, JUnit, PyTest

