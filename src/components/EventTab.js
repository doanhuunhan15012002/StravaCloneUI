import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BXH from '../screens/RankView/BXH';
import Invidual from '../screens/RankView/Invidual';
import GroupRank from '../screens/RankView/GroupRank';
const Tab = createMaterialTopTabNavigator();

export default function EventTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="GroupRank" component={GroupRank} />
      <Tab.Screen name="Invidual" component={Invidual} />
      <Tab.Screen name="BXH" component={BXH} />
    </Tab.Navigator>
  );
}