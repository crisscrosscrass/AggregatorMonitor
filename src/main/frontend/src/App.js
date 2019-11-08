import React, {Component} from 'react'
/*

import { Typography } from 'antd';
*/
//import Button from 'antd/es/button'
import { message, Button } from 'antd';
import { Input } from 'antd';
import { Tabs } from 'antd';
import { Collapse } from 'antd';
import { Empty } from 'antd';
import { Layout, Icon } from 'antd';
import { Table, Divider, Tag } from 'antd';


import './App.css';
import axios from 'axios'

class App extends Component{
    constructor(){
    		super()
    		this.state = {
                  backend_message: null,
                  user_message: "",
                  isLoaded: true,
                  AmazonDataList : [
                    {
                    key:'0',
                    "name":"Sync-Amazon",
                    "identification":"Shop [58] [Amazon.de] [de_standardized_shoes_retail] delta",
                    "mailRecipientsOnError":"techops@visual-meta.com",
                    "startDate":1572537696000,
                    "endDate":1572547888000,
                    "lastUpdated":1572537888000,
                    "auxData":"Batch size set to 256 lines (722 kB). pipeline id=[3055]\n\n\nCompletion Message: \nSYNC_EXCEPTION",
                    "lastDuration":927838,
                    "appProfile":"de.cluster.hadoop",
                    "isChildVm":false,
                    "maxRuntimeThreshold":36,
                    "childVm":false
                  },
                  {
                    key:'1',
                    "name":"Sync-Amazon",
                    "identification":"Shop [58] [Amazon.de] [de_standardized_furniture_retail] delta",
                    "mailRecipientsOnError":"techops@visual-meta.com",
                    "startDate":1572537707000,
                    "endDate":1572537844000,
                    "lastUpdated":1572537844000,
                    "auxData":"SYNC_EXCEPTION",
                    "lastDuration":199808,
                    "appProfile":"de.cluster.hadoop",
                    "isChildVm":false,
                    "maxRuntimeThreshold":36,
                    "childVm":false
                  },
                  
                  ],
                  IdealoDataList : [
                    {
                    key:'0',
                    "name":"Sync-Idealo",
                    "identification":"Shop [58] [Amazon.de] [de_standardized_shoes_retail] delta",
                    "mailRecipientsOnError":"techops@visual-meta.com",
                    "startDate":1572537696000,
                    "endDate":1572537888000,
                    "lastUpdated":1572537888000,
                    "auxData":"Batch size set to 256 lines (722 kB). pipeline id=[3055]\n\n\nCompletion Message: \nSYNC_EXCEPTION",
                    "lastDuration":927838,
                    "appProfile":"de.cluster.hadoop",
                    "isChildVm":false,
                    "maxRuntimeThreshold":36,
                    "childVm":false
                  },
                  {
                    key:'1',
                    "name":"Sync-Idealo",
                    "identification":"Shop [58] [Amazon.de] [de_standardized_furniture_retail] delta",
                    "mailRecipientsOnError":"techops@visual-meta.com",
                    "startDate":1572537707000,
                    "endDate":1572537844000,
                    "lastUpdated":1572537844000,
                    "auxData":"SYNC_EXCEPTION",
                    "lastDuration":199808,
                    "appProfile":"de.cluster.hadoop",
                    "isChildVm":false,
                    "maxRuntimeThreshold":36,
                    "childVm":false
                  },
                  
                  
                  ],
                  EbayDataList : [],
                  BilligerDataList : [],
                  ConnexityDataList : []
                }
            this.handleClick = this.handleClick.bind(this);
            this.handleSending = this.handleSending.bind(this);
            this.gettingDataFromServer = this.gettingDataFromServer.bind(this);
            this.updateShopDataAmazon = this.updateShopDataAmazon.bind(this);
            this.updateShopDataIdealo = this.updateShopDataIdealo.bind(this);
            this.updateShopDataEbay = this.updateShopDataEbay.bind(this);
            this.updateShopDataBilliger = this.updateShopDataBilliger.bind(this);
            this.updateShopDataConnexity = this.updateShopDataConnexity.bind(this);
    }
    
