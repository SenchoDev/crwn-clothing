import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
  addCollectionAndDocument
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }

  //   collectionRef
  //     .get()
  //     .then((snapshot) => {
  //       const collectionMap = convertCollectionsSnapshotToMap(snapshot);
  //       dispatch(fetchCollectionsSuccess(collectionMap));
  //     })
  //     .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas(){
  yield all([call(fetchCollectionsStart)])
}