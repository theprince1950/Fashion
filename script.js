// console.log("before promise");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved");
//   }, 3000);
// });

// console.log("After");

// promise.then(console.log);

// asynchronous functions, async

// async function getServerData() {
//   const data = await fetch("https://fakestoreapi.com/products/1");
//   const json = await data.json();
//   console.log(json);
// }

// getServerData();

// Promise.all();

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1");
  }, Math.random() * 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise2");
  }, Math.random() * 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3");
  }, Math.random() * 1000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise4");
  }, Math.random() * 1000);
});

Promise.all([promise1, promise2, promise3, promise4])
  .then(console.log)
  .catch(console.error)
  .finally();

Promise.allSettled([promise1, promise2, promise3, promise4])
  .then(console.log)
  .catch(console.error)
  .finally();
