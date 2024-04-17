/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let who_random = Math.floor(Math.random() * who.length);
  let who_random_result = who[who_random];
  let action_random = Math.floor(Math.random() * action.length);
  let action_random_result = action[action_random];
  let what_random = Math.floor(Math.random() * what.length);
  let what_random_result = what[what_random];
  let when_random = Math.floor(Math.random() * when.length);
  let when_random_result = when[when_random];

  return (
    who_random_result +
    " " +
    action_random_result +
    " " +
    what_random_result +
    " " +
    when_random_result
  );
}
const excusa = document.getElementById("resultadoExcuse");
excusa.textContent = excuse();
