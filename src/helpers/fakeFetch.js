/* little function for fake fetch delays etc */
const fakeFetch = function(path, payload) {
  const response = getFakeResponseByPath(path, payload);
  return new Promise(resolve => setTimeout(() => resolve(response), 200));
}

/* API repsonses as described by swagger specification */
function getFakeResponseByPath(path, payload) {
  switch(path) {

    case "/customer/login":
      if(payload.username && payload.password) {
        return { "token": "faketoken" };
      }
      else return {};

    case "/customer/logout":
      return {};

    case "/customer/{customerId}/user":
      return {
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@gmail.com",
        "dob": "string"
      };

    case "/customer/{customerId}/genetic":
      return [
        {
          "name": "Type 2 Diabetes",
          "symbol": "low risk"
        },
        {
          "name": "High Blood Pressure",
          "symbol": "elevated risk"
        },
        {
          "name": "High Cholesterol",
          "symbol": "elevated risk"
        }
      ]

    default:
  }
  console.log(`No fake response found for path ${path}`);
}

export default fakeFetch;
