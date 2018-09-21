import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { currentNews } from './actions';


const mapDispatchToProps = dispatch => ({
    getCurrentNews: () => dispatch(currentNews())

});



class Footer extends React.Component {
    state = {}

    static navigationOptions = {
        title: 'footer'
   };

    

    goToNews = () => {
        this.props.getCurrentNews();
        this.props.navigation.navigate('news');
    }

    goToSearch = () => {
        this.props.navigation.navigate('home')
    }

    // goToLibrary = () => {
    //     this.props.navigation.navigate('news')
    // }


    render() { 
        
        return ( 
            <View style={{ flex: 1, flexDirection: 'row',}} >
                <Button
                title='News'
                onPress={this.goToNews}
                style={styles.Button}
                />
                <Button
                title='Search'
                onPress={this.goToSearch}
                style={styles.Button}
                />
            </View>
          );
    }
}

const styles = StyleSheet.create({
    Button: {
        height: 20,
        width: 40,
    },
});

 
export default connect (null, mapDispatchToProps)(Footer);