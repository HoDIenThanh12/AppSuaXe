import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import User from 'modals/Users';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';
// import User from '../../modals/User';
// import firestore from '@react-native-firebase/firestore';
class Home extends Base {
  constructor(props) {
    super(props);
    this.page = Page;
    this.state = {
      listQuality: [],
      listWorker: [],
    };
  }

  async componentDidMount() {
    // const user = new User();
    // const l = await user.ListWorkerQualyity();
    // const l2 = await user.ListWorker();
    // await this.setState({ listWorker: l2, listQuality: l });
    // // const other = Userss.getInStance();
    // // console.log(other);
    const u = User.getInStance();
    console.log('====================================');
    console.log({ u });
    console.log('====================================');
  }

  onPressViewWorkerSort=() => {
    Actions.search({ types: 1 });
  }

  onPressViewList=() => Actions.search()

  render() {
    const Template = this.view;
    return (
      <Template
        title={In18.NomalTitle.home}
        // noFooter
        props={this.props}
        func={this}
        state={this.state}
        showBtnBack={false}
      />
    );
  }
}
export default Home;
