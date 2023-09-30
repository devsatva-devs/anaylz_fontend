import { takeLatest } from 'redux-saga/effects';

import {
  fetchConnectersReducer
} from './slice';


export function* fetchAllConnecters() {
   
}


export default function* connectorsSaga() {
    yield takeLatest(fetchConnectersReducer.type, fetchAllConnecters);

}
