import {all} from 'redux-saga/effects';
import { authSaga } from '../saga/authSaga';
import { profileSaga } from '../saga/userProfileSaga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        profileSaga()
    ])
}

