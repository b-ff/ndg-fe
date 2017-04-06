// App configuration & init

const app = angular.module('ovn', [
    'ui.router'
]);

app.run([() => {
    console.log('runned!');
}]);

export default app;
