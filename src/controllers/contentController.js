'use strict';

app
	.controller('contentController' , function ($scope, $filter, dataProvider) {

		$scope.tableCols = dataProvider.getTableCols().then(function(tableCols){
	      $scope.tableCols = tableCols;
	    });

		$scope.accounts = dataProvider.getAccounts().then(function(accounts){
	      $scope.accounts = accounts;
	    });

		//colOrder
		var orderBy = $filter('orderBy');
		$scope.order = function(predicate, reverse) {
			$scope.accounts = orderBy($scope.accounts, predicate, reverse);
		};
		$scope.order('id',true);

		//return value off cells
		$scope.colValue = function(colIndex, accountIndex){
			colIndex = indexOfObjectValue($scope.tableCols, "id", colIndex);
			if(colIndex > -1){
				var colvalueID = $scope.tableCols[colIndex]['valueId'];
				
				return $scope.accounts[accountIndex][colvalueID];
			}
		}

		//hide a column
		$scope.hideCol = function(colIndex){
			colIndex = indexOfObjectValue($scope.tableCols, "id", colIndex);
			if(colIndex > -1){
				$scope.tableCols[colIndex]['active'] = false;
			}
		}
		//show a column
		$scope.showCol = function(colIndex){
			colIndex = indexOfObjectValue($scope.tableCols, "id", colIndex);
			if(colIndex > -1){
				$scope.tableCols[colIndex]['active'] = true;
			}
		}

		//Column hidden are not possible
		$scope.hiddenLock = function(valueId){
			if ((valueId == 'id') ||
				(valueId == 'name') ||
				(valueId == 'pack') ||
				(valueId == 'demoValidUntil') ||
				(valueId == 'testsPending') )
			{
				return false;
			}
			else{
				return true;
			}
		}





		/**Local Functions**/

		//return indexOf value element in Object
		function indexOfObjectValue(arraytosearch, key, valuetosearch) {
		 
			for (var i = 0; i < arraytosearch.length; i++) {
			 
				if (arraytosearch[i][key] == valuetosearch) {
					return i;
				}
			}
			return -1;
		}
		/**END Functions**/
	})
;