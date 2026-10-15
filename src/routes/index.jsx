import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";
import { BottomRoutes } from "./BottomRoutes";
import { DrawerRoutes, DrawerAninhadoRoutes } from "./DrawerRoutes";

const TIPO_DE_NAVEGACAO = "bottom";

export function Routes() {
    return(
        <NavigationContainer>

            {TIPO_DE_NAVEGACAO === "stack" && <StackRoutes/>}  
            {TIPO_DE_NAVEGACAO === "bottom" && <BottomRoutes/>}
            {TIPO_DE_NAVEGACAO === "drawer" && <DrawerRoutes/>}
            {TIPO_DE_NAVEGACAO === "aninhado" && <DrawerAninhadoRoutes/>}
            
        </NavigationContainer>
    )
}
