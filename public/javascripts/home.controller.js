app.controller("homeCtrl", ['$scope', '$http', function($scope, $http){
   console.log('test');

   $scope.currentPage = 1;

   $http({
      url: '/fetch',
      method: "GET",
      params: {pageNum: $scope.currentPage}
   })
   .then(function(response){
      console.log(response);
      $scope.entries = response.data.docs;
      $scope.total = response.data.total;
      $scope.pageSize = response.data.limit;
   }, function(response){
      console.log(response);
   });

   $scope.pagingFunction = function(page){
      $http({
         url: '/fetch',
         method: "GET",
         params: {pageNum: page}
      })
      .then(function(response){
         console.log(response);
         $scope.entries = response.data.docs;
         $scope.total = response.data.total;
         $scope.pageSize = response.data.limit;
      }, function(response){
         console.log(response);
      });
   }


}]);
