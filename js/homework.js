/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

// Fahrenheit ->celcius = Fahrenheit - 32 * 5/9 or celcius = 5/9 Fahrenheit - 32
function toCelcius (Fahrenheit){
    return  (Fahrenheit - 32) * (5/9)
};

toCelcius(32);
console.log(toCelcius(32));

toCelcius(212);
console.log(toCelcius(212));

toCelcius(50);
console.log(toCelcius(50));








/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/


// class = User,
// constructor (username, password)
// add method to change user password
// method should take in old password and new password
// method then checks old password to see if its right or wrong
// if old password is wrong new password is not created/ password is not reset
// create an instance of new user then change their password

 class User {
     constructor(username, password){
         this.username = username;
         this.password = password;
     }
     changePassword(oldPassword, newPassword){
        if (oldPassword ===this.password){
            this.password = newPassword;
            console.log("Password has been updated");
         } else {
            console.log("Your password is incorrect");
        }
            }

        }

 let user1 = new User('dyanna', '12345');
 let user2 = new User ('brian, codingtemple');

 console.log(user1);
 console.log(user2);

 user1.changePassword('abc123', '123abc'); // Success, password updated
 user2.changePassword('abc123', '123abc'); // Fail, password not updated









/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

// // write a function
// input an array of integers
// return an array of the negative integers to the 2nd power

// var arrA = [-10, -3, 4, -2, 8, 9, -3]
// function squareNegatives(array){


    
    




 const arrA = [-10, -3, 4, -2, 8, 9, -3];
 function squareNegatives(arr){
     for (const i = 0; i <arr.length; i++)
         if (arr[i] , 0) {
             console.log(arr);
         }


     }

