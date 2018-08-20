myApp.controller('RentalController', ['$http', function ($http) {
    vm = this;
    vm.rentalArr = [];

    getRentalList();

    function getRentalList() {
        console.log('In getRentalList');

        $http({
            method: 'GET',
            url: '/listings/rent'
        }).then(function (response) {
            console.log('RentController GET Listings', response.data);
            vm.rentalArr = response.data
        }).catch((error) => {
            console.log('Error in getRentalList', error);
        })
    }
}]);//end Rentcontroller
