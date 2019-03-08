import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../../config';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get('window').width
        };
    }

    likedToggle() {
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageSelection = this.props.item % 2 === 0 
        ? 'https://lh3.googleusercontent.com/KDvqN4s2ANCKFz923N3VJ4hJYOmopWT4UiNPM0SDVCg6vvVdlMN815cRBlSiS0DllFR8Bs5GhKv3ShBbzzv7th5w' 
        : 'https://lh3.googleusercontent.com/zw_iU_oGSP79ACcWk8Eg_pAVXDHN8asjWDxTzm1E4tRuOdS1NxKfuC3oTVMKYcquiXBo0H0y7XK_kyYuGHjUjlUR_FA';
        const imageUri = imageSelection + '=s' + imageHeight + '-c';

        const heartIconColor = (this.state.liked) ? 'rgb(252,61,57)' : null;
        const heartIconChange = (this.state.liked) ? 'heart' : 'heart-o';

        return (
            <View style={{ flex: 1, width: 100 + '%' }}>
            <View style={styles.userBar}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={styles.userPic}
                        source={{
                            uri:
                                'https://static.getjar.com/icon-50x50/d3/947675_thm.png'
                        }}
                    />
                    <Text style={{ marginLeft: 10 }}>wbpassarelli</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>...</Text>
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    this.likedToggle();
                }}
            >
                <Image
                    style={{ width: this.state.screenWidth, height: 400 }}
                    source={{
                        uri: imageUri
                    }} />
            </TouchableOpacity>
            <View style={styles.iconBar}>
                <Icon style={styles.icon} name={heartIconChange} size={28} color={heartIconColor} />
                <Icon style={styles.icon} name="comment-o" size={28} />
                <Icon style={styles.icon} name="paper-plane-o" size={28} />
            </View>
            <View style={styles.iconBar}>
                <Icon style={styles.icon} name="heart" size={18} color="#000" />
                <Text>140 Likes</Text>
            </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + '%',
        height: 56,
        marginTop: 20,
        backgroundColor: 'rgb(250,250,250)',
        borderColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },

    userBar: {
        width: 100 + '%',
        height: config.styleConstants.rowHeight,
        backgroundColor: 'rgb(255,255,255)',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + '%',
        borderColor: 'rgb(233,233,233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 10
    },

});

export default Post;