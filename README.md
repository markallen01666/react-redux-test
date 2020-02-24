## React Redux Test
 
App to learn Redux functionality with React

This is a simple app I built to learn about using Redux with React. Buttons allow you to increment/decrement a position number and the associated letter of the alphabet is displayed (1=A, 13=M, 26=Z etc.). As it's just something to play around with, I haven't bothered with anything beyond the most rudimentary styling.

Redux store has two items, the "count" which is the position number, and "alphabet" which is an array with the ordered letters of the alphabet. As the buttons to increment/decrement are pressed the corresponding letter displayed also changes.

I have added in an extra panel through a child component of App.js called Card.js. This component holds an array of colours. As the value of count is changed, the coloured panel background changes to reflect the array item value. This simulates a call to the Redux store from a child component possibly many levels down.

Working demo can be seen at: https://alphabet-position.firebaseapp.com/