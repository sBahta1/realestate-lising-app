myApp.controller('SaleController', function ($http) {
    vm = this;
    vm.saleArr = [];
    console.log('in sale controller');
    //getSaleList() Auto populates dom with properites by 'sale' "type"
    getSaleList();

    function getSaleList() {
        console.log('In getSaleList');
        $http({
            method: 'GET',
            url: '/listings/sale'
        }).then(function (response) {
            console.log('SaleController GET Listings', response.data);
            vm.saleArr = response.data
        }).catch((error) => {
            console.log('Error in getRentalList', error);
        })
    }
    vm.deleteListing = function (id) {
        console.log('in deleteListing', id);
        $http({
            method: 'DELETE',
            url: '/listings/' + id
        }).then(function (response) {
            console.log('listing deleted', response.data);
            getSaleList();
        }).catch(function (error) {
            console.log('Could not delete', error);
        })
    }


})//end Sale Controller
