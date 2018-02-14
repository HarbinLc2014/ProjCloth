import React from 'react';
import {Text, View, Modal, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, ImageBackground} from 'react-native';
import CardSection from './CardSection2';
import Button from './Button';
import Card from './Card';
import Images from './Image';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Profile = (props) => {
    this.state = {friendShow: false, src: null};
    const {
        containerStyle, textStyle, cardSectionStyle, textStyle3, cardSectionStyle3, textStyle4,
        imageStyle, cardSectionStyle2, textStyle2, imageStyle2, imageStyle3, imageStyle4
    } = styles;


      this.state.src = props.library.src;

    /* eslint-disable global-require */
    return (
        <Modal
            visible={props.visible}
            transparent
            animationType="slide"
            onRequestClose={() => {
            }}

        >
            <TouchableWithoutFeedback onPress={props.Accept}>
                <View style={containerStyle}>
                    <TouchableWithoutFeedback>
                        <View>
                            <CardSection style={cardSectionStyle2}>
                                <View style={{ width: null, flex: 1, marginBottom: 30 }}>
                                <Text style={textStyle4}>{props.library.type}</Text>
                                </View>
                                <View style={{ marginTop: 15 }}>
                                <Image source={this.state.src} style={imageStyle} resizeMode='contain' />
                                </View>
                                <View style={{flexDirection: 'column'}}>
                                <Text style={textStyle2}>款式: {props.library.code}</Text>
                                <Text style={textStyle2}>价格: ¥{props.library.price}</Text>
                                </View>
                            </CardSection>
                        {/*    <CardSection>
                                <Button
                                    status={this.state.friendShow}
                                    style={{height: 20}}
                                    style2={{textDecorationLine: 'none', fontSize: 13, paddingTop: 4}}
                                >资料</Button>
                                <Button
                                    style={{
                                        marginRight: 5
                                    }}
                                    style2={{textDecorationLine: 'none', fontSize: 13, paddingTop: 4}}
                                    style={{height: 20}}
                                    status={!this.state.friendShow}
                                >
                                    状态
                                </Button>
                            </CardSection>*/}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    cardSectionStyle2: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    cardSectionStyle3: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
    },
    textStyle2: {
        lineHeight: 40,
        fontSize: 18,
        textAlign: 'center',
        color: '#ffffff'

    },
    textStyle3: {
        lineHeight: 40,
        fontSize: 15,
        marginLeft: 10
    },
    textStyle4: {
      lineHeight: 40,
      fontSize: 25,
      textAlign: 'center',
      color: '#ffffff',
      fontWeight: 'bold'
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.65)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    imageStyle: {
        height: SCREEN_WIDTH-20,
        width: SCREEN_WIDTH-20,
        borderWidth: 0,
        borderRadius: 5
    },
    imageStyle2: {
        height: 20,
        width: 20,
        marginRight: 20
    },
    imageStyle3: {
        height: 15,
        width: 15
    },
    imageStyle4: {
        height: 15,
        width: 15,
        marginRight: 25
    },
};

export default Profile;
