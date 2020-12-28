import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col , List  ,Breadcrumb  } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../styles/components/list.css'



const Home = () =>{

  const [ mylist , setMylist ] = useState(
    [
      {title:'啦啦啦',context:'第一个'},
      {title:'哎呦喂',context:'第二个'},
    ]
  );


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main">
        <Col className="comm-left" xs={24} sm={24} md={20} lg={18} xl={18} >
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <List
                itemLayout="vertical"
                dataSource={mylist}
                renderItem={item => (
                  <List.Item>
                    <div className="list-title">{item.title}</div>
                    <div className="list-icon">
                      <span>2020-12-24</span>
                      <span>视频教程</span>
                      <span>0人</span>
                    </div>
                    <div className="list-context">{item.context}</div>  
                  </List.Item>
                )}
              />  

            </div>
        </Col>
        <Col className="comm-right"xs={0} sm={0} md={3} lg={5} xl={5}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer/>
   </>
  )

} 

export default Home