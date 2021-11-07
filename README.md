
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="/images/unnamed.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Node Registration system</h3>




<!-- ABOUT THE PROJECT -->
## About The Project
### I Coded The Backend From Scratch (Front-End) i Used templeates
[![Product Name Screen Shot][product-screenshot]](https://example.com)
 ### in auths folder (login.js-register.js-reset.js-monqu.js-emailcheck.js-mailer.js)
  * #### login.js login functions
  * #### register.js register functions
  * #### reset password functions
  * ####  monqu mongodb queries (insert-find-update)
  * #### emailcheck function check if email exists i used this function many times
  * #### mailer.js  send emails using  nodemailer
  
* ### in certificates folder self-signed SSL certificate
* ### in views html pages (login.html-register.html-main.html-forget.html-code.html-reset.html) view/erorr_pages (404.html-500.html)
* ### in routes/index.js get functions and check sesstions 
* ### the https server in server/www
# For More Info Open The Code and Read The Comments In The Code
### Built With

technologies and frameworks is used
  
* [Nodejs](https://nodejs.org/en/)
* [Mongodb](https://www.mongodb.com/)
* [monk](https://www.npmjs.com/package/monk)
* [Nodemailer](https://www.npmjs.com/package/nodemailer)
* [md5](https://www.npmjs.com/package/md5)
* [Express.js](https://expressjs.com/)
* [javascript](https://www.javascript.com/)
* [html](https://html.com/)
* [ajax javascript](https://www.javascriptstuff.com/ajax-libraries/)
* [Bootstrap](https://getbootstrap.com)



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

* install Mongodb
  ```sh
   https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
  ```
* install Node.js
  ```sh
   https://nodejs.org/en/download/current/
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/ninjaroot/Node-Registration-system.git
   ```
   
2. go to project path
   ```sh
   cd Node-Registration-system
   ```
  
3. npm install packages
   ```sh
   npm i
   ```
  
4. go to certificates path
   ```sh
   cd certificates
   ```
  
5. generate a self-signed SSL certificate using OpenSSL
   ```sh
   sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
   ```
  
6. edit .env
   ```sh
   nano .env or open the .env by any editior 
   ```
  
7. change mongodb host
   ```sh
   MONGODB_HOST='your mongodb host'
   ```
  
8. change email to put your email
   ```sh
   EMAIL_USER ='your email adress'
   ```
  
9. change password put your email password
   ```sh
   EMAIL_PASSWORD ='your email password'
   ```
10. crete database in mongo db name 'registration'
   ```sh
   and tow Collections ('users'-'reset')
   ```
   
  
11. run the server using npm 
   ```sh
   npm test
   ```
  
12. if you want run the server using nodemom first 
   ```sh
   npm i nodemon
   ```
* then run
  ```sh
  npm rebuild
  ```
  
13. if you got that erorr after create self signed cert
   ```sh
   node:internal/fs/utils:344
   throw err;
   Error: ENOENT: no such file or directory, open '../certificates/server.key'
   ```
* just run that 
  ```sh
  nodemon server/www
  ```
   
  
  
 

<!-- ROADMAP -->
## Roadmap

- [x] Login
- [x] Register
- [x] Forget Password
- [x] Reset Password


<!-- CONTACT -->
## Contact

Abdalla yahya - abdallayahya158@gmail.com

Project Link: (https://github.com/your_username/repo_name)

linkedin : (https://www.linkedin.com/in/abdalla-yahya-560a861b7/)




<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]:https://www.linkedin.com/in/abdalla-yahya-560a861b7/
[product-screenshot]: /images/Screenshot%20from%202021-11-07%2011-49-55.png
