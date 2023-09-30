import {call, all, spawn} from 'redux-saga/effects'
import connectorsSaga from './store/connectors/saga';



function* rootSaga() {
  const sagas: any[] = [
    connectorsSaga
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      try {
        yield call(saga);
      } catch (e) {
        console.error(e);

      }
    }))
  );
}

export default rootSaga;
