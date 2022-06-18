var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";

  h3.textContent = body.style.background + "";
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// let will_pokemon = {
//   pikachu: {
//     species: "Mouse Pokemon",
//     height: 0.4,
//     weight: 6,
//     power: "lightning",
//     friend: {
//       charizard: {
//         species: "Dragon Pokemon",
//         height: 1.7,
//         weight: 90.5,
//         power: "fire",
//       },
//     },
//   },
// };

// let andrei_pokemon = {
//   raichu: {
//     species: "Mouse Pokemon",
//     height: 0.8,
//     weight: 30,
//     power: "",
//   },
// };

// if (
//   andrei_pokemon &&
//   andrei_pokemon.raichu &&
//   will_pokemon &&
//   will_pokemon.pikachu &&
//   will_pokemon.pikachu.friend &&
//   will_pokemon.pikachu.friend.charizard
// ) {
//   console.log("fight!");
// } else {
//   console.log("walk away...");
// }

// ["Hello young grasshopper!", "you are", "learning fast!"];
// const greeting = [
//   ["Hello", "young", "grasshopper!"],
//   ["you", "are"],
//   ["learning", "fast!"],
// ];

// const newGreeting = greeting.flatMap((item) => {
//   return item.join(" ");
// });

// console.log(newGreeting);
// console.log(greeting.flat().join(""));
