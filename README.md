# lucky-birthday-app-mark-11
### A website which checks whether your birthday is lucky or not by calculating if sum of digits in your birth date is divisible by your lucky number.

## Contents
- Header 
- Label for date of birth 
- Input for the same w/ type as `date`
- Label for the lucky number 
- Input for the same w/ type as `number`

## Working
- First we link HTML w/ JS using `document.querySelector` and get `birthDate` , `userNumber` , `checkButton` , `messageP`
- Then we get user's date and replace all the `-` using `.replaceAll()` w/ `""`  and it will give us the date as a string but w/o the `-`
- Then we will add up all the number in the string 👇
  ```
  let sum = 0
    for (i = 0; i < bDate.length; i++) {
        sum = sum + Number(bDate.charAt(i));
    }
  ```
  - The `charAt` method returns the character at a specified index in a string
  - At the indexing starts w/ `0`
  - Then we will check if the sum or the lucky number is 0 or not
  - And then make sure that the lucky number is not negative
- Then we divide the sum w/ the lucky number and see if it is perfectly divisible i.e, the remaninder should be 0
  - For this we will use `%` 
    `dateNumber % Number(userNumber.value) === 0`
 - Then if the sum is pefectly divisible by the lucky number then we will tell that the Birthdate is lucky else not
 
 ### Resources
 - [replaceAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
 - [charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
 
