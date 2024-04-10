# Little Lemon Restuarant App
This is a restuarant application developed using Expo Go. It supports cross-platform development and OTA (Over-The-Air) updates to the application. 
This project is aimed to provide a simple yet powerful interface for restuarants.

## Features

The application currently is in development and different features are made available separately.

### Login Screen
- `LoginScreen.js` provides the users the capability to login using email and password
- The password is secured input type
- The email has the keyboard type as `email-address` providing enhanced user experience

<p align="center" width="100%">
    <img width="33%" src='img/login_landing.PNG'> 
</p>

- The validations on email include: 
  - Can start with a quoted string (e.g., "username") or an unquoted string (e.g., username)
  - The unquoted string can contain letters, digits, and certain special characters (., _, +, -, and @)
  - The email address must contain the @ symbol, followed by either:
    - An IP address in square brackets (e.g., [123.45.67.89])
    - A domain name consisting of one or more parts separated by periods (e.g., example.com)
- The validations on password include:
  - Must be at least 8 characters long
  - Must contain at least one digit
  - Must contain at least one lowercase letter
  - Must contain at least one uppercase letter
  - Must contain at least one special character from the set `!@#$%^&*()_+}{":;'?/>.<,.`
  - Must not contain any whitespace characters (spaces, tabs, newlines, etc.)

<p align="center" width="100%">
    <img width="33%" src='img/login_email.PNG'> 
</p>

- On successfully passing the validations, the log in button is clickable

<p align="center" width="100%">
    <img width="33%" src='img/login_success.PNG'> 
</p>

### Welcome Screen

- `Home` screen is the landing page after successful login. It introduces the Little Lemon Restuarant
<p align="center" width="100%">
    <img width="33%" src='img/welcome_landing.PNG'> 
</p>

### Menu Screen

- Once the user presses on `Menu` tab, the app provies the menu items available with their pricing and sectioned views for _Appetizers_, _Main Course_ and _Desserts_

<p align="center" width="100%">
    <img width="33%" src='img/menu_showing.PNG'> 
</p>

### Feedback Screen

- `FeedbackForm` tab gives the users the capability to provide a feedback
  
<p align="center" width="100%">
    <img width="33%" src='img/feedback_form.PNG'> 
</p>

### Newsletter Screen

- `Newsletter` tab provides the user option to subscribe to the newsletter for updates about the delicious recipes.
  
<p align="center" width="100%">
    <img width="33%" src='img/newsletter_landing.PNG'> 
</p>

## Contributing to this project

### Getting Started

- Clone the repository into your local `git clone https://github.com/adityatodi/Little-Lemon-Restuarant.git`
- Move to the project directory `cd Little-Lemon-Restuarant`
- Install the required node_module packages specified in `package.json` using `npm install`
- Run the app by using the command `npx expo start`
- You can use iOS or Android simulator to launch the app

### Create merge request

If you want to help expand the utility of this project and add more features which you deem useful, you can generate a new merge request.

### Todo List

- [x] ~~*add logo to the screens*~~ [2024-04-06]
- [x] ~~*create a login page for the restuarant*~~ [2024-04-06]
- [x] ~~*add various features as options using navigation bar in the application*~~ [2024-04-08]
- [x] ~~*add newsletter option to subscribe to Little Lemon Restuarant*~~ [2024-04-09]
- [x] ~~*add validation checks for email and password fields in login page*~~ [2024-04-09]
- [ ] connect to menu database to fetch the menu items
- [ ] connect to feedback database to persist the feedback
