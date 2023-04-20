export class Client {
  constructor(url) {}
  promiseFetch = new Promise((resolve, reject) => {
    fetch(
      "https://bf215c26-4cad-4edb-b33e-b3fdbb92c43c.mock.pstmn.io/billing/discount",
      {
        method: "GET",
      }
    )
      .then((value) => {
        resolve(value);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export class SecondButton {
  constructor() {}
  secondPromiseFetch = new Promise((resolve, reject) => {
    fetch(
      "https://8ae77586-f048-466a-a00a-8c3a29c5e79a.mock.pstmn.io/feedback",
      {
        method: "GET",
      }
    )
      .then((value2) => {
        resolve(value2);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
// let promise = fetch(
//   "https://8ae77586-f048-466a-a00a-8c3a29c5e79a.mock.pstmn.io/feedback"
// );
// promise
//   .then((response) => {
//     return response.json();
//   })
//   .then((value) => {
//     console.log(value);
//   });
