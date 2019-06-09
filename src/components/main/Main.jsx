import React, {PureComponent} from 'react';
import './main.css';
import {Redirect} from "react-router-dom";

class Main extends PureComponent{

    render() {
        if (this.props.history.action === 'POP') { // введен ли адрес ручками или перешел по нажатию на кнопку Войти
            return (
                <Redirect to='/' />
            )
        }
        return(
          <h1 style={{textAlign: 'center', marginTop: '0'}}>Вы на странице мейна!</h1>
        );
    }

}

export default Main;