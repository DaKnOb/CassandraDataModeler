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
	]
});