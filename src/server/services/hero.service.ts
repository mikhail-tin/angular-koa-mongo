import { MongoClient } from "mongodb";
import Hero from '../models/heroSchema';

interface Hero{
    _id: string
    name: string
}

export class HeroServise {
 
    public async getHeroes(name?: string) {
        if(name){
            let regex = `${name}+`;
            let result = await Hero.find({name: new RegExp(regex, "g")});
            return result;
        }
        return await Hero.find();
    }

    public async getHero(id: number) {
        return await Hero.findById(id);
    }

    public async addHero(name: string) {
        return await new Hero({name: name}).save();
    }

    public async updateHero(hero: Hero) {
        return await Hero.findByIdAndUpdate(hero._id, hero, { new: true });
    }

    public async deleteHero(id: string) {
        return await Hero.findByIdAndRemove(id);
    }
};