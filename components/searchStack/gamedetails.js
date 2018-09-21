import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const mapStatetoProps = state => ({
    isLoading: state.isLoading,
})

class GameDetails extends Component {
    static navigationOptions = {
        title: 'Game Details'
    }


    render() {
        const detail = this.props.navigation.getParam('item', {});

        console.log('detail', detail)

        return (

            <View>

                <Text>Game Details Go Here</Text>

            </View>
        )
    }
}

export default connect(mapStatetoProps, null)(GameDetails);