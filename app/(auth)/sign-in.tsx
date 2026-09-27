import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const Signin = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href='/(auth)/sign-up'>Create Account</Link>
    </View>
  )
}

export default Signin
