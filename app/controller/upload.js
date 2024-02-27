const Controller = require('egg').Controller;
const path = require('path');
const fs = require('mz/fs');
const pump = require('mz-modules/pump');
class UploadController extends Controller {
    async doAdd() {
        const path = require('path')
        const fs = require('fs')
        const { ctx } = this
        console.log(ctx.request)
        const file = ctx.request.files[0]
        const toFileName = '/public/upload/' + Date.now() + file.filename
        const to = path.dirname(__dirname) + toFileName
        console.log()
        await fs.copyFileSync(file.filepath, to)
        //返回前端路径
        const newUrl = 'http://127.0.0.1:7001' + toFileName
     
        ctx.body = {
            msg: '图片上传成功',
            url: newUrl,
        }
    }
}

module.exports = UploadController