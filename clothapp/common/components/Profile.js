import React from 'react';
import {Text, View, Modal, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions} from 'react-native';
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

    if (props.library.type === 'title') {
      const a = props.library.thumbnail;
      this.state.src = Images.title[a];
    }
    else if (props.library.type === 'big') {
      const a = props.library.thumbnail;
      this.state.src = Images.big[a];
    }
    else {
      this.state.src = Images.big[0];
    }

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
                                <Image source={this.state.src} style={imageStyle} resizeMode='contain' />
                                <Text style={textStyle2}>{props.library.title}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={require('../../assets/images/timg.jpeg')} style={imageStyle2}/>
                                    <Text style={textStyle}>22</Text>
                                </View>

                                <View style={{flexDirection: 'row', paddingTop: 7, paddingBottom: 10}}>
                                    <Image source={require('../..//assets/images/red.png')} style={imageStyle4}/>
                                    <Image source={require('../../assets/images/blue.png')} style={imageStyle3}/>
                                </View>
                            </CardSection>
                            <CardSection>
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
                            </CardSection>

                            <CardSection style={cardSectionStyle3}>
                                <Text style={textStyle3}>{props.children}</Text>
                                <Text style={textStyle4}>你喜欢教父的哪一部?</Text>
                            </CardSection>
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
        backgroundColor: '#ffffff'
    },
    cardSectionStyle3: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderWidth: 0,
        backgroundColor: '#ffffff'
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
    },
    textStyle2: {
        lineHeight: 40,
        fontSize: 18,
        textAlign: 'center',

    },
    textStyle3: {
        lineHeight: 40,
        fontSize: 15,
        marginLeft: 10
    },
    textStyle4: {
        lineHeight: 40,
        fontSize: 13,
        marginLeft: 10
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.65)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    imageStyle: {
        height: (SCREEN_WIDTH*2)/3,
        width: (SCREEN_WIDTH*2)/3,
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
