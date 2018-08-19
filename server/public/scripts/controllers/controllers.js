

myApp.controller('RentalController',['$http', function ($http) {
    vm = this;
    vm.rentalArr = [];

    getRentalList();

    function getRentalList() {
        $http({
            method: 'GET',
            url: '/listings'
        }).then(function (response) {
            console.log('RentController GET Listings', response.data);
            vm.rentalArr = response.data
        }).catch((error) => {
            console.log('Error in getRentalList', error);
        })
    }
}]);//end Rentcontroller

myApp.constroller('SaleController', function($http){
    vm = this;
    vm.saleArr = [];
})//end Sale Controller

myApp.controller('HomeController', function($http){
    vm = this;
})//end HomeController