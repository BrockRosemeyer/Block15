let person = {
    firstName: "Jake",
    lastName: "Smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupsize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}
//Modify the email, phone, zip code, and favoite flavors
person["email"] = "Jak3Smith1992@email.com";
person["phone"] = "319-555-1234";
person["zipCode"] = "63132";
person["favoriteFlavors"] = "coffee, strawberry, matcha";

//deleting the zipCode and favoiteStore
delete person["zipCode"];
delete person["favoriteStore"];

//adding the toppings, future flavors, and purchase cost
person.toppings = ["chocolate sprinkles", "waferstraws", "gummy bears"];
person.futureFlavors = ["Mango"];
person.todaysPurchaseCost = 5.32;


console.log(person);
