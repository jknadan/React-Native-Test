/**
 * @format
 */

import {AppRegistry} from 'react-native';

// 해당 파일 및 경로 수정으로 메인 화면 보여주기
import App from './src/App';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
