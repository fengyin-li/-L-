
import {Avatar,Divider} from 'antd'
import '../styles/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1730982190,88398299&fm=26&gp=0.jpg"  /></div>
            <div className="author-introduction">
                即将光头程序员，专注于WEB前端开发。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account" title="https://github.com/fengyin-li"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />

            </div>
        </div>
    )

}

export default Author