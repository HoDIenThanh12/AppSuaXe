import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';
import { height, width } from '../../common/styles';

class InfoWorker extends Base {
  constructor(props) {
    super(props);
    this.page = Page;
    this.state = {
    };
  }

  componentDidMount() {
    const { item } = this.props;
  }

  onPressSetup=() => {

  }

  onPressCall=() => {

  }

  render() {
    const Template = this.view;
    return (
      <Template
        title={In18.NomalTitle.titleInforWord}
        noFooter={false}
        props={this.props}
        func={this}
        state={this.state}

      />
    );
  }
}
export default InfoWorker;
