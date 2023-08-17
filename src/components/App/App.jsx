import React, { Component } from 'react';
// import { toast } from 'react-toastify';
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
    const prevQuery = prevState.query;
    const searchQuery = this.state.query;
    const prevPage = prevState.page;
    const nexPage = this.state.page;

    if (prevQuery !== searchQuery || prevPage !== nexPage) {
      this.loadResult();
    }
  };

  loadResult = async () => {
    const searchQuery = this.state.query;
    const nexPage = this.state.page;

    try {
      this.setState({ loading: true });
      const img = await fetchImages(searchQuery, nexPage);
      if (img.length) {
        this.setState(prevState => ({
          images: this.state.page > 1 ? [...prevState.images, ...img] : img,
        }));
        this.setState({ loading: false });
      } else {
        console.log('Sorry, there are no images matching your search query. Please try again.')
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.changeQuery(evt.target.elements.query.value);
    evt.target.reset();
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  

  render () {

    const { loading, images } = this.state;
    return (
      <Wrapper>
        <Searchbar onSubmit={ this.handleSubmit } />
        { loading && (<Spinner><InfinitySpin width='200' color="#3f51b5" /></Spinner>) }
        {images.length > 0 && (<Gallery imgItems={ images } />)} 
        <LoadMore onClick={ this.handleLoadMore } />
      </Wrapper>
    )
  }
};
