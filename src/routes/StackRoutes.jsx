import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home';
import Product from '../screens/Product';

const Stack = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Stack.Navigator
            screenOptions={{headerShown:false}}
            initialRouteName="home"   // o app abre na Home (Home -> Product)
        >   
            <Stack.Screen
                name="home"
                component={Home}
            />
            <Stack.Screen
                name="product"
                component={Product}
                options={{
                    headerTitle: "Listagem de Produtos",
                }}
            />
        </Stack.Navigator>
    )
}
