import { Redirect, Slot } from 'expo-router';

export default function _layout() {
  const iSAuthenticated = false;

  if(!iSAuthenticated) return <Redirect href='/(auth)/sign-in'/>
  return <Slot />
}