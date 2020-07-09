import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView38496Reducer from '../features/CalendarView38496/redux/reducers';
import EmailAuth48495Reducer from '../features/EmailAuth48495/redux/reducers';
import CalendarView38494Reducer from '../features/CalendarView38494/redux/reducers';
import EmailAuth48493Reducer from '../features/EmailAuth48493/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView38496: CalendarView38496Reducer,
EmailAuth48495: EmailAuth48495Reducer,
CalendarView38494: CalendarView38494Reducer,
EmailAuth48493: EmailAuth48493Reducer,

});