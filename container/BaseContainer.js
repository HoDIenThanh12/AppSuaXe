import React, {PureComponent, Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Header from '../container/Header/Header';
import styles from '../container/style';
import Footer from '../container/Footer/Footer';
class BaseContainer extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.page = null;
    this.view = props => {
      return this.renderPage(props);
    };
  }
  renderPage = props => {
    const Page = this.page;
    const {noHeader = false, noFooter = false, pageStyle} = props;
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        {!noHeader && <Header {...props} />}
        <View style={styles.content}>
          <Page {...props} />
        </View>
        {/* {!noHeader && <Header {...props}></Header>} */}
        {!noFooter && <Footer {...props} func={this} />}
      </View>
    );
  };
}
export default BaseContainer;
