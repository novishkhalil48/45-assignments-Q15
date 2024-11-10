"use strict";
//Q15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//. Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//•  Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let myList = ["Sana", "Sara", "Riya", "Yusra", "Farha", "Zain", "Farhan"];
console.log(myList);
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
let myGuest1 = "Farhan";
console.log(`${myGuest1} is busy he can't join us`);
//•  Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
myList.pop();
myList.push("Rehan");
console.log(myList);
//• Print a second set of invitation messages, one for each person who is still in your list.
//My new list:
console.log("I invited you to dinner", myList[0]);
console.log("I invited you to dinner", myList[1]);
console.log("I invited you to dinner", myList[2]);
console.log("I invited you to dinner", myList[3]);
console.log("I invited you to dinner", myList[4]);
console.log("I invited you to dinner", myList[5]);
