
![res (2)](https://i.imgyukle.com/img/2023/05/10/rEIlX1.png)


# Tomi E-Commerce




This project is an e-commerce application developed using React.js for the purpose of demonstrating shopping cart functionality. The application interacts with provided API endpoints to manipulate items in the shopping cart, apply predefined coupons, and calculate the final price.


# UI Recording

https://www.youtube.com/watch?v=3Y1pMDOjJOo



## Authors


- [Mustafa Bulut](https://github.com/mustafablutt)
- [Ceyda Elmas](https://github.com/ceydaelmas)



## Tech Stack

**Client:** React, Context API, React Decoder, @mui/material, Fetch

**Server:** .NET Core

**Database:** MongoDB

**Tools:** VSCode, Ngrok


## Features

The application boasts numerous features to provide a comprehensive e-commerce solution:

***Authrozation:*** User has been authorized for Basket Operations by keeping the Authrozation Token pulled from the backend and keeping this token in local storage with react jwt.

***Product Catalog:*** Users can browse through a list of all items in the product catalog, and access the details of specific products.

***Shopping Cart Management:*** Users have the ability to add items to the shopping cart directly from the product list and remove items from the cart as needed.

***Discounts:*** Coupons can be applied to the shopping cart, allowing users to view both the original and discounted price of their chosen items.

    
## Responsiveness and Error Handling

The application is built with a mobile-first approach, ensuring responsiveness across different screen sizes. Moreover, it integrates robust exception handling to offer a seamless user experience.



![Alt text](https://i.imgyukle.com/img/2023/05/10/rEYxht.png)


## Development Process and Principles

**.** The project was forked from the existing repository at this link: https://github.com/mustafablutt/shopping-cart and then cloned to a local development environment.

**.** Functional components and hooks were utilized in the application following the React.js convention.


**.** The application was developed adhering to SOLID principles and Object-Oriented Programming (OOP) concepts, ensuring clean and maintainable code.

**.** The application was published on Vercel for easy access and review.




## Feedback

If you have any feedback, please reach out to us at bluttmustafa@gmail.com  and elmsceyda@gmail.com or please feel free to reach out or submit a pull request.


## Lessons Learned


Throughout the development of this project, I deepened my understanding and skills in several key areas. I gained significant experience in developing more complex projects with React and .NET Core, which involved constructing robust, scalable applications with numerous features and components. This project also provided me with the opportunity to learn and apply state management strategies in React, particularly using the Context API. This not only enhanced the efficiency of data flow in the application but also made it easier to manage and track state changes. In addition to React and .NET Core, I also had the chance to work with various libraries and tools, which further diversified my skillset and prepared me for future development tasks.


## Getting Started

1. Clone the project

```bash
  git clone https://github.com/mustafablutt/shopping-cart
```

2. Go to the project directory

```bash
   cd shopping-cart
```

3. Install dependencies

```bash
  npm install
```

```bash
  npm i react-scripts
```

4. Start the application on web 
(You can run it on the web. )


```bash
  npm start
```


## Docker Integration


This project also takes advantage of Docker, a platform that allows us to isolate applications in containers to ensure consistency across multiple environments. By leveraging Docker, we are able to avoid the common issue of discrepancies between development, testing, and production environments, often phrased as "it works on my machine".

Here's how you can run our project using Docker:


### Prerequisites
-Install Docker on your machine.

### Steps

1. Clone the project

```bash
  git clone https://github.com/mustafablutt/shopping-cart
```
2. Go to the project directory

```bash
   cd shopping-cart
```

3. Build Docker image

```bash
  docker build -t shopping-cart .
```
4. Run Docker container

```bash
  docker run -p 3000:3000 shopping-cart
```
After these steps, you should be able to access the application at 'http://localhost:3000' .



## Packages

-  react: ^18.0.2
-  docker: ^4.10.0
-  react-dom: ^18.0.2
-  react-scripts: 4.0.3
-  jwt-decode: ^3.1.2
-  @testing-library/jest-dom: ^5.11.4
-  @testing-library/react: ^11.1.0
-  @testing-library/user-event: ^12.1.10
-  web-vitals: ^1.0.1
-  mui-material: 5.13.0
-  react-router-dom: ^5.2.0

  



