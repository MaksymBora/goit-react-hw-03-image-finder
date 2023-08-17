import React, { Component } from 'react';
import { InfinitySpin } from  'react-loader-spinner'
import { fetchImages } from 'API';
import { Searchbar } from '../Searchbar/Searchbar';
import { Gallery } from '../ImageGallery/ImageGallery';
import { LoadMore } from '../LoadMore/LoadMore';
import {Wrapper, Spinner} from './App.styled'

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  };

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1
    });
    
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {

      try {
        this.setState({ loading: true });
        const img = await fetchImages(this.state.query, this.state.page);
        return this.setState({
          images:  img.data.hits, loading: false,
        });
        
      } catch (error) {
        console.log(error);
      }
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.changeQuery(evt.target.elements.query.value);
    evt.target.reset();
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  

  render () {
    return (
      <Wrapper>
        <Searchbar onSubmit={ this.handleSubmit} />
        {this.state.loading ? (<Spinner><InfinitySpin width='200'color="#3f51b5" /></Spinner> )  : (<Gallery imgItems={ this.state.images } />)}
        <LoadMore onClick={this.handleLoadMore}/>
      </Wrapper>
    )
  }
};
