import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const Signup = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Link href='/(auth)/sign-up'>Sign in</Link>
    </View>
  )
}

export default Signup
