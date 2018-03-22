import { IGlobalState } from '../store/model';
import { RootStore } from '@angular-redux/store/lib/src/components/root-store';
import { NgZone } from '@angular/core';

const state: IGlobalState = {
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

function mockedRedux(): RootStore<any> {
    const result = new RootStore(new NgZone({}));
    result.configureStore((s, a) => s, state);
    return result;
}

export {
    state,
    mockedRedux
};
