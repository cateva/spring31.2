let favNumber = 3;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
});

// $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
//     console.log(data);
//   });


// let favNumbers = [1, 12, 23];
// for (let i = 0; i < favorateNumber.length, i++){
//     $.getJSON(`${baseURL}/${favNumbers[i]}?json`).then(data => {
//         console.log(data);
//       });
// }


// 2.
let favNumbers = [7, 145, 22];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
  console.log(data);
});


// 3 Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

Promise.all(
    Array.from({ length: 5 }, () => {
      return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
  ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });
  