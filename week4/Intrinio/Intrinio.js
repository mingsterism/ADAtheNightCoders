var intrinioSDK = require("intrinio-sdk");
const util = require("util");

intrinioSDK.ApiClient.instance.authentications["ApiKeyAuth"].apiKey =
  "OjFhMWRkMzgzYzFhZjY4YWRmOGEyNmU3NjUxYmI5MWEy";

var companyAPI = new intrinioSDK.CompanyApi();

companyAPI.getAllCompanies().then(
  function(data) {
    console.log(util.inspect(data, false, null, true));
  },
  function(error) {
    console.error(error);
  }
);
