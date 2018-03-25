import { IGlobalState } from '../store/model';
import { RootStore } from '@angular-redux/store/lib/src/components/root-store';
import { NgZone } from '@angular/core';

const defaultState: IGlobalState = {
    heroesState: {
        heroes: [
            {_id: '12345', name: 'Hero1', age: 20},
            {_id: '23456', name: 'Hero2', age: 30},
            {_id: '345678', name: 'Hero3', age: 40}
        ],
        pending: false,
        error: null,
        newHero: null,
        selectedHero: {_id: '23456', name: 'Hero2', age: 30},
        hero: null,
        filterHero: ''
    },
    routerReducer: null
};

function mockedRedux(state: any = defaultState): RootStore<any> {
    const initState = Object.assign({}, defaultState, state);
    const result = new RootStore(new NgZone({}));
    result.configureStore((s, a) => Object.assign({}, s, a.payload), initState);
    return result;
}

export {
    defaultState,
    mockedRedux
};
