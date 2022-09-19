import {AnimateBackgroundColor} from './AnimateBackgroundColor';
import { AnimateText } from './AnimateText';
import {AnimateWidth} from './AnimateWidth';
import {GestureHandlerDragDrop} from './GestureHandlerDragDrop';
import {HelloWorld} from './HelloWorld';
import {ScrollTo} from './ScrollTo';

export const TESTS = [
  {name: 'HelloWorld', component: HelloWorld},
  {name: 'AnimateBackgroundColor', component: AnimateBackgroundColor},
  {name: 'AnimateWidth', component: AnimateWidth},
  {name: 'AnimateText', component: AnimateText},
  {name: 'ScrollTo', component: ScrollTo},
  {name: 'GestureHandlerDragDrop', component: GestureHandlerDragDrop},
];
