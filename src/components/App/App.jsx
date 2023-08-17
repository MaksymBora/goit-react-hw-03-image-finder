import { fetchImages } from 'API';
import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { Gallery } from '../ImageGallery/ImageGallery';
import { LoadMore } from '../LoadMore/LoadMore';
import {Wrapper} from './App.styled'

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1
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
        const img = await fetchImages(this.state.query, this.state.page);
        return this.setState({ images: img.data.hits });
        
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
        <Gallery imgItems={ this.state.images} />
        <LoadMore onClick={this.handleLoadMore}/>
      </Wrapper>
    )
  }
};
