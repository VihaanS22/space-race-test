import React, { Component } from 'react';
import  WebView  from 'react-native-webview';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://vihaans22.github.io/The-Space-Race/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
