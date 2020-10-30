# **mr_robogers_neighborhood**

## **Project Description**
This project allows the user to input a number into the input field.  Upon clicking the submit button, the program will read back every whole number from 0 to the specified input value.

The output will also convert every number that contains any of the digits "1","2","3" into a short word or phrase.
## **Required for Use**
A browser that can run HTML is required.
## **Installation Instructions**

## **Usage / Examples**

## **Planned Features**
*Improved layout for useability and readability.
*Improved styling.
## **Specs**

Description: mrRobo()

Test: "It returns a list of numbers counting up to the number input by the user"
Expect: mrRobo(5).toReturn "1, 2, 3, 4, 5"

Test: "It returns "Won't you be my neighbor?" for any number containing "3".
Expect: mrRobo(14).toReturn "0, 1, 2, "won't you be my neighbor", 4, 5, 6, 7, 8, 9, 10, 11, 12, "wont you be my neighbor", 14"

Test: "It returns "Boop!" for any number containing "2".
Expect: mrRobo(14).toReturn "0, 1, "Boop!", "won't you be my neighbor", 4, 5, 6, 7, 8, 9, 10, 11, "Boop!", "wont you be my neighbor", 14"

Test: "it returns "Beep!" for any number containing "1".
Expect: mrRobo(14).toReturn "0, "Beep!", "Boop!", "won't you be my neighbor", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "wont you be my neighbor", 14"

## **Known Bugs**
There are no known bugs
## **Technology Used**
*HTML
*JavaScript
*Bootstrap
*jQuery
*CSS
## **Authors and Contributors**
Authored by: Randel Moore
## **Contact**
email@email.com
## **License**

GPLv3

Randel Moore © 2020
