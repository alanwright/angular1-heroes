module boilerplate.services {
    import IHero = boilerplate.viewModel.IHero;
    
    export interface IHeroService {
        getHeroes: () => IHero[];
    }

    export function createHeroService(): IHeroService {
        return new HeroService();
    }

    class HeroService implements IHeroService {
        public getHeroes(): IHero[] {
            return [
                { 'id': 11, 'name': 'Chewbacca' },
                { 'id': 12, 'name': 'Rey' },
                { 'id': 13, 'name': 'Finn (FN2187)' },
                { 'id': 14, 'name': 'Han Solo' },
                { 'id': 15, 'name': 'Leia Organa' }
            ];
        }
    }
}