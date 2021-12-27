import React from 'react';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';
import {Alert} from 'react-native';
import {Router, Actions, Scene} from 'react-native-router-flux';
import User from '../../modals/User'
import Userss from '../../modals/Users'
// import firestore from '@react-native-firebase/firestore';
class Home extends Base {
  constructor(props) {
    super(props);
    this.page = Page; 
    this.state = { 
        listQuality: [],
        listWorker:[]
    };
  }
  async componentDidMount() {
    var user = new User()
    var l= await user.ListWorkerQualyity()
    var l2= await user.ListWorker()
    await this.setState({listWorker:l2, listQuality:l})
    const other = Userss.getInStance();
    console.log(other);
      
    // console.log(l)
  }
  onPressViewWorkerSort=()=>{
    Actions.search({types:1})
  }
  onPressViewList=()=>Actions.search()
  render() {
    var Template = this.view;
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
