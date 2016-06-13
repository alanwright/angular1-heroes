module boilerplate.controllers {
    import IHero = boilerplate.viewModel.IHero;
    import IHeroService = boilerplate.services.IHeroService;
    
    export class HeroesController {
        private heroService: IHeroService;
        private selectedHero: IHero;
        private heroes: IHero[];
        
        constructor(proxyService: IHeroService) {
            this.heroService = proxyService;
        }
        
        private $onInit(): void {
            this.heroes = this.heroService.getHeroes();
        }

        public onSelect(hero: IHero): void {
            this.selectedHero = hero;
        }
    }
}