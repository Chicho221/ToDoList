import './style.css';
import DOManipulator from './toDoFunctions.js';

const domManipulator = DOManipulator();
let toDos = {
    'today': [],
    'week': [],
}

domManipulator.reloadPage();
domManipulator.firstLoad();



