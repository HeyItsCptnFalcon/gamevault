import React, { Component } from 'react';
import { Button, Image, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';


const mapStateToProps = state => ({
    isLoading: state.isLoading,
    gameData: state.gameData
})

class SearchResults extends Component {
    static navigationOptions = {
        title: 'Search Results'
    };

    render() {
        return (
            <ScrollView>
                <FlatList
                    // [ string ]
                    data={this.props.gameData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('gamedetails', { item })}>

                            <View style={{ height: 200, width: 200 }}>
                                <View><Text>Title: {item.name}</Text></View>
                                {item.cover &&

                                    <View><Image source={{ uri: 'https:' + item.cover.url }} style={{ width: 400, height: 600 }} /></View>
                                }
                                <View><Text>Game-ID: {item.id}</Text></View>

                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, i) => i + ''}
                />
            </ScrollView>


        );
    }
}

export default connect(mapStateToProps, null)(SearchResults);