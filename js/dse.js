angular.module('dseviz', ['dseviz'])

.controller('dsevizc', function($scope) {
  
	/* Set the main tab control state variable */
	$scope.nowVisibleTab = 0; /* 0 = Visualization, 1 = Configuration, 2 = Test */
	
	/* Set this variable to all the table fields */
	$scope.tableFields = [	
		"userid", 
		"day", 
		"productid", 
		"reviewid", 
		"profilename", 
		"helpfulness", 
		"score", 
		"summary",
		"review",
		"time"
	];
	
	/* Set this variable to the Primary Key */
	$scope.partitionKey = "userid";
	
	/* Set this variable to the Clustering Keys */
	$scope.clusterKeys = [
		"productid",
		"time",
		"reviewid"
	];
	
	/* Set this variable to the rest of the fields */
	$scope.remainingFields = [
		"day",
		"profilename",
		"helpfulness",
		"score",
		"summary",
		"review"
	];

	/* Table Parser */
	$scope.calculateTable = function(){
		var CreateQuery = $('#createq').val();
		var spl = CreateQuery.split("(");
		var fields = spl[1].split(",\n");
		fields.pop();
		var keys = spl[2].split(")")[0].split(",");

		for(var i = 0; i < fields.length; i++){
			fields[i] = fields[i].split(" ")[0];
			fields[i] = fields[i].replace("\n", "");
		}
		for(var i = 0; i < keys.length; i++){
			keys[i] = keys[i].replace(" ", "");
		}
		var cKeys = keys.slice(0);
		cKeys.shift();

		$scope.tableFields = fields;
		$scope.partitionKey = keys[0];
		$scope.clusterKeys = cKeys;

		fields.splice(fields.indexOf(keys[0]), 1);
		$scope.remainingFields = fields.filter(function (x) { return keys.indexOf(x) < 0 })

	};
});
