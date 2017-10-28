import styles from '../styles/styles.scss';//eslint-disable-line
import MainView from './MainView';

jQuery(function($) { //eslint-disable-line
    const mainView = new MainView();
    mainView.init($);
});