    componentDidMount() {
        axios.get("http://localhost:8080/api/hello").then(res => {
            console.log("Received Successful response from server!");
            console.log(res);
            this.setState({backend_message:res.data})
          }, err => {
            console.log("Server rejected response with: " + err);
          });
          axios.post("http://localhost:8080/api/check", ["Hello Backend, this is a message from Frontend","Wondering how?","Use the Button to test something"]).then(res => {
            console.log("Send something to the Server...");
            console.log(res);
          }, err => {
            console.log("Server rejected response with: " + err);
          });
    }
   handleClick(){
        alert("Sending '"+ this.messageValue.value + "' this to the Backend...")
        console.log(this.messageValue.value)
        axios.post("http://localhost:8080/api/send", ["This is what you send: ",this.messageValue.value,]).then(res => {
                    console.log("Send something to the Server...");
                    console.log(res);
                  }, err => {
                    console.log("Server rejected response with: " + err);
                  });
   }
  handleSending(){
    alert("Sending '"+ this.state.user_message + "' this to the Backend...")
    console.log(this.state.user_message)
    axios.post("http://localhost:8080/api/send", ["This is what you send: ",this.state.user_message]).then(res => {
                console.log("Send something to the Server...");
                console.log(res);
              }, err => {
                console.log("Server rejected response with: " + err);
              });
  }
  gettingDataFromServer(){
   message
      .loading('Action in progress..', 2.5)
      .then(() => message.success('Loading finished', 2.5))
   this.updateShopDataAmazon()
   this.updateShopDataIdealo()
   this.updateShopDataEbay()
   this.updateShopDataBilliger()
   this.updateShopDataConnexity()
  }
  updateShopDataAmazon(){
    axios.get("http://localhost:8080/api/Amazon").then(res => {
            console.log("Received Successful response from server!");
            //console.log(res.data);
            this.setState(prevState => ({AmazonDataList: []}))
            res.data.forEach((element, index) => {
              console.log(element)
              element.key = index
              this.setState({
                AmazonDataList:[...this.state.AmazonDataList,element]
              })
            });
            /*
            this.setState({
              ShopDataList:[...this.state.ShopDataList, {
                key: '5',
                name: 'Amazon[58]-base-Item-Sync',
                ack: '-',
                autoack: '-',
                FailedSync: 4,
                synccontrolerrors: '3',
                FeedDropsIncreases: '-1596709 (5.11%)',
                PublishedDropsincreases:'',
                tags: ['loser'],
              }]
            });
            */
            console.log(this.state.AmazonDataList);
    }, err => {
            console.log("Server rejected response with: " + err);
          });
  }
  updateShopDataIdealo(){
    axios.get("http://localhost:8080/api/Idealo").then(res => {
            console.log("Received Successful response from server!");
            //console.log(res.data);
            this.setState(prevState => ({IdealoDataList: []}))
            res.data.forEach((element, index) => {
              console.log(element)
              element.key = index
              this.setState({
                IdealoDataList:[...this.state.IdealoDataList,element]
              })
            });
            console.log(this.state.IdealoDataList);
    }, err => {
            console.log("Server rejected response with: " + err);
          });
  }
  updateShopDataEbay(){
    axios.get("http://localhost:8080/api/Ebay").then(res => {
            console.log("Received Successful response from server!");
            //console.log(res.data);
            this.setState(prevState => ({EbayDataList: []}))
            res.data.forEach((element, index) => {
              console.log(element)
              element.key = index
              this.setState({
                EbayDataList:[...this.state.EbayDataList,element]
              })
            });
            console.log(this.state.EbayDataList);
    }, err => {
            console.log("Server rejected response with: " + err);
          });
  }
  updateShopDataBilliger(){
    axios.get("http://localhost:8080/api/Billiger").then(res => {
            console.log("Received Successful response from server!");
            //console.log(res.data);
            this.setState(prevState => ({BilligerDataList: []}))
            res.data.forEach((element, index) => {
              console.log(element)
              element.key = index
              this.setState({
                BilligerDataList:[...this.state.BilligerDataList,element]
              })
            });
            console.log(this.state.BilligerDataList);
    }, err => {
            console.log("Server rejected response with: " + err);
          });
  }
  updateShopDataConnexity(){
    axios.get("http://localhost:8080/api/Connexity").then(res => {
            console.log("Received Successful response from server!");
            //console.log(res.data);
            this.setState(prevState => ({ConnexityDataList: []}))
            res.data.forEach((element, index) => {
              console.log(element)
              element.key = index
              this.setState({
                ConnexityDataList:[...this.state.ConnexityDataList,element]
              })
            });
            console.log(this.state.ConnexityDataList);
    }, err => {
            console.log("Server rejected response with: " + err);
          });
  }
  onChange = (e) => {
    this.setState({user_message: e.target.value})
  }
  showDateFromTimestamp(t){
    var myDate = new Date( t );
    t = myDate.toGMTString()+" / "+myDate.toLocaleString();
    return t;
  }
  showSyncTime(startTime,endTime){
    var startTime = new Date(startTime);
    var endTime = new Date(endTime);
    var starthour = startTime.getHours();
    var endhour = endTime.getHours();
    //console.log(starthour);
    ///console.log(endhour);
    var syncTime = endhour - starthour;
    if (syncTime < 1){
      return "< 1 hour";
    }else{
      return syncTime + " hours";
    }
  }
  render(){
    /* 
    const { Title } = Typography;
    */
   const {isLoaded} = this.state;
   const { Search } = Input;
    const { Header, Content, Footer } = Layout;
    const { Panel } = Collapse;
    const columns = [
      {
        title: 'name',
        dataIndex: 'identification',
        key: 'identification',
        render: text => <span>{text}</span>,
      },
      {
        title: 'ack',
        dataIndex: 'ack',
        key: 'ack',
        render: text => <span>{text}</span>,
      },
      {
        title: 'auto ack',
        dataIndex: 'autoack',
        key: 'autoack',
      },
      {
        title: 'Failed Sync',
        dataIndex: 'FailedSync',
        key: 'FailedSync',
        render: text => <Tag color={'red'}>{text}</Tag>,
      },
      {
        title: 'sync control errors',
        dataIndex: 'auxData',
        key: 'auxData',
      },
      {
        title: 'Feed Drops / Increases',
        dataIndex: 'FeedDropsIncreases',
        key: 'FeedDropsIncreases',
        render: text => <Tag color={'green'}>{text}</Tag>,
      },
      {
        title: 'Published Drops / increases',
        dataIndex: 'PublishedDropsincreases',
        key: 'PublishedDropsincreases',
      },
      {
        title: 'last synced',
        dataIndex: 'endDate',
        key: 'endDate',
        render: (text, record) => (
          <span>{this.showDateFromTimestamp(record.endDate)} </span>
          ),
      },
      {
        title: 'last updated',
        dataIndex: 'lastUpdated',
        key: 'lastUpdated',
        render: (text, record) => (
          <span>{this.showDateFromTimestamp(record.lastUpdated)} </span>
          ),
      },
      {
        title: 'new feed available?',
        dataIndex: 'newfeedavailable?',
        key: 'newfeedavailable?',
      },
      {
        title: 'Time since last item resync',
        dataIndex: 'Timesincelastitemresync',
        key: 'Timesincelastitemresync',
      },
      {
        title: 'sync Time',
        dataIndex: 'syncTime',
        key: 'syncTime',
        render: (text, record) => (
          <span>{this.showSyncTime(record.startDate,record.endDate)} </span>
          ),
      },
      {
        title: 'Av Sync Time',
        dataIndex: 'AvSyncTime',
        key: 'AvSyncTime',
      },
      {
        title: 'Validation Time',
        dataIndex: 'ValidationTime',
        key: 'ValidationTime',
      },
      {
        title: 'Notes',
        key: 'action',
        render: (text, record) => (
          <span>
            
            <Button type="primary" icon="highlight" block onClick={this.gettingDataFromServer}>Add</Button>
            <Divider/>
            <Button type="primary" icon="align-left" block onClick={this.gettingDataFromServer}>Show all</Button>
          </span>
        ),
      },
      {
        title: 'Create Ticket',
        key: 'createTicket',
        render: (text, record) => (
          <Button type="edit" icon="plus-square" theme="twoTone">Ticket {record.name}</Button>
          ),
      },
    ];
    const { TabPane } = Tabs;
    function callback(key) {
      console.log(key);
    }
    /*
    old
    <div className="App">
                  
                </div>

    <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      Backend Message:
                    </p>
                    <i className="App-link" >
                      {this.state.backend_message}
                    </i>
                    <div>
                        Send Text to Backend:
                        <Search placeholder="input search text"
                    onSearch={this.handleSending}
                    onChange={this.onChange}
                    style={{ width: 200 }} enterButton="Send"/>
                        {this.state.user_message}
                        <Input placeholder="Basic usage" ref={ref => this.messageValue=ref} />
                        <input placeholder="Basic usage" ref={ref => this.messageValue=ref} />
                        <Button type="primary" value="Submit" onClick={this.handleClick}>Send</Button>
                    </div>
                  </header>
    */

   if(!isLoaded){
    return (
      <Header><p>Loading..</p></Header>
    )
  }
    
    		return (
                
                <Layout>
                  <Header style={{ textAlign: 'center', color:'white', Height: 40 }}>Aggregator Monitor <Icon type="monitor" /></Header>
                  <Button type="primary" icon="sync" block onClick={this.gettingDataFromServer}>REFRESH</Button>
                  <Search placeholder="Search..."
                    onSearch={this.handleSending}
                    onChange={this.onChange}
                    style={{ width: 200 }}/>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                      <TabPane tab="DE" key="1">
                        <Collapse defaultActiveKey={["1", "2"]} onChange={callback}>
                          <Panel header="AMAZON" key="1">
                            <Table columns={columns} dataSource={this.state.AmazonDataList} />
                          </Panel>
                          <Panel header="IDEALO" key="2">
                            <Table columns={columns} dataSource={this.state.IdealoDataList} />
                          </Panel>
                          <Panel header="EBAY" key="3">
                            <Table columns={columns} dataSource={this.state.EbayDataList} />
                          </Panel>
                          <Panel header="BILLIGER" key="4">
                            <Table columns={columns} dataSource={this.state.BilligerDataList} />
                          </Panel>
                          <Panel header="CONNEXITY" key="5">
                            <Table columns={columns} dataSource={this.state.ConnexityDataList} />
                          </Panel>
                          <Panel header="YOOX" key="6">
                            <Empty />
                          </Panel>
                        </Collapse>
                      </TabPane>
                      <TabPane tab="AT" key="2">
                        <Empty />
                      </TabPane>
                      <TabPane tab="NL" key="3">
                      <Empty />
                      </TabPane>
                    </Tabs>
                
                          <Content style={{ padding: '0 50px' }}>
                            
                          </Content>
                          <Footer style={{ textAlign: 'center' }}>©2019</Footer>
              </Layout>
              )
  }
}

export default App;
