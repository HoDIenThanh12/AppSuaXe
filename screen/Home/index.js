import React from 'react';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constans';
import Page from './page';
import {Alert} from 'react-native';
import {Router, Actions, Scene} from 'react-native-router-flux';
import User from '../../modals/User'
// import firestore from '@react-native-firebase/firestore';
class Home extends Base {
  constructor(props) {
    super(props);
    this.page = Page; 
    this.state = { 
        listQuality: [],
        lisstWorker:[]
    };
  }
  async componentDidMount() {
    var user = new User()
    var l= await user.ListWorkerQualyity()
    await this.setState({...this.state, listQuality:l})
    // console.log(l)
  }
  onClickWorkQuality = async (id) => { 
   
  };

  onClickWorkDetals = id => {
    
  };
  onPressBaoTri = (value) => {

  };
  onPressCall=(id)=>{{

  }}
  render() {
    var Template = this.view;
    return (
      <Template
        title={In18.NomalTitle.home}
        noFooter
        props={this.props}
        func={this}
        state={this.state}
        // showBtnBack={true}
      />
    );
  }
}
export default Home;
