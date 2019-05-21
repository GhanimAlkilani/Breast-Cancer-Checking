import * as React from 'react';

import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {
  Container,
  Button,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

// or any pure javascript modules available in npm
 
const apiKey =
  'h1vyIBoWf0i+Qp8Zx9q3q9pp4TtsJy2+qTZratsKvaxHns7K74lUTTzZWhMIVzlGiqHuCIryEthd+y6kUg==';

const uri =
  'https://ussouthcentral.services.azureml.net/workspaces/d05fb43e20c4885b9b2df4120263d0f/services/0530b53fa6eb48b62e8373a4099ea4/execute?api-version=2.0&format=swagger';
let data = {
  Inputs: {
    input1: [
      {
        Class: '0',
        age: '',
        menopause: ' ',
        'tumor-size': ' ',
        'inv-nodes': ' ',
        'node-caps': '',
        'deg-malig': ' ',
        breast: '  ',
        'breast-quad': '  ',
        irradiat: ' ',
      },
    ],
  },
  GlobalParameters: {},
};
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      Response: '',
      Class: '1',
      Age: '',
      MenoPause: '',
      TumorSize: '',
      InvNodes: '',
      NodeCaps: '',
      DegMalig: '',
      Breast: '',
      BreastQuad: '',
      Irradiation: '',

    };
  }

  Send() {
    console.log(data);
    data.Inputs.input1[0].Class = this.state.Class;
    data.Inputs.input1[0].age = this.state.Age;
    data.Inputs.input1[0].menopause = this.state.MenoPause;
    data.Inputs.input1[0]['tumor-size'] = this.state.TumorSize;
    data.Inputs.input1[0]['inv-nodes'] = this.state.InvNodes;
    data.Inputs.input1[0]['node-caps'] = this.state.NodeCaps;
    data.Inputs.input1[0]['deg-malig'] = this.state.DegMalig;
    data.Inputs.input1[0].breast = this.state.Breast;
    data.Inputs.input1[0]['breast-quad'] = this.state.BreastQuad;
    data.Inputs.input1[0].irradiat = this.state.Irradiation;
    console.log(data);

    if (
      this.state.Age &&
      this.state.MenoPause &&
      this.state.TumorSize &&
      this.state.InvNodes &&
      this.state.NodeCaps &&
      this.state.DegMalig &&
      this.state.Breast &&
      this.state.BreastQuad &&
      this.state.Irradiation != ''
    ) {
      this.getResults();
    } else {
      alert('Please enter all fields');
    }
  }

  getResults() {
    console.log('hello');
    fetch(uri, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + apiKey,
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          Response: responseJson.Results.output1[0]['Scored Labels'],
        });
        // alert(responseJson.Results.output1[0]["Scored Labels"]);
        console.log("result:", this.state.Response);
      })
      .catch(error => {
        console.error(error);
      });
    if (this.state.Response == 0) {
      alert('According to Your inputs, result are fine');
    } else {
      alert('According to Your inputs, You have to check in hospital as soon as possible');
    }
  }

  render() {

    return (
      <Container>



        <Content>
          <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            enabled>
            <ScrollView>
              <View style={styles.formView}>
                <Form>
                  <Item stackedLabel last>
                    <Label>Age</Label>
                    <Input onChangeText={Age => this.setState({ Age })} />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Meno Pause</Label>
                    <Input
                      onChangeText={MenoPause => this.setState({ MenoPause })}
                    />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Tumor Size</Label>
                    <Input
                      onChangeText={TumorSize => this.setState({ TumorSize })}
                    />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Inv Nodes</Label>
                    <Input
                      onChangeText={InvNodes => this.setState({ InvNodes })}
                    />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Node Caps</Label>
                    <Input
                      onChangeText={NodeCaps => this.setState({ NodeCaps })}
                    />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Deg Malig</Label>
                    <Input
                      onChangeText={DegMalig => this.setState({ DegMalig })}
                    />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Breast</Label>
                    <Input onChangeText={Breast => this.setState({ Breast })} />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Breast Quad</Label>
                    <Input
                      onChangeText={BreastQuad => this.setState({ BreastQuad })}
                    />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Irradiation</Label>
                    <Input
                      onChangeText={Irradiation =>
                        this.setState({ Irradiation })
                      }
                    />
                  </Item>
                </Form>
                <Button
                  onPress={() => this.Send()}
                  style={styles.loginButtonSection}
                  rounded
                  info>
                  <Text
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: 'white',
                    }}>
                    Submit
                  </Text>
                </Button>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </Content>


      </Container>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formView: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 5,
    position: 'relative',
  },
  loginButtonSection: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#0099cc',

    justifyContent: 'center',
    alignItems: 'center',
  },
});
