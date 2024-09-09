import { Text, View } from "react-native";
import UserList from "../features/UserList";


export default function MainPage() {
  return (
    <View>
      <Text style={{ fontSize: 30, }}>pages 폴더</Text>
      <UserList />
    </View>
  )
}