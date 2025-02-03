import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, Linking } from 'react-native';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'react-native';
export default function App() {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleSurprise = () => {
    setShowAnimation(true);
    Alert.alert('🎉 Happy Birthday! 🎉', "Let's Celebrate, and PARTYYY!!! 🥳", [
      {
        text: "Let's Party!! ", onPress: () => {
          setShowAnimation(false);
          Linking.openURL('https://youtu.be/sqkzN2Ye_pk?si=vVGK8UvyhMp8VYvv');
        },
      },
    ]);
  };

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#f2e1fc"/>
    <View style={styles.container}>
      {showAnimation && (
        <LottieView
        source={require('./assets/balloons.json')}
        autoPlay
        loop
        style={styles.animation}
        />
      )}
      <Text style={styles.title}>🎂 Happy Birthday 🎂</Text>
      <Image
        source={require('./assets/Birthdaybanner.png')}
        style={styles.image}
        />
      <Text style={styles.message}>
        🥳Wishing you a day filled with joy, love, and laughter.😁 You are an amazing friend🏆 May all your dreams come true and may this year be your best one yet!🤞
        ✨
      </Text>
      <Button title="Tap for a Surprise!" onPress={handleSurprise} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fbf5ff',
    alignItems: 'center',
    padding: 2,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#d7263d',
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 200,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#6a0572',
  },
  animation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});










// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
