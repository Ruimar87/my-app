import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Routes } from "./routes";

export default function App() {
   // Chamada de um arquivo onde irá conter as rotas/telas
   return (
      <GestureHandlerRootView style={{ flex: 1 }}>
         <Routes/>  {/* Routes = index.jsx */}
      </GestureHandlerRootView>
   )
}
