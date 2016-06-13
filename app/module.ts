'use strict';

module boilerplate {
    import IHeroService = boilerplate.services.IHeroService;
    
    const moduleName = "boilerplate";
    const appClass = ".app";
    
    angular.module(moduleName, [])
        .factory('heroService', () => services.createHeroService());
    
    export function registerComponent(componentName: string) {
        let loweredName = componentName[0].toLowerCase() + componentName.slice(1);
        let options = new boilerplate.components[componentName]();
        angular.module(moduleName).component(loweredName, options);
    }

    export function bootstrap() {
        angular.element(window.document).ready(function () {
            let app = $(appClass);
            app.attr('ng-app', moduleName);
            angular.bootstrap(app, [moduleName]);
        });
    }
}

$(document).ready(() => {
    boilerplate.bootstrap();
});