// Stack (Primitive datatype) and Heap(Non-primitive datatype) 

let myName = "RahulPandey";
let anotherName = "Nakul";

anotherName = "Veer";

console.log(myName);
console.log(anotherName);

let user1 = {
    Email : "user1234@gmail.com",
    upi : "123@ybl"

}
let userTwo = user1;
userTwo.Email = "rahul1234@mail.com";
console.log(user1.Email);
console.log(userTwo.Email);


