
import {React,useState} from 'react'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar';
import axios from 'axios'
import 'markdown-navbar/dist/navbar.css';
import {Row, Col, Icon,Affix, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import API from "./api/api";
import '../styles/detailed.css'
function Detailed (data){
    const [ text , settext ] = useState(data.text);
    return(<>
        <Head>
            <title>博客详细页</title>
        </Head>
        <Header />
        <Row className="comm-main">
            <Col className="comm-left" xs={24} sm={24} md={20} lg={18} xl={18}  >
                <div className="bread-div">
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                        <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                        <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <div className="detailed-title">标题</div>
                    <div className="list-icon center">
                        <span><Icon type="calendar" /> 2020-12-28</span>
                        <span><Icon type="folder" /> 视频教程</span>
                        <span><Icon type="fire" /> 5498人</span>
                    </div>
                    <div className="detailed-content" >
                        <ReactMarkdown 
                            source={text} 
                            escapeHtml={false}  
                        />
                    </div>
                </div>
            </Col>
                <Col className="comm-right" xs={0} sm={0} md={3} lg={5} xl={5}>
                    <Author />
                    <Affix offsetTop={5}>
                        <div className="detailed-nav">
                            <div className="nav-title">文章目录</div>
                            <MarkNav
                            className="article-menu"
                            source={text}
                            ordered={false}/>
                        </div>
                    </Affix>
                </Col>
            
        </Row>
        <Footer/>
    </>
    )
}
Detailed.getInitialProps = async(context)=>{
    return await API.getDetailed(context.query.id)
}

export default Detailed