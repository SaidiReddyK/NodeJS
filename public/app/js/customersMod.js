
angular.module('customersMod', ['ngRoute'])

//---------controllers----------
.controller('customersCtrl', ['$scope', 'dataService', function(scope, dataService) {
	
	//scope.customers = [{ FullName:'SaidiReddy', Email:'SaidiReddy.k@gmail.com', Mobile:98852946, About:'Hello' }];
	
	var promise = dataService.getAllCustomers();

	promise.success(function(response) {
		scope.customers = response;
	});

	promise.error(function(err) {
		alert('Failed to load customers list from server - \n' + err.statusText);
	});
}])

//----------SERVICE-------------
.service('dataService', ['$http', function($http) {
	
	var url = '/customers';
	this.getAllCustomers = function() {
		return $http.get(url);
	};

	this.getCustomer = function(id) {

	};
}])

//pre-intitialization stage
.config(['$routeProvider', function($routeProvider) { 

	//configure valid route paths
	$routeProvider
	.when('/', { templateUrl : 'app/partials/home.html' })
	.when('/customers', { templateUrl : 'app/partials/customers.html',
							controller : 'customersCtrl' })
}]);