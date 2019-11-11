import React, {Component} from 'react'
import AmazonLastSyncedData from './components/data/AmazonLastSyncedData'
import IdealoLastSyncedData from './components/data/IdealoLastSyncedData'
/*

import { Typography } from 'antd';
*/
//import Button from 'antd/es/button'
import { message, Button, Modal, Popover } from 'antd';
import { Input } from 'antd';
import { Tabs } from 'antd';
import { Collapse } from 'antd';
import { Empty } from 'antd';
import { Layout, Icon } from 'antd';
import { Table, Divider, Tag, Badge, Menu, Dropdown } from 'antd';


import './App.css';
import axios from 'axios'

class App extends Component{
    constructor(){
    		super()
    		this.state = {
                  loading: false,
                  visible: false,
                  backend_message: null,
                  user_message: "",
                  isLoaded: true,
                  AmazonDataList : AmazonLastSyncedData,
                  IdealoDataList : IdealoLastSyncedData,
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
      .then(() => this.updateShopDataAmazon())
      .then(() => this.updateShopDataIdealo())
      .then(() => this.updateShopDataEbay())
      .then(() => this.updateShopDataBilliger())
      .then(() => this.updateShopDataConnexity())
      //.then(() => message.success('Loading finished', 2.5))
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
    // t = myDate.toGMTString()+" / "+myDate.toLocaleString();
    t = myDate.toLocaleString();
    return t;
  }
  showSyncTime(startTime,endTime){
    startTime = new Date(startTime);
    endTime = new Date(endTime);
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
  CreateTicket(shopname,identification,errorMsg){
    var Linebreak = "%0A";
    var Jira = "https://visualmeta.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=11000&issuetype=1&customfield_10807=10635&customfield_14338=14777&summary="+identification;
    Jira += " - Aggregator Monitor&description=Hi, we noticed that the shop has a error message:";
    Jira += ""+Linebreak+Linebreak+"Name%3A %2A"+shopname+"%2A";
    Jira += ""+Linebreak+"identification%3A %2A"+identification+"%2A";
    Jira += ""+Linebreak+"Sync Control Errors%3A %2A"+errorMsg+"%2A";
    Jira += ""+Linebreak+Linebreak+"";
    Jira += "Could you please have a look fix the issue?";
    Jira += ""+Linebreak+Linebreak+"";
    Jira += "Thank you";
    console.log("open ticket")
    console.log(Jira)
    window.open(Jira);
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
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
        title: 'Name',
        dataIndex: 'identification',
        key: 'identification',
        render: text => <span>{text}</span>,
      },
      {
        title: 'Ack',
        dataIndex: 'ack',
        key: 'ack',
        render: text => <span>{text}</span>,
      },
      {
        title: 'Auto ack',
        dataIndex: 'autoack',
        key: 'autoack',
      },
      {
        title: 'Failed Sync',
        dataIndex: 'latestEmailTitle',
        key: 'latestEmailTitle',
        render: text => <Tag color={'red'}>{text}</Tag>,
      },
      {
        title: 'Sync Control Errors',
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
        title: 'Last Synced',
        dataIndex: 'endDate',
        key: 'endDate',
        render: (text, record) => (
          <span>{this.showDateFromTimestamp(record.endDate)} </span>
          ),
      },
      {
        title: 'Last Updated',
        dataIndex: 'lastUpdated',
        key: 'lastUpdated',
        render: (text, record) => (
          <span>{this.showDateFromTimestamp(record.lastUpdated)} </span>
          ),
      },
      {
        title: 'New Feed Available?',
        dataIndex: 'newfeedavailable?',
        key: 'newfeedavailable?',
      },
      {
        title: 'Time since last item resync',
        dataIndex: 'Timesincelastitemresync',
        key: 'Timesincelastitemresync',
      },
      {
        title: 'Sync Time',
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
            
            <Button type="primary" icon="highlight" block onClick={this.showModal}>Add</Button>
            <Divider/>
            <Popover content={content} title="Notes"><Button type="primary" icon="align-left" block >Show all</Button></Popover>
          </span>
        ),
      },
      {
        title: 'Create Ticket',
        key: 'createTicket',
        render: (text, record) => (
          <Button type="edit" icon="plus-square" theme="twoTone" onClick={()=> this.CreateTicket(record.name,record.identification,record.auxData)}>Ticket {record.name}</Button>
          ),
      },
    ];
    const { TabPane } = Tabs;
    const { visible, loading } = this.state;
    const { TextArea } = Input;
    const content = (
      <div>
        <p>No Nodes...</p>
      </div>
    );
    function callback(key) {
      console.log(key);
    }
    const menu = (
      <Menu>
        <Menu.Item>Action 1</Menu.Item>
        <Menu.Item>Action 2</Menu.Item>
      </Menu>
    );
    const expandedRowRender = () => {
      const columns = [
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        {
          title: 'Status',
          key: 'state',
          render: () => (
            <span>
              <Badge status="success" />
              Finished
            </span>
          ),
        },
        { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          render: () => (
            <span className="table-operation">
              <a>Pause</a>
              <a>Stop</a>
              <Dropdown overlay={menu}>
                <a>
                  More <Icon type="down" />
                </a>
              </Dropdown>
            </span>
          ),
        },
      ];
  
      const data = [];
      for (let i = 0; i < 3; ++i) {
        data.push({
          key: i,
          date: '2014-12-24 23:12:00',
          name: 'Error XYZ...',
          upgradeNum: 'Upgraded: 56',
        });
      }
      return <Table columns={columns} dataSource={data} pagination={false} />;
    };
    
