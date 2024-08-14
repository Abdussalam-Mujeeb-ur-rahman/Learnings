// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res=>res.json())
// .then(data=>console.log(data));

// ASYNC AWAIT
async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.error(`Error fetching API: ${error}`);
  }
}

getTodos();

console.log('here now!');