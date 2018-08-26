import { TaskListUI } from './TaskListUI';
import { TaskCounterUI } from './TaskCounterUI';

let list = new TaskListUI('#tasks');
let listCounter = new TaskCounterUI('#tasks-counter', list);
