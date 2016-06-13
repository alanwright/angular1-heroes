module boilerplate.components {
    import IHeroService = boilerplate.services.IHeroService;
    
    export class Heroes implements ng.IComponentOptions {
        templateUrl = 'app/components/heroes/heroes.html';
        controller = ['heroService', (heroService: IHeroService) =>
            new boilerplate.controllers.HeroesController(heroService)];
    }
}

boilerplate.registerComponent('Heroes');