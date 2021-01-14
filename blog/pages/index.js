import {React,useState} from 'react';
import Link from 'next/link'
import Head from 'next/head'
import {Row,Col,List} from 'antd'
import { CalendarOutlined,FolderOutlined,FireOutlined} from '@ant-design/icons';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Author from '../components/Author'
import Advert from '../components/Advert'
import API from "./api/api";
import time from './utils/time'
function Home(list) {
  // console.log(list)
  const [ mylist , setMylist ] = useState(list.data);
  return (
    <div>
      <Head>
        <title>首页</title>
      </Head>
      <Header />
      <Row className="comm-main">
        <Col className="comm-left" xs={24} sm={24} md={20} lg={18} xl={18}  >
          <div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">
                    <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className="list-icon">
                    <span><CalendarOutlined /> {time.getDateTime(item.addTime)}</span>
                    <span><FolderOutlined /> {item.typeName}</span>
                    <span><FireOutlined /> {item.view_count}人</span>
                  </div>
                  <div className="list-context">{item.article_cointent}</div>  
                </List.Item>
              )}
            />  
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={3} lg={5} xl={5}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}
Home.getInitialProps = async ()=>{
  return await API.getIndex()
}
export default Home
