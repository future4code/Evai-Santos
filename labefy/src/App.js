import React from "react";
import styled from "styled-components";
import AddPlaylist from "./components/AddPlaylist";
import Playlists from "./components/Playlists";

const AppConteiner = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: whitesmoke;
  margin: 0;
`;

const Headers = styled.header`
  background-image: linear-gradient(to right, green, darkgreen, green, green);
  color: black;
  font-size: 30px;
  padding-bottom: 1%;
  padding-left: 5%;
  margin: 0;
`;

const LogoContainer = styled.img`
  width: 5%;
  padding-top: 1%;
  margin: 0;
`;

const Footers = styled.footer`
  background-image: linear-gradient(to right, green, darkgreen, green, green);
  display: flex;
  justify-content: center;
  position: absolute;
  width: 99%;
  height: 20%;
  padding-bottom: 0;
  margin: 0;
`;

const SocialContainer = styled.img`
  width: 3%;
  padding-top: 1%;
  padding-right: 2%;
  padding-left: 5%;
  margin: 0;
`;

class App extends React.Component {
  state = {
    currentPage: "addPlaylist"
  };

  changePage = () => {
    if (this.state.currentPage === "addPlaylist") {
      this.setState({ currentPage: "playlists" });
    } else {
      this.setState({ currentPage: "addPlaylist" });
    }
  };

  render() {
    return (
      <AppConteiner>
        <Headers>
          <strong>Labefy</strong>
        </Headers>
        {this.state.currentPage === "addPlaylist" ? (
          <AddPlaylist changePage={this.changePage} />
        ) : (
          <Playlists changePage={this.changePage} />
        )}
        <Footers>
          
        </Footers>
      </AppConteiner>
    );
  }
}

export default App;