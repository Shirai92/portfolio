const apiCall = (login, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login === "Dupa" && password === "1234") {
        return resolve({
          message: "Success login",
          statusCode: 200,
          redirect: "/",
        });
      } else if (login === "Dupa1" && password === "12345") {
        return resolve({
          message: "Success login",
          statusCode: 200,
          redirect: "/contact",
        });
      } else {
        return reject({
          message: "Error login",
          statusCode: 400,
        });
      }
    }, 2000);
  });

export default apiCall;
