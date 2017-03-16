import React from 'react';

class UserData extends React.Component {
  constructor() {
    super();
    this.state = {
      artistData: []
    };
  }

  componentDidMount() {
    spotify().then(data => {
      this.setState({
        artistData: data
      });
    });
  }

  render() {
    const { artistData } = this.state;
    const genresList = artistData.genres;
    const images = artistData.images;
    return (<div>
      <p>Nuber of followers: {artistData.followers.total}</p>
      <div className="jumbotron">
      {images.map(img =>
        <img src={img.url} />
      )}
      </div>
      {genresList.map(genres =>
        <ul className="list-group">
          <li className="list-group-item">{genres}</li>
        </ul>
      )}
    </div>);
  }

}

const spotify = () => {
  return fetch('https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY')
    .then(response => {
      return response.json();
    })
    .then(({ followers, genres, images }) => ({ followers, genres, images }))
    .catch(error => {
      throw error;
    });
};


export default UserData;

