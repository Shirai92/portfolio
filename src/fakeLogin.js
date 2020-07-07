const apiCall = (login, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
     
       if (login === "admin" && password === "admin") {
        return resolve({
          message: "Success login",
          statusCode: 200,
          redirect: "/panelAdmin",
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
