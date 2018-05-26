import React, { Component, Fragment } from 'react';
import Swiper from 'react-native-deck-swiper';
import styled from 'styled-components';

class App extends Component {
    constructor() {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <Fragment>
                {' '}
                <Swiper
                    cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
                    renderCard={card => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.text}>{card}</Text>
                            </View>
                        );
                    }}
                    onSwiped={cardIndex => {
                        console.log(cardIndex);
                    }}
                    onSwipedAll={() => {
                        console.log('onSwipedAll');
                    }}
                    cardIndex={0}
                    backgroundColor={'#4FD0E9'}
                    stackSize={3}
                >
                    <Button
                        onPress={() => {
                            console.log('oulala');
                        }}
                        title="Press me"
                    >
                        You can press me
                    </Button>
                </Swiper>
            </Fragment>
        );
    }
}

export default App;
