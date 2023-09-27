import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { useSession } from '../utils/ctx';

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          signIn();
        }}>
        Sign In
      </Text>
    </View>
  );
}
