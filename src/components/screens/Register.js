import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import config from '../../config';

export default class Register extends Component {

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

    register() {
        fetch(config.baseUrl + 'cadastrar', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.credentials)
        })
            .then((response) => response.json())
            .then(jsonResponse => {
                if (jsonResponse.confirmation === 'success') {
                    this.props.navigation.navigate('main')
                } else {
                    throw new Error({ menssage: 'Desculpe, algo deu errado; Por favor, tente novamente' });
                }
            })
            .catch(err => {
                alert(err.menssage);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Register Page</Text>
                <TextInput
                    value={this.state.email}
                    onChangeText={text => this.updateText(text, 'email')}
                    placeholder="Usuário"
                    autoCorrect={false}
                    style={styles.input} />

                <TextInput
                    value={this.state.password}
                    onChangeText={text => this.updateText(text, 'password')}
                    secureTextEntry
                    placeholder="Senha"
                    style={styles.input}
                />
                
                <TouchableOpacity style={styles.button} onPress={() => { this.register(); }}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
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
    }
});