
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import { WebView } from 'react-native-webview';
import Iframe from 'react-iframe';
const mapp = require('./mapss.html')

export async function requestLocationPermission() 
{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Example App',
        'message': 'Example App access to your location '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location")
      alert("You can use the location");
    } else {
      console.log("location permission denied")
      alert("Location permission denied");
    }
  } catch (err) {
    console.warn(err)
  }
}
type Props = {};
export default class App extends Component<Props> {
  


async componentWillMount() {
  await requestLocationPermission()
  }
  render() {


    return (
  //     <WebView
  //     html={mapp}
  //     // style={{ width:300,height:500 }}
  //     onLoadProgress={e => console.log(e.nativeEvent.progress)}
  // />
  <WebView
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          style={{ height: 500, width: 300 }}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> 
                    <body>
                      <div id="baseDiv"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28252.301148445527!2d85.3188608!3d27.7315584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sne!2snp!4v1539694749445" width="2000" height="2000" frameborder="0" style="border:0" allowfullscreen></iframe></div>
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
    //    <View>
    //      <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
    // width="450px"
    // height="450px"
    // id="myId"
    // className="myClassname"
    // display="initial"
    // position="relative"
    // allowFullScreen/>
    //    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
