import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import config from '../../config';

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    };
  }

  updateText(text, field) {
    let newCredentials = Object.assign(this.state.credentials)
    newCredentials[field] = text;
    this.setState({
      credentials: newCredentials
    });
  }

  login() {
    let credentials = this.state.credentials;
    credentials.email = this.state.credentials.email.toLowerCase();
    fetch(config.baseUrl + 'login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
      .then((response) => response.json())
      .then(jsonResponse => {
        if (jsonResponse.confirmation === 'success') {
          this.props.navigation.navigate('main')
        } else {
          throw new Error(jsonResponse.message);
        }
      })
      .catch(err => {
        alert(JSON.stringify(err.message));
      });
  }

  render() {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.container}>
          <Text>Login Page</Text>
          <TextInput
            autoCapitalize='none'
            value={this.state.email}
            onChangeText={text => this.updateText(text, 'email')}
            placeholder="Email"
            autoCorrect={false}
            style={styles.input} />

          <TextInput
            autoCapitalize='none'
            value={this.state.password}
            onChangeText={text => this.updateText(text, 'password')}
            secureTextEntry
            placeholder="Senha"
            style={styles.input}
          />
          
          <TouchableOpacity style={styles.button} onPress={() => { this.login(); }}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerBar}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('register')}>
            <Text style={styles.navigateText}>Não tem conta? Cadastre-se.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100 + '%',
    width: 100 + '%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 30
  },

  input: {
    height: 40,
    width: 100 + '%',
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#F9F9F9',
    borderRadius: 6,
    marginHorizontal: 50,
    marginBottom: 15,
    paddingHorizontal: 10
  },

  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 20,
    backgroundColor: "#4BB0EE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },

  navigateText: {
    color: '#4BB0EE',
    fontSize: 16
  },

  footerBar: {
    width: 100 + '%',
    height: 80,
    marginTop: 20,
    backgroundColor: 'rgb(250,250,250)',
    borderTopColor: '#DDD',
    borderTopWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },

  footerContainer: {
    height: 100 + '%',
    width: 100 + '%',
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: "center",
    alignItems: "center"
  }
});