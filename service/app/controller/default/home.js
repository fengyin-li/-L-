'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let result = await this.app.mysql.get('blog_content',{})
    const { ctx } = this;
    ctx.body = result;
  };
  async getArticleList(){
    const results = await this.app.mysql.select('article')
    this.ctx.body={
      data:results
    }
  };
  async getArticleById(){
    //先配置路由的动态传值，然后再接收值
    // console.log(this.ctx.query)
    let id = this.ctx.query.id
    let sql = 'SELECT * FROM article WHERE article.id='+id
    const result = await this.app.mysql.query(sql)
    // console.log('数据库返回结果',result)
    let text = ''
    if (result.length == 1) {
      text = result[0].article_cointent
    }
    this.ctx.body={text}
  };
  async getTypeInfo(){
    const result = await this.app.mysql.select('type')
    this.ctx.body = {data:result}
  }
}

module.exports = HomeController;
