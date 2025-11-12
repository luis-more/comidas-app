import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text> SignIn</Text>
      <Button title='Iniciar sesión' onPress={()=> router.push(href='/sign-up')} />
    </View>
  )
}

export default SignIn