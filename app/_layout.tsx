import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from 'react-native';
// import { Stack } from "expo-router";

export default function RootLayout() {
    return <GluestackUIProvider mode="light"><View style={styles.container}>
        <Text>Hello World!</Text>;
        </View></GluestackUIProvider>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  