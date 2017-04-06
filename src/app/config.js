/**
 * App configuration & routing
 *
 * @param $stateProvider
 * @param $urlRouterProvider
 * @param $locationProvider
 */

import app from './app';
import jsonConfig from '../../app.config.json';

const config = ($stateProvider, $urlRouterProvider, $locationProvider) => {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/index');

    $stateProvider
        .state('index', {
            title: jsonConfig.text.navigation.main,
            url: '/',
            template: require('../public/views/index.jade')()
        })
        .state('credits', {
            title: jsonConfig.text.navigation.credits,
            url: '/credits',
            template: require('../public/views/credits.jade')()
        });
};

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    config
]);

app.constant('jsonConfig', jsonConfig);
