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
 }

}

module.exports = HomeController;
