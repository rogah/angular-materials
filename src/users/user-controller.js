(function() {

    angular
        .module('users')
        .controller('UserController', [
            '$mdSidenav',
            UserController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function UserController($mdSidenav) {
        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleMenu(componentId) {
            $mdSidenav(componentId).toggle();
        }
        
        return {
            toggleMenu: toggleMenu
        };
    }

})();