const Koa = require('koa');
const fs = require('fs');
const path = require('path')

const app = new Koa();
app.use(async ctx => {
  const {
    url,
    query
  } = ctx.request;
  console.log("url: " + url);
  if (url === '/') {
    ctx.type = 'text/html';
    let content = fs.readFileSync("./index.html", "utf-8");
    // 入口函数 添加环境变量
    content = content.replace('<script',
      `<script>
        window.process = {env: {NODE_ENV: 'dev'}}
      < /script><script>`)
    ctx.body = content;
  }
  // *.js => src/*.js
  else if (url.endsWith(".js")) {
    // => 路径的转换
    const p = path.resolve(__dirname, url.slice(1));
    const content = fs.readFileSync(p, "utf-8");
    ctx.type = "application/javascript";
    ctx.body = rewriteImport(content);
  }
  // 三方库支持
  else if (url.startsWith('/@modules')) {
    // es模块入口 和 package.json的module属性
    const prefix = path.resolve(__dirname, 'node_modules', url.replace('/@modules/', ""));
  };

  const module = require(prefix + '/package.json').module;
  const p = path.resolve(prefix, module);
  const ret = fs.readFileSync(p, 'utf-8');
  ctx.type = "application/javascript";
  ctx.body = rewriteImport(ret);

  // 第三方库的支持 eg：vue => node_modules/vue  需要修改（欺骗浏览器） 'vue' => '/@modules/vue => 别名

  function rewriteImport(content) {
    return content.replace(/ from ['|"]([^'"]+)['|"])/g, function (s0, s1) {
      if (s1[0] !== '.' && s1[1] !== '/') { // 是不是一个绝对路径或者绝对路径
        return ` from '/@modules/${s1}'`;
      } else {
        return s0;
      }
    })
  }
});

app.listen(3000, () => {
  console.log('z_vite start at 3000');
})