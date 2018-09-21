import React, { Component } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { titleSearch } from '../actions';


const mapDispatchToProps = dispatch => ({
    getGameInfo: (searchTerm) => dispatch(titleSearch(searchTerm))
})


class SearchPage extends Component {
    state = {
        input:'',
        
    }

    static navigationOptions = {
         title: 'Search'
    };



    buttonPress = () => {
        this.props.getGameInfo(this.state.input);
        this.props.navigation.navigate('searchresults')
    }
     


    render() { 
        return ( 
            <View>
                <TextInput
                onChangeText={(text) => this.setState({ input: text })}
                value={this.state.input}
                />
                <Button
                title='click'
                onPress={this.buttonPress}
                />

            </View>
         );
    }
}

 
export default connect(null, mapDispatchToProps)(SearchPage);