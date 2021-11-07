
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="/unnamed.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Node Registration system</h3>




<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#top">back to top</a>)</p>



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
* 

<p align="right">(<a href="#top">back to top</a>)</p>



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

  10. run the server using npm 
   ```sh
   npm test
   ```

  
11. if you want run the server using nodemom first 
   ```sh
   npm i nodemon
   ```
* then run
  ```sh
  nodemon server/www
  ```

<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [] Add Additional Templates w/ Examples
- [] Add "components" document to easily copy & paste sections of the readme
- [] Multi-language Support
    - [] Chinese
    - [] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).





<!-- CONTACT -->
## Contact

Abdalla yahya - abdallayahya158@gmail.com

Project Link: (https://github.com/your_username/repo_name)

linkedin : (https://www.linkedin.com/in/abdalla-yahya-560a861b7/)




<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]:https://www.linkedin.com/in/abdalla-yahya-560a861b7/
[product-screenshot]: /Screenshot%20from%202021-11-07%2011-49-55.png
