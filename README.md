
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ![banner](./assets/rm-banner.jpg)
  # Shop-Back: an e-Commerce backend server
  ## UA Web Coding Bootcamp Challenge - Week 13
  
  ## Description  
  This project implements the back-end of an e-commerce retail site. It interacts with a MySQL price and inventory database through the node.js Sequelize ORM (Object Relation Map) using an express.js API. There is no front-end. [Insomnia](https://insomnia.rest/) or another similar desktop application is used for demonstrating and testing.  

  ### Link to YouTube Demonstration
  [ShopBack Youtube demo](TBD) 
  
  ## Table of Contents  
  * [Installation](#Installation)  
  * [Usage](#Usage)  
  * [Data Structure](#Data-Structure)  
  * [Demo](#Demo) 
  * [Questions](#Questions)    
  * [License](#License)
  ## Installation  
  This project requires node.js. To install  navigate to the directory where you will be using this software, initialize by typing "npm init" into the terminal in the root directory of your project, and installing the following packages:  
    * [express.js](https://expressjs.com/)  
    * [MySQL2] (https://www.npmjs.com/package/mysql2)  
    * [dotenv](https://www.npmjs.com/package/dotenv)
    * [sequelize](https://www.npmjs.com/package/sequelize)

    OPEN THE .env FILE AND SET ENVIRONMENT VARIABLES:  
    * DB_NAME='ecommerce_db'  
    * DB_USER= <your MySQL username>  
    * DB_PW= <your MySQL password> 

    INITIALIZE THE DATABASE
      Start MySql  ("mysql -u "username" -p ) with your username and password
      Create the database: "source ./db/schema.sql"
      exit SQL

    SEED THE DATABASE
      On the command line, type "npm run seed"
    
  ## Usage  
  TO START THE SERVER  - type "npm start" on the terminal command line. 
  TO INTERFACE WITH THE SERVER - Start a desktop app such as [Insomnia](https://insomnia.rest/) and use the API methods it provides with localhost:3001.

  ## Data-Structure  
  ---

  ## Demo 
  
 ---
  
  ## Questions
  For more information, contact  
  * [vloebel on GitHub](https://github.com/vloebel)  
  * [VickyLoebel@gmail.com](mailto:VickyLoebel@gmail.com)
  ## License
  This software is distrubted without warranty under the MIT license agreement. To view terms and conditions, visit the [MIT License website](https://opensource.org/licenses/MIT).
      
