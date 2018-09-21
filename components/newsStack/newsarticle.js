import React, { Component } from 'react';
import { WebView } from 'react-native';
import { connect } from 'react-redux';

const mapStatetoProps = state => ({
    isLoading: state.isLoading,
})

class NewsArticle extends Component {
    static navigationOptions = {
        title: 'Article'
    }


    render() {
        const article = this.props.navigation.getParam('item', {});

        console.log('article', article)
        console.log('url', article.url)
        return (
            <WebView
                originWhitelist={['*']}
                source={{ uri: article.url }} />

        );
    }
}

export default connect(mapStatetoProps, null)(NewsArticle);