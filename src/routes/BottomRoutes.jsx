import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Product from "../screens/Product";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import { StackRoutes } from "./StackRoutes";

const Bottom = createBottomTabNavigator();

export function BottomRoutes() {
  return (

    <Bottom.Navigator

      initialRouteName="home"

      screenOptions={{

        headerShown: false,
        tabBarActiveTintColor: "#7C3AED",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarShowLabel: true,

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },

        tabBarStyle: {
          height: 76,
          paddingBottom: 12,
          paddingTop: 10,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
        },
      }}
    >
      {/* ---------------------------------------------------------------*/}
      <Bottom.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* ---------------------------------------------------------------*/}
      <Bottom.Screen
        name="product"
        component={Product}
        options={{
          tabBarLabel: "Produtos",

          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: "#EF4444",
            color: "#FFFFFF",
            fontSize: 11,
          },
        }}
      />

      {/* ---------------------------------------------------------------*/}
      <Bottom.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* ---------------------------------------------------------------*/}
      <Bottom.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}

// ----------------------------------------------------------------------------
export function BottomAninhadoRoutes() {
  return (
    <Bottom.Navigator
      initialRouteName="homeStack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#7C3AED",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
        tabBarStyle: {
          height: 76,
          paddingBottom: 12,
          paddingTop: 10,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
        },
      }}
    >
      {/* ABA 1 - INÍCIO: o Stack inteiro (home -> product) */}
      <Bottom.Screen
        name="homeStack"
        component={StackRoutes}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* ABA 2 - PRODUCT (com o badge) */}
      <Bottom.Screen
        name="product"
        component={Product}
        options={{
          tabBarLabel: "Produtos",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: "#EF4444",
            color: "#FFFFFF",
            fontSize: 11,
          },
        }}
      />

      {/* ABA 3 - PROFILE (ícone preenchido/vazado com "focused") */}
      <Bottom.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* ABA 4 - SETTINGS */}
      <Bottom.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}


