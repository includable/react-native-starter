import { Navigation } from 'react-native-navigation';

// Load screens
import * as Screens from './screens';

// Display default screen
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: Screens.WELCOME
            }
          }
        ]
      }
    }
  });
});
