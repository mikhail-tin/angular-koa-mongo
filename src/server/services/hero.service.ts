import { MongoClient } from "mongodb";
import Hero from '../models/heroSchema';

interface Hero{
    _id: string
    name: string
}

export class HeroServise {
 
    public async getHeroes() {
        var results = await Hero.find();
        return results;
    }

    public async getHero(id: number) {
        var results = await Hero.findById(id);
        return results;
    }

    public async addHero(name: string) {
        let hero = new Hero({name: name});
        let result;
        try{
            result = await hero.save();
        } catch (err) {
            throw new Error(err);
        }

        return result;
    }

    public async updateHero(hero: Hero) {
        var results = await Hero.findByIdAndUpdate(hero._id, hero);
        return results;
    }

    public async deleteHero(id: string) {
        var results = await Hero.findByIdAndRemove(id);
        return results;
    }
};