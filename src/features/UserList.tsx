import { FlatList, Text, View } from 'react-native'
import { users } from '../entities/Users'

export default function UserList() {

  const renderItem = ({ item }: any) => (
    <View>
      <Text>{item.name} {item.age}</Text>
    </View>
  )

  return (
    <View>
      <FlatList 
      data={users}
      renderItem={renderItem}
      />
    </View>
  )
}