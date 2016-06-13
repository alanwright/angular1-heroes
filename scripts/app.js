///<reference path="../typedefs/jQuery/jQuery.d.ts"/>
///<reference path="../typedefs/angular/angular.d.ts"/> 
'use strict';
var boilerplate;
(function (boilerplate) {
    var moduleName = "boilerplate";
    var appClass = ".app";
    angular.module(moduleName, [])
        .factory('heroService', function () { return boilerplate.services.createHeroService(); });
    function registerComponent(componentName) {
        var loweredName = componentName[0].toLowerCase() + componentName.slice(1);
        var options = new boilerplate.components[componentName]();
        angular.module(moduleName).component(loweredName, options);
    }
    boilerplate.registerComponent = registerComponent;
    function bootstrap() {
        angular.element(window.document).ready(function () {
            var app = $(appClass);
            app.attr('ng-app', moduleName);
            angular.bootstrap(app, [moduleName]);
        });
    }
    boilerplate.bootstrap = bootstrap;
})(boilerplate || (boilerplate = {}));
$(document).ready(function () {
    boilerplate.bootstrap();
});
var boilerplate;
(function (boilerplate) {
    var controllers;
    (function (controllers) {
        var HeroController = (function () {
            function HeroController() {
            }
            return HeroController;
        })();
        controllers.HeroController = HeroController;
    })(controllers = boilerplate.controllers || (boilerplate.controllers = {}));
})(boilerplate || (boilerplate = {}));
var boilerplate;
(function (boilerplate) {
    var components;
    (function (components) {
        var HeroController = boilerplate.controllers.HeroController;
        var Hero = (function () {
            function Hero() {
                this.templateUrl = 'app/components/hero/hero.html';
                this.bindings = {
                    hero: '<'
                };
                this.controller = [function () { return new HeroController(); }];
            }
            return Hero;
        })();
        components.Hero = Hero;
    })(components = boilerplate.components || (boilerplate.components = {}));
})(boilerplate || (boilerplate = {}));
boilerplate.registerComponent('Hero');
var boilerplate;
(function (boilerplate) {
    var controllers;
    (function (controllers) {
        var HeroesController = (function () {
            function HeroesController(proxyService) {
                this.heroService = proxyService;
            }
            HeroesController.prototype.$onInit = function () {
                this.heroes = this.heroService.getHeroes();
            };
            HeroesController.prototype.onSelect = function (hero) {
                this.selectedHero = hero;
            };
            return HeroesController;
        })();
        controllers.HeroesController = HeroesController;
    })(controllers = boilerplate.controllers || (boilerplate.controllers = {}));
})(boilerplate || (boilerplate = {}));
var boilerplate;
(function (boilerplate) {
    var components;
    (function (components) {
        var Heroes = (function () {
            function Heroes() {
                this.templateUrl = 'app/components/heroes/heroes.html';
                this.controller = ['heroService', function (heroService) {
                        return new boilerplate.controllers.HeroesController(heroService);
                    }];
            }
            return Heroes;
        })();
        components.Heroes = Heroes;
    })(components = boilerplate.components || (boilerplate.components = {}));
})(boilerplate || (boilerplate = {}));
boilerplate.registerComponent('Heroes');
var boilerplate;
(function (boilerplate) {
    var services;
    (function (services) {
        function createHeroService() {
            return new HeroService();
        }
        services.createHeroService = createHeroService;
        var HeroService = (function () {
            function HeroService() {
            }
            HeroService.prototype.getHeroes = function () {
                return [
                    { 'id': 11, 'name': 'Chewbacca' },
                    { 'id': 12, 'name': 'Rey' },
                    { 'id': 13, 'name': 'Finn (FN2187)' },
                    { 'id': 14, 'name': 'Han Solo' },
                    { 'id': 15, 'name': 'Leia Organa' }
                ];
            };
            return HeroService;
        })();
    })(services = boilerplate.services || (boilerplate.services = {}));
})(boilerplate || (boilerplate = {}));
