const translate = require("baidu-translate-api");
const fanyi = require('youdao-fanyi');
var goog_translate = require('translation-google');

const google_translate = require('google-translate-token');
/**
translate("让我们来翻译吧!").then(res => {
    console.log(res.trans_result.dst);
    // Let's translate it!
});
**/
 
goog_translate.suffix = 'cn'; // also can be 'fr', 'de' and so on, default is 'com'


function action() {
  console.log("Hello world");
  let input = document.getElementById('input');
  let google = document.getElementById('google');
  let baidu = document.getElementById('baidu');
  let youdao = document.getElementById('youdao');
  google.value = input.value;
  baidu.value = input.value;
  youdao.value = input.value;

}

// callback style
fanyi('hello world', (err, res) => {
  if(err) return console.error(err);
  console.log(res.translation[0]);
});

goog_translate('This is Google Translate', {to: 'zh-cn'}).then(res => {
    console.log(res.text);
    //=> 这是Google翻译
    console.log(res.from.language.iso);
    //=> en
}).catch(err => {
    console.error(err);
});

// async/await style works well
(async () => {
  const res = await fanyi('hello world'); // or: Youdao.fanyi('hello world');
  console.log(res.translate);

})();
