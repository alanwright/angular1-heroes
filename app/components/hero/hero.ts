module boilerplate.components {
    import HeroController = boilerplate.controllers.HeroController;
    import IHeroService = boilerplate.services.IHeroService;
    
    export class Hero implements ng.IComponentOptions {
        templateUrl = 'app/components/hero/hero.html';
        bindings = {
            hero: '<',
        };
        controller = [() => new HeroController()];
    }
}

boilerplate.registerComponent('Hero');