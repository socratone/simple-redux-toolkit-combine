import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

export default function () {
  return configureStore({ reducer });
}

/**
 * @reduxjs/toolkit을 썼을 때의 장점
 * 
 * 1. redux dev tools 설정을 자동으로 해준다.
 * 2. dispatch asynchronous actions
 */