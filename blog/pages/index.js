import React from 'react';
import Head from 'next/head'
import {Row,Col} from 'antd'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Author from '../components/Author'
import Advert from '../components/Advert'
function Home() {
  return (
    <div>
      <Head>
        <title>首页</title>
      </Head>
      <Header />
      <Row className="comm-main">
        <Col className="comm-left" xs={24} sm={24} md={20} lg={18} xl={18}  >
            左侧
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
export default Home
