import React from 'react';
import './App.css';
import axios from 'axios';
//Components import
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Loader from './Components/Loader/Loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      screenShow: 'pictures',
      apiData: [],
      favorites: [],
      buttons: [{id: 1, title: "Pictures", dataName: "pictures", isActive: true},
        {id: 2, title: "Favorites", dataName: "favorites", isActive: false},]
    }
  }

  componentDidMount() {
    //получить данный с API
    axios.get('https://picsum.photos/v2/list')
      .then(res => {
        this.setState({
          apiData: this.state.apiData.concat(res.data),
          isLoading: false,
        });
      })
      .catch(error => console.log(error));
  };

  changeShowScreen = (btn) => {
    //смена экрана (компонента) при нажатии на кнопку
    this.setState({screenShow: btn.props.dataName});
    //цвет активной кнопки
    if (!btn.props.isActive) {
      let buttons = this.state.buttons.concat();
      buttons.forEach((el) => {
        el.isActive = el.dataName === btn.props.dataName;
      });
      this.setState({buttons})
    }
  };

  onLikeClick = (id) => {
    //отслеживать клик на лайк, добавлять или удалять в Избранное
    let apiData = this.state.apiData.concat();
    let favorites = this.state.favorites.concat();
    let needItem = apiData.find((c) => c.id === id);
    if (needItem.marked) {
      favorites.forEach((el, i) => {
        if (el.id === needItem.id) {
          favorites.splice(i, 1);
        }
      });
      this.setState({favorites, apiData});
      return needItem.marked = false;
    }
    needItem.marked = true;
    favorites.push(needItem);
    this.setState({favorites, apiData})
  };

  render() {
    return (
      <div className="App">
        <Header title="Choice your picture"/>
        { /* Сначала рендерится Loader, затем блок по умолчанию */}
        {
          this.state.isLoading ? <Loader/> : <Main param={this.state}
                                                   changeShowScreen={this.changeShowScreen}
                                                   onLikeClick={this.onLikeClick}/>
        }
      </div>
    );
  }
}

export default App;
