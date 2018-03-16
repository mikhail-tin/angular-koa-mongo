import { MongoClient } from "mongodb";
import HeroSchema from '../models/hero';

interface Hero{
    _id: string
    name: string
}

export class HeroServise {
 
    public async getHeroes() {
        var results = await HeroSchema.find();
        return results;
    }

    public async getHero(id: number) {
        var results = await HeroSchema.findById(id);
        return results;
    }

    public async addHero(name: string) {
        let hero = new HeroSchema({name: "MyHero"});
        let result = await hero.save();
        return result;
    }

    public async updateHero(hero: Hero) {
        var results = await HeroSchema.findByIdAndUpdate(hero._id, hero);
        return results;
    }

    public async deleteHero(id: string) {
        var results = await HeroSchema.findByIdAndRemove(id);
        return results;
    }
};