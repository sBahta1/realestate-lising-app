myApp.controller('SaleController', function($http){
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

})//end Sale Controller
