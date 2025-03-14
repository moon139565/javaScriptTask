let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

//! answer is ="It's a normal day.". cuse case sensitive

//? 2. Build an ATM Cash Withdrawal System

let withdraw = (cash) => {
  if (cash % 100 === 0) {
    console.log("Withdrawal successful");
  } else {
    console.log("Invalid amount");
  }
};

// withdraw(400);
// withdraw(360);

//? Pay for your movie ticket

let movieTicket = (age) => {
  if (age > 0 && age < 18) {
    console.log("are you Children pay $3");
  } else if (age >= 18 && age <= 60) {
    console.log("are you Adults pay $10");
  } else if (age > 60) {
    console.log("are you Seniors pay $8");
  } else {
    console.log("please inter valid age");
  }
};

movieTicket(10);

// ?Horoscope Sign Checker

let monthName = (month) => {
  switch (month) {
    case "March":
    case "April":
      console.log("Horoscope Sign is Aries");
      break;
    case "Aplil":
    case "May":
      console.log("Horoscope Sign is Taurus");
      break;
    default:
      console.log("Invalid Month");
  }
};
monthName("March");

// ? Which Triangle?

let side1 = 1;
let side2 = 5;
let side3 = 2;

if (side1 === side2 && side1 === side3) {
  console.log("Equilateral Triangle");
} else if (side1 === side3 || side2 === side1 || side2 === side3) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
