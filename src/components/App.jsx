import { fetchImages } from 'API';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1
  };

  changeQuery = newQuery => {
    // const queryId = `${Date.now()}/${newQuery}`;
    // const query = queryId.split('/');
    // const exstractedQuery = query[1];

    this.setState({
      query: newQuery,
      images: [],
      page: 1
    });
  };

  componentDidUpdate = async (prevProps, prevState) => {
     if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
         
      
      try {
        const img = await fetchImages(this.state.query, this.state.page);
        this.setState({ images: img });
      } catch (error) {
        console.log(error);
       }
     }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  

  render() {
    return (
      <div>
        <div>
          <form onSubmit={(evt) => {
            evt.preventDefault();
            this.changeQuery(evt.target.elements.query.value)
          }}>
            <input type="text" name="query"/>
            <button>Search</button>
          </form>
        </div>
        
        <div>Gallery</div>

        <div>
          <button onClick={this.handleLoadMore}>LoadMore</button>
        </div>
      </div>
    )
  }
};
