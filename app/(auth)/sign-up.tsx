import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Button title='Registrate' onPress={()=> router.push(href='/sign-in')} />
    </View>
  )
}

export default SignUp