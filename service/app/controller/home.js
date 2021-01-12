'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    //获取首页数据
    let result = await this.app.mysql.get('blog_content',{})
    console.log(result)
    const { ctx } = this;
    ctx.body = result;
  }
  async getlist(){
    const { ctx } = this;
    ctx.body = '<h1>列表页<h1>'
  }
}

module.exports = HomeController;
