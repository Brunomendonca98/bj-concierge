import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../screens/AboutScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import HomeScreen from '../screens/HomeScreen';
import NewOrderScreen from '../screens/NewOrderScreen';
import ServicesScreen from '../screens/ServicesScreen';


export type RootStackParamList = {
Home: undefined;
Services: undefined;
NewOrder: undefined;
Confirmation: {
name: string;
email: string;
service: string;
date: string;
time: string;
pax: number;
};
About: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();


export default function RootNavigator() {
return (
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'BJ Concierge' }} />
<Stack.Screen name="Services" component={ServicesScreen} options={{ title: 'Serviços' }} />
<Stack.Screen name="NewOrder" component={NewOrderScreen} options={{ title: 'Novo Pedido' }} />
<Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{ title: 'Confirmação' }} />
<Stack.Screen name="About" component={AboutScreen} options={{ title: 'Sobre' }} />
</Stack.Navigator>
);
}