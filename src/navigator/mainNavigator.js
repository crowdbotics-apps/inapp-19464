import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps89323Navigator from '../features/Maps89323/navigator';
import Add-Item89322Navigator from '../features/Add-Item89322/navigator';
import Maps89318Navigator from '../features/Maps89318/navigator';
import UserProfile89314Navigator from '../features/UserProfile89314/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps89323: { screen: Maps89323Navigator },
Add-Item89322: { screen: Add-Item89322Navigator },
Maps89318: { screen: Maps89318Navigator },
UserProfile89314: { screen: UserProfile89314Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
