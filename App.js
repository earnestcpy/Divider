/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      victor_items: [  
        { 'index':-100 },
        { 'index':200 },
        { 'index':300 },
      ],

      earnest_items: [  
        { 'index':0 },
        { 'index':0 },
        { 'index':0 }
      ],
      raycoz_items: [  
        { 'index':0 },
        { 'index':0 },
        { 'index':0 }
      ],

      result_victor: 0,
      result_earnest: 0,
      result_raycoz: 0,
      receipt_1: 0
    }
  }
  ClickMe = () =>{
    var sum = 0;
      this.state.victor_items.forEach(element => {
        console.log(element.index);
        sum += parseInt(element.index, 10);
      });
      this.setState({
        result_victor: sum
      })


  }

  itemOnChange( price, position , name){
    console.log(price + " " + position + " " + name);

    switch(name) {
      case 'victor':
        this.state.victor_items[position].index = price;

        break;
      case 'raycoz':
          this.state.raycoz_items[position].index = price;

        break;

      default:
          this.state.earnest_items[position].index = price;
        break
    }
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.rowandColumn}>
              <View style={styles.item}><Text>Victor</Text></View>
              <View style={styles.item}><Text>Raycoz</Text></View>
              <View style={styles.item}><Text>Earnest</Text></View>
            </View>
            <View style={styles.rowandColumn}>
            <View style={styles.inputBox}>
  
              <TextInput>{this.state.victor_items[1].index}</TextInput>

            </View>
              <View style={styles.inputBox}>
                  <TextInput onChangeText={(text) => this.itemOnChange(text, 0, 'victor')}> {this.state.victor_items[0].index}</TextInput>
              </View>
  
              <View style={styles.inputBox}>
                <TextInput onChangeText={(text) => this.itemOnChange(text, 0, 'raycoz')}> {this.state.raycoz_items[0].index}</TextInput>
              </View>
  
              <View style={styles.inputBox}>
                <TextInput onChangeText={(text) => this.itemOnChange(text, 0, 'earnest')}> {this.state.earnest_items[0].index}</TextInput>
              </View>
            </View>
            <View style={styles.rowandColumn}>
              <View style={styles.inputBox}>
  
                <TextInput>{this.state.victor_items[1].index}</TextInput>
  
                </View>
              <View style={styles.inputBox}>
  
              <TextInput>{this.state.raycoz_items[1].index}</TextInput>
  
                </View>
              <View style={styles.inputBox}>
  
              <TextInput>{this.state.earnest_items[2].index}</TextInput>
  
                </View>
            </View>
  
            <View style={styles.rowandColumn}>
              <View style={styles.inputBox}>
  
              <TextInput>{this.state.victor_items[2].index}</TextInput>
  
                </View>
              <View style={styles.inputBox}>
  
              <TextInput>{this.state.raycoz_items[2].index}</TextInput>
  
                </View>
              <View style={styles.inputBox}>
  
              <TextInput>{this.state.earnest_items[2].index}</TextInput>
  
                </View>
            </View>
            <View style={styles.rowandColumn}>
              <View style={styles.inputBox}>
  
                <Text>{this.state.result_victor}</Text>
  
                </View>
              <View style={styles.inputBox}>
  
                <Text>{this.state.result_victor}</Text>
  
                </View>
              <View style={styles.inputBox}>
  
                <Text>{this.state.result_victor}</Text>
  
                </View>
            </View>

  
            <View>
            <Button
              title="Calculate"
              onPress={this.ClickMe}
            />
            </View>
            
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  };
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  rowandColumn: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center'
  },
  item: {
    width: "30%", height: 50
  },
  inputBox:{
    width: "15%", height: 50,
    marginRight: 10,
    backgroundColor: Colors.lighter
  
  }
});

