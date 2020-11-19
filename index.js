#!/usr/bin/env node
require('shelljs/global');
const chalk= require('chalk');
const path = require('path');
const fs = require('fs');
// const ProgressBar = require('./progress-bar'); // 进度条
const argv = require('yargs')
            .option('n', {
                alias : 'name',
                demand: true,
                default: 'vue-base-demo',
                describe: 'your project name',
                type: 'string'
            })
            .usage('Usage: vue create [options]')
            .example('vue create --preset vue-cli-plugin-extend vue-base-demo', 'create baseCode of vue')
            .help('h')
            .alias('h', 'help')
            .epilog('copyright Echo')
            .argv;
console.log(chalk.red('this is red!'));

// 初始化一个进度条长度为 50 的 ProgressBar 实例
var pb = new ProgressBar('下载进度', 50);
// 这里只是一个 pb 的使用示例，不包含任何功能
var num = 0, total = 200;
function downloading() {
 if (num <= total) {
  // 更新进度条
  pb.render({ completed: num, total: total });
 
  num++;
  setTimeout(function (){
   downloading();
  }, 500)
 }
}
downloading();

// config.verbose = true; // or set('-v');

// let checkPackage = exec(`npm ls @vue/cli -g`, {async:true});
// checkPackage.stdout.on('data', async (data) => {
//     if(data.indexOf('empty') > -1) { // 判断是否需要安装包
//         echo('即将全局安装vue-cli');
//         let res = exec(`npm install -g @vue/cli`).stdout;
//         echo(res);
//     } else {
//         echo('运行创建项目相关命令');
//         let proPath = path.resolve(__dirname, 'vue-cli-plugin-extend');
//         let res = exec(`vue create --preset ${proPath} ${argv.n}`).stdout;
//         echo(res);
//     }
// });

var version = exec('node --version', {async:true}).stdout;
console.log('===');
console.log(version);

var child = exec('some_long_running_process', {async:true});
child.stdout.on('data', function(data) {
  /* ... do something with data ... */
  console.log('---');
  console.log(data);
});

exec('some_long_running_process', function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
}, 'utf-8');
