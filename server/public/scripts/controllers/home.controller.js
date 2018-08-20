myApp.controller('HomeController', function ($http) {
    vm = this;
    console.log('in home controller');
    //object to be sent to server
    vm.addNewListing = function (listing) {
        let newListing = {  //object to be sent to server
            cost: vm.costIn,
            sqft: vm.sqftIn,
            type: vm.typeIn,
            city: vm.cityIn,
            image_path: vm.imageIn
        };
        console.log(newListing);

        $http({
            method: 'POST',
            url: '/listings/home',//untill individual router made
            data: newListing
        }).then(function (respoonse) {
            console.log('New Listing Added');
        }).catch(function (error) {
            alert('Unable to add your listing', error);
            console.log('Error', error);
        });
    };
});//end HomeController
