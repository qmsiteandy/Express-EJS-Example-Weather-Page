async function getJoke() {
  let data = await fetch("https://v2.jokeapi.dev/joke/Any");
  console.log(data);
}
getJoke();
