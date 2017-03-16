import React from 'react';
import UserData from './UserData';

class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: []
    };
  }

  componentDidMount() {
    spotify().then(data => {
      this.setState({
        artist: data
      });
    });
  }

  render() {
    const { artist } = this.state;
    const artProfile = artist.artists[0];
    return (<div>
      <h1> Album details </h1>
      <div>{artProfile.name} </div>
      <UserData />
    </div>
    );
  }

}

const spotify = () => {
  return fetch('//api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj')
    .then(response => {
      return response.json();
    })
    .then(({ album_type, artists }) => ({ album_type, artists}))
    .catch(error => {
      throw error;
    });
};


export default UserProfile;

