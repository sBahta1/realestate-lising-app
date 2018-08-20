myApp.controller('RentalController', ['$http', function ($http) {
    vm = this;
    vm.rentalArr = [];

    getRentalList();

    function getRentalList() {
        console.log('In getRentalList');
        $http({
            method: 'GET',
            url: '/listings/rent' //untill individual router made
        }).then(function (response) {
            console.log('RentController GET Listings', response.data);
            vm.rentalArr = response.data;
        }).catch((error) => {
            console.log('Error in getRentalList', error);
        });
    }

    vm.deleteListing = function (id) {
        console.log('in deleteListing', id);
        $http({
            method: 'DELETE',
            url: '/listings/' + id //untill individual router made
        }).then(function (response) {
            console.log('listing deleted', response.data);
            getSaleList();
        }).catch(function (error) {
            console.log('Could not delete', error);
        });
    };
}]);//end Rentcontroller
