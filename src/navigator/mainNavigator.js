import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen28547Navigator from '../features/BlankScreen28547/navigator';
import BlankScreen18546Navigator from '../features/BlankScreen18546/navigator';
import BlankScreen28545Navigator from '../features/BlankScreen28545/navigator';
import BlankScreen18544Navigator from '../features/BlankScreen18544/navigator';
import CalendarView38543Navigator from '../features/CalendarView38543/navigator';
import EmailAuth48542Navigator from '../features/EmailAuth48542/navigator';
import CalendarView38541Navigator from '../features/CalendarView38541/navigator';
import EmailAuth48540Navigator from '../features/EmailAuth48540/navigator';
import BlankScreen28539Navigator from '../features/BlankScreen28539/navigator';
import BlankScreen18538Navigator from '../features/BlankScreen18538/navigator';
import BlankScreen98537Navigator from '../features/BlankScreen98537/navigator';
import BlankScreen28536Navigator from '../features/BlankScreen28536/navigator';
import BlankScreen18535Navigator from '../features/BlankScreen18535/navigator';
import CalendarView38534Navigator from '../features/CalendarView38534/navigator';
import EmailAuth48533Navigator from '../features/EmailAuth48533/navigator';
import CalendarView38532Navigator from '../features/CalendarView38532/navigator';
import EmailAuth48531Navigator from '../features/EmailAuth48531/navigator';
import BlankScreen28530Navigator from '../features/BlankScreen28530/navigator';
import BlankScreen18529Navigator from '../features/BlankScreen18529/navigator';
import BlankScreen98528Navigator from '../features/BlankScreen98528/navigator';
import BlankScreen28527Navigator from '../features/BlankScreen28527/navigator';
import BlankScreen18526Navigator from '../features/BlankScreen18526/navigator';
import CalendarView38525Navigator from '../features/CalendarView38525/navigator';
import EmailAuth48524Navigator from '../features/EmailAuth48524/navigator';
import CalendarView38523Navigator from '../features/CalendarView38523/navigator';
import EmailAuth48522Navigator from '../features/EmailAuth48522/navigator';
import BlankScreen28521Navigator from '../features/BlankScreen28521/navigator';
import BlankScreen18520Navigator from '../features/BlankScreen18520/navigator';
import BlankScreen28518Navigator from '../features/BlankScreen28518/navigator';
import BlankScreen18517Navigator from '../features/BlankScreen18517/navigator';
import CalendarView38516Navigator from '../features/CalendarView38516/navigator';
import EmailAuth48515Navigator from '../features/EmailAuth48515/navigator';
import CalendarView38514Navigator from '../features/CalendarView38514/navigator';
import EmailAuth48513Navigator from '../features/EmailAuth48513/navigator';
import BlankScreen28512Navigator from '../features/BlankScreen28512/navigator';
import BlankScreen18511Navigator from '../features/BlankScreen18511/navigator';
import BlankScreen98510Navigator from '../features/BlankScreen98510/navigator';
import BlankScreen28509Navigator from '../features/BlankScreen28509/navigator';
import BlankScreen18508Navigator from '../features/BlankScreen18508/navigator';
import CalendarView38507Navigator from '../features/CalendarView38507/navigator';
import EmailAuth48506Navigator from '../features/EmailAuth48506/navigator';
import CalendarView38505Navigator from '../features/CalendarView38505/navigator';
import EmailAuth48504Navigator from '../features/EmailAuth48504/navigator';
import BlankScreen28503Navigator from '../features/BlankScreen28503/navigator';
import BlankScreen18502Navigator from '../features/BlankScreen18502/navigator';
import BlankScreen98499Navigator from '../features/BlankScreen98499/navigator';
import BlankScreen28498Navigator from '../features/BlankScreen28498/navigator';
import BlankScreen18497Navigator from '../features/BlankScreen18497/navigator';
import CalendarView38496Navigator from '../features/CalendarView38496/navigator';
import EmailAuth48495Navigator from '../features/EmailAuth48495/navigator';
import CalendarView38494Navigator from '../features/CalendarView38494/navigator';
import EmailAuth48493Navigator from '../features/EmailAuth48493/navigator';
import BlankScreen28492Navigator from '../features/BlankScreen28492/navigator';
import BlankScreen18482Navigator from '../features/BlankScreen18482/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen28547: { screen: BlankScreen28547Navigator },
BlankScreen18546: { screen: BlankScreen18546Navigator },
BlankScreen28545: { screen: BlankScreen28545Navigator },
BlankScreen18544: { screen: BlankScreen18544Navigator },
CalendarView38543: { screen: CalendarView38543Navigator },
EmailAuth48542: { screen: EmailAuth48542Navigator },
CalendarView38541: { screen: CalendarView38541Navigator },
EmailAuth48540: { screen: EmailAuth48540Navigator },
BlankScreen28539: { screen: BlankScreen28539Navigator },
BlankScreen18538: { screen: BlankScreen18538Navigator },
BlankScreen98537: { screen: BlankScreen98537Navigator },
BlankScreen28536: { screen: BlankScreen28536Navigator },
BlankScreen18535: { screen: BlankScreen18535Navigator },
CalendarView38534: { screen: CalendarView38534Navigator },
EmailAuth48533: { screen: EmailAuth48533Navigator },
CalendarView38532: { screen: CalendarView38532Navigator },
EmailAuth48531: { screen: EmailAuth48531Navigator },
BlankScreen28530: { screen: BlankScreen28530Navigator },
BlankScreen18529: { screen: BlankScreen18529Navigator },
BlankScreen98528: { screen: BlankScreen98528Navigator },
BlankScreen28527: { screen: BlankScreen28527Navigator },
BlankScreen18526: { screen: BlankScreen18526Navigator },
CalendarView38525: { screen: CalendarView38525Navigator },
EmailAuth48524: { screen: EmailAuth48524Navigator },
CalendarView38523: { screen: CalendarView38523Navigator },
EmailAuth48522: { screen: EmailAuth48522Navigator },
BlankScreen28521: { screen: BlankScreen28521Navigator },
BlankScreen18520: { screen: BlankScreen18520Navigator },
BlankScreen28518: { screen: BlankScreen28518Navigator },
BlankScreen18517: { screen: BlankScreen18517Navigator },
CalendarView38516: { screen: CalendarView38516Navigator },
EmailAuth48515: { screen: EmailAuth48515Navigator },
CalendarView38514: { screen: CalendarView38514Navigator },
EmailAuth48513: { screen: EmailAuth48513Navigator },
BlankScreen28512: { screen: BlankScreen28512Navigator },
BlankScreen18511: { screen: BlankScreen18511Navigator },
BlankScreen98510: { screen: BlankScreen98510Navigator },
BlankScreen28509: { screen: BlankScreen28509Navigator },
BlankScreen18508: { screen: BlankScreen18508Navigator },
CalendarView38507: { screen: CalendarView38507Navigator },
EmailAuth48506: { screen: EmailAuth48506Navigator },
CalendarView38505: { screen: CalendarView38505Navigator },
EmailAuth48504: { screen: EmailAuth48504Navigator },
BlankScreen28503: { screen: BlankScreen28503Navigator },
BlankScreen18502: { screen: BlankScreen18502Navigator },
BlankScreen98499: { screen: BlankScreen98499Navigator },
BlankScreen28498: { screen: BlankScreen28498Navigator },
BlankScreen18497: { screen: BlankScreen18497Navigator },
CalendarView38496: { screen: CalendarView38496Navigator },
EmailAuth48495: { screen: EmailAuth48495Navigator },
CalendarView38494: { screen: CalendarView38494Navigator },
EmailAuth48493: { screen: EmailAuth48493Navigator },
BlankScreen28492: { screen: BlankScreen28492Navigator },
BlankScreen18482: { screen: BlankScreen18482Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
