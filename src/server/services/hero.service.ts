
class Hero {
    id: number;
    name: string;
}

let heroes: Hero[] = [
        {id: 0, name: 'Archy'},
        {id: 1, name: 'One-Two(Wild Bunch)'},
        {id: 2, name: 'Handsome Bob(Wild Bunch)'},
        {id: 3, name: 'Mumbles(Wild Bunch)'},
        {id: 4, name: 'Johnny'}
    ];

export class HeroServise {

    public async getHeroes(name?: string) {
        if(name) { return heroes.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));}
        return heroes; 
    }

    public async getHero(id: number) {
        return heroes.find(x=> x.id == id);
    }

    public async addHero(name: string) {
        let nextId = heroes.length;
        let hero: Hero = {id: nextId, name: name};
        heroes.push(hero);
        return hero;
    }

    public async updateHero(hero: Hero) {
        heroes = heroes.map( (x) => { if(x.id == hero.id){ return hero; }  return x;} )
        return heroes;
    }

    public async deleteHero(id: number) {
        heroes = heroes.filter(x => x.id != id);
        return heroes;
    }
};