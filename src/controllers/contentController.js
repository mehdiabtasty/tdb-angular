'use strict';

var data_table_cols = [
	{ 'id': '1',  'name': '#', 'valueId': 'id','active': true},
	{ 'id': '2',  'name': 'Name', 'valueId': 'name','active': true},
	{ 'id': '3',  'name': 'Identifier', 'valueId': 'identifier','active': true},
	{ 'id': '4',  'name': 'Pack', 'valueId': 'pack','active': true},
	{ 'id': '5',  'name': 'Quota', 'valueId': 'quota','active': false},
	{ 'id': '6',  'name': 'Quota PV', 'valueId': 'quotaPv','active': true},
	{ 'id': '7',  'name': 'Quota start date', 'valueId': 'quotaStartDate','active': false},
	{ 'id': '8',  'name': 'Quota valid until', 'valueId': 'quotaValidUntil','active': false},
	{ 'id': '9',  'name': 'Demo valid until', 'valueId': 'demoValidUntil','active': true},
	{ 'id': '10', 'name': 'Quota winners', 'valueId': 'quotaWinners','active': false},
	{ 'id': '11', 'name': 'Tests Pending/All', 'valueId': 'testsPending','active': true},
	{ 'id': '12', 'name': 'Creation date', 'valueId': 'creationDate','active': true},
	{ 'id': '13', 'name': 'Update script', 'valueId': 'updateScript','active': true},
	{ 'id': '14', 'name': 'JS Local', 'valueId': 'jsLocal','active': false},
	{ 'id': '15', 'name': 'JS Cloudfront', 'valueId': 'jsCloudFront','active': false},
	{ 'id': '16', 'name': 'Status framework', 'valueId': 'statusFramework','active': true},
	{ 'id': '17', 'name': 'Database', 'valueId': 'database','active': true},
	{ 'id': '18', 'name': 'Account manager', 'valueId': 'accountManager','active': true},
	{ 'id': '19', 'name': 'Agencies', 'valueId': 'agencies','active': false},
	{ 'id': '20', 'name': 'Stats', 'valueId': 'stats','active': false},
	{ 'id': '21', 'name': 'Support time', 'valueId': 'supportTime','active': false},
	{ 'id': '22', 'name': 'Exclude IE + meta tag', 'valueId': 'excludeIE','active': false}
];
var data_accounts = [
	{ 'id': '6', 'name': 'Betari2', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '7', 'name': 'Bonin2', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'demo_premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '8', 'name': 'DeCroute2', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '9', 'name': 'Laouti2', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'demo_premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '10', 'name': 'Lohse2', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '1', 'name': 'Betari', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'demo_premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '2', 'name': 'Bonin', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '3', 'name': 'DeCroute', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'demo_premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '4', 'name': 'Laouti', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '5', 'name': 'Lohse', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'demo_premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '11', 'name': 'xBetari', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '12', 'name': 'xBonin', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'demo_premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '13', 'name': 'xDeCroute', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '14', 'name': 'xLaouti', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'demo_premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '15', 'name': 'xLohse', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '16', 'name': 'xBetari2', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'demo_premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '17', 'name': 'xBonin2', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '18', 'name': 'xDeCroute2', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'demo_premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '19', 'name': 'xLaouti2', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true},
	{ 'id': '20', 'name': 'xLohse2', 'identifier': '23da4b70433676c2421cd8e204eac0e2', 'pack': 'demo_premium', 'quoto': '0', 'quotaPv': '0', 'quotaStartDate': '0000-00-00 00:00:00', 'quotaValidUntil': '0000-00-00' , 'demoValidUntil': '2015-07-01', 'testsPending': '0/0', 'creationDate': '2015-06-01 11:49:48', 'updateScript': true , 'jsLocal': true, 'jsCloudFront': true, 'statusFramework': 'Check...', 'database': 'rds2', 'accountManager': 'damien@abtasty.com', 'stats': false, 'agencies': '', 'supportTime': '', 'excludeIE': true}
];


app
	.controller('contentController' , function ($scope, $filter) {

		$scope.tableCols = data_table_cols;
		$scope.accounts = data_accounts;

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