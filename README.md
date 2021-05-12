# Steady Platform Test Automation using Cypress.io

This is the code repository for End to End Web testing using Cypress Automation Tool.

##  Step 1: Install node.js

Cypress is basically a node program and hence we need to download and install node.js. There are two ways to do it.

a. By installing node.js and getting cypress installed through node.js

b. Direct download from the Cypress official website.

Here we are installing cypress installed through node.js

In order to check if it is already present.

> node --version or node -v

If not, install node.js, and you can observe both node.js and npm installed.

## Step 2: Installing package.js

Use any editor choice, here I use Visual Studio Code.

To create a package.json file(dependancy management file),within the project, use command:

> npm init -y

## Step 3: Installing Cypress

In the terminal give the command:

> npm install cypress

In order to install a specific version give:

> npm install cypress@<version_no>


To check the version of cypress

> npx cypress -v

To update the version use,

npm install -g npm

## Step 4: Open the Cypress folder

Open the folder on your editor, and make test cases under Integration --> Examples# e2e_tests
