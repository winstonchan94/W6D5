import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

let dracos = [
  {title: 'Sad Draco', content: 'very sad mudbloods', img: 'http://i.dailymail.co.uk/i/pix/2010/10/28/article-1324727-00000DBB00000CB2-257_468x415.jpg'},
  {title: 'Racist Draco', content: 'Wait til my father hears about this.', img: 'https://i0.wp.com/images5.fanpop.com/image/photos/27100000/DH-Promotional-Picture-draco-malfoy-27114107-960-1280.jpg'},
  {title: 'Pensive Draco', content: '...', img:'https://orig00.deviantart.net/4286/f/2017/040/7/5/draco_malfoy_wallpaper_draco_malfoy_25527348_1024__by_hopetheglitch-dayiddu.jpg'}
];

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render((<div><Clock /><Tabs dracos={dracos}/></div>), document.getElementById('root'));
  // ReactDOM.render(<p>Hellowisnotn</p>, document.getElementById('root'));
});