   if(!isLoaded){
    return (
      <Header><p>Loading..</p></Header>
    )
  }
    
    		return (
                
                <Layout>
                  <Modal
                        visible={visible}
                        title="Add Note"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[
                          <Button key="back" onClick={this.handleCancel}>
                            Close
                          </Button>,
                          <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            Submit
                          </Button>,
                        ]}
                      >
                       <TextArea rows={4} />
                      </Modal>
                  <Header style={{ textAlign: 'center', color:'white', Height: 40 }}><Icon type="appstore" theme="twoTone" twoToneColor="#fff"/>Aggregator Monitor</Header>
                  <Button type="primary" icon="sync" block onClick={this.gettingDataFromServer}>REFRESH</Button>
                  <Search placeholder="Search..."
                    onSearch={this.handleSending}
                    onChange={this.onChange}
                    style={{ width: 200 }}/>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                      <TabPane tab="DE" key="1">
                        <Collapse defaultActiveKey={["1", "2"]} onChange={callback}>
                          <Panel header="AMAZON" key="1">
                            <Table columns={columns} dataSource={this.state.AmazonDataList} expandedRowRender={expandedRowRender} bordered size="small"/>
                          </Panel>
                          <Panel header="IDEALO" key="2">
                            <Table columns={columns} dataSource={this.state.IdealoDataList} expandedRowRender={expandedRowRender} bordered size="small"/>
                          </Panel>
                          <Panel header="EBAY" key="3">
                            <Table columns={columns} dataSource={this.state.EbayDataList} expandedRowRender={expandedRowRender} bordered size="small"/>
                          </Panel>
                          <Panel header="BILLIGER" key="4">
                            <Table columns={columns} dataSource={this.state.BilligerDataList} expandedRowRender={expandedRowRender} bordered size="small"/>
                          </Panel>
                          <Panel header="CONNEXITY" key="5">
                            <Table columns={columns} dataSource={this.state.ConnexityDataList} expandedRowRender={expandedRowRender} bordered size="small"/>
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
                      <TabPane tab="DK" key="4">
                      <Empty />
                      </TabPane>
                      <TabPane tab="ES" key="5">
                      <Empty />
                      </TabPane>
                      <TabPane tab="FI" key="6">
                      <Empty />
                      </TabPane>
                      <TabPane tab="FR" key="7">
                      <Empty />
                      </TabPane>
                      <TabPane tab="CZ" key="8">
                      <Empty />
                      </TabPane>
                      <TabPane tab="HU" key="9">
                      <Empty />
                      </TabPane>
                      <TabPane tab="IT" key="10">
                      <Empty />
                      </TabPane>
                      <TabPane tab="PL" key="11">
                      <Empty />
                      </TabPane>
                      <TabPane tab="SE" key="12">
                      <Empty />
                      </TabPane>
                      <TabPane tab="SK" key="13">
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
