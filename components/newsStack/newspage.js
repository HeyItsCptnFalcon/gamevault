import React, { Component } from 'react';
import { Image, Text, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { currentNews } from '../actions';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  news: state.news,

})

const mapDispatchToProps = dispatch => ({
  loadNews: () => dispatch(currentNews())
})

class NewsPage extends Component {

  
  static navigationOptions = {
    title: "Recent News"
  }
  

  componentDidMount() {
    this.props.loadNews();
  }


  render() {
    return this.props.news.length > 0 &&
      (
        <FlatList
          refreshControl={
            <RefreshControl 
            refreshing={this.props.isLoading}
            onRefresh={this.props.loadNews}
            />
          }
          style={{ flex: 1 }}
          data={this.props.news}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                flex: 1,
                height: 100,
                backgroundColor: 'powderblue',
                marginTop: 10,
                marginHorizontal: 10,
                borderRadius: 15,
                alignItems: 'center'
              }}
              onPress={() => this.props.navigation.navigate('Article', { item })}
            >
              {item.pulse_image && (
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 75, width: 150 }}
                  resizeMode="center"
                />
              )}
              <Text
                style={{ fontSize: 17,
                  width: 230,
                  textDecorationLine: 'underline', 
                  textAlign: 'left',
                  textAlignVertical:'center'
              }}

              adjustsFontSizeToFit={true}
              >
              
              {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, i) => i + ''}
        />
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);