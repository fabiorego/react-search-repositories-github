# React Search Repositories Github - React Interview Exercise

This is the main README for the React Github Search Repository Interview Exercise. It contains all the necessary instructions for anyone to setup and test what was developed for these exercises.

## Getting Started

THe following sections describe how anyone can get this project setup and running.

### Pre-requisites

The following is required to be installed on your machine:

1. Node version 12.13.0 or greater
2. Yarn version 1.12.1 or greater

### IDE

We recommend you to install [VSCode](https://code.visualstudio.com/) and [React Food Truck extension](https://marketplace.visualstudio.com/items?itemName=burkeholland.react-food-truck).

You can open this project by double clicking react-course.code-workspace. With that and, assuming you have installed React Food Truck extension, you will have your environment formatting the code when you save any file.

### Setup and Installation

To setup up this project, first clone the project:

```
$ git clone https://github.com/fabiorego/react-search-repositories-github.git
```

Then navigate to the project folder and install all the required dependencies:

```
$ cd react-search-repositories-github
```

### Commands

Install dependencies:

```
$ yarn install
```

Start web application server:

```
$ yarn start
```

Web application will be available at **http//localhost:3000**

Document and develop presentation components:

```
$ yarn serve-ui-docs
```

Unit testing with Jest:

```
$ yarn test
```

## File/Folder Structure

- **src/components**: the application components
- **src/pages**: the application pages
- **src/pages/errors**: the application error pages
- **src/services**: the Github API requests
- **src/styles**: the CSS files for the application
- **src/styles/errors**: the CSS files for error pages for the application
- **src/index.js**: entry point
- **src/Routes.jsx**: the React router routes

## Testing

There are several unit tests made with Jest. Each test is located at **src/pages** and **src/components** with the extension **.test.jsx**.

## Used Libraries

- [Axios](https://github.com/axios/axios) - To handle APIs, and make code cleaner.
- [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start) - To handle web front-end navigation.
- [Formik](https://github.com/jaredpalmer/formik) - For form validation **(only SignIn page)**.

## ToolKits Used

- [Bootstrap 4](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [LottieFiles](https://lottiefiles.com/)

## GitHub Api

- Search Repositories API - documentation [here](https://developer.github.com/v3/search/#search-repositories).
- Pagination API - documentation [here](https://developer.github.com/v3/guides/traversing-with-pagination).

## Interview Exercice Assignment

1. Analyze templates folder: Sign in page (signin.html) and GitHub Repos List page (home.html), modal template (modal.html), confirm-modal.html which could be used to confirm and view-modal.html which could be used to show item details;
2. Analyze bootstrap design system [here](https://getbootstrap.com/docs/4.4/components/), and use css classes to style your components. Application already has bootstrap css loaded;
3. Create a Sign In page. No need for form validation (but it is a plus), nor backend communication. To simulate the sign in you can use local storage for now. Show a loading when user submits sign in form (use timeout of 2000 ms) and store session at local storage (only for exercise purpose);
4. Create a page to search for Github Repos page. Use GitHub Api for Repository search (see below);
5. Using the session stored at local storage, make sure when you enter application it checks a user is logged in and if so go to Repositories Page, if not go to Sign In page;
6. After login user should be redirected to Repositories Page;

- **Link** - [Github](https://github.com/joaoantunes87/react-interview-exercise)

## Style

Styling was used with some Bootstrap components, such as Form and Buttons.

## Improvements

In the SignIn page display a loading message/spinner during 2000ms. For now, when the user clicks the submit button in the SignIn page, he is automatically redirected to Repositories page (after 2000ms) without user feedback.

## Authors

- **Fábio Rêgo** - [Github](https://github.com/fabiorego)
