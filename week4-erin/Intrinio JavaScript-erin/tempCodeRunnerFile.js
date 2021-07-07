var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "OjFlMGY0M2M1ZGVkNjI3OWYyZDM3YzkwMDEzZGQ0MjM2";

var indexAPI = new intrinioSDK.IndexApi();

var identifier = "$DJI"; // String | An Index Identifier (symbol, Intrinio ID)

var tag = "level"; // String | An Intrinio data tag ID or code-name


indexAPI.getStockMarketIndexDataPointNumber(identifier, tag).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});