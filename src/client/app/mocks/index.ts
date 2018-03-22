import { IGlobalState } from '../store/model';
import { RootStore } from '@angular-redux/store/lib/src/components/root-store';
import { NgZone } from '@angular/core';

const defaultState: IGlobalState = {
    heroesState: {
        heroes: [
            {_id: '12345', name: 'Hero1'},
            {_id: '23456', name: 'Hero2'},
            {_id: '345678', name: 'Hero3'}
        ],
        pending: false,
        error: null,
        newHero: null,
        selectedHero: {_id: '23456', name: 'Hero2'},
        hero: null,
        filterHero: ''
    },
    routerReducer: null
};

function mockedRedux(state: any = defaultState): RootStore<any> {
    let initState = Object.assign({}, defaultState, state);
    const result = new RootStore(new NgZone({}));
    result.configureStore((s, a) => { return Object.assign({}, s, a.payload); }, initState);
    return result;
}

export {
    defaultState,
    mockedRedux
};
