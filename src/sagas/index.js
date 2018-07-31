// @flow

import { previousBlocksSaga, blockTransactionsSaga } from './blocksSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga(): Generator<any, any, any> {
    yield all([
        previousBlocksSaga(),
        blockTransactionsSaga()
    ]);
}
