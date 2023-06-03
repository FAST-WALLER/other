const player = new Plyr('video', { 
    captions: { active: true },
 
  // 如果需要添加播放列表，可以在以下位置添加
playlist: {
  urls: [
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      type: 'video/mp4',
      title: 'View From A Blue Moon Trailer'
    },
    {
      src: 'https://cdn.plyr.io/static/demo/Pexels Videos 4780.mp4',
      type: 'video/mp4',
     title: 'Pexels Videos 4780'
    }
  ]
}
});

// 判断是否能够自动播放
if (player.autoplay) {
  // 播放器对象加载完成后自动播放视频
  player.on('ready', function() {
    player.play();
  });
} else {
  // 显示自动播放被禁用时的提示信息
  const message = document.getElementById('autoplay-message');
  message.style.display = 'block';
}

// 手动启动视频播放
function playVideo() {
  const video = document.querySelector('video');
  video.play();
  const message = document.getElementById('autoplay-message');
  message.style.display = 'none';
}

// 设置视频循环播放
player.on('ended', function() {
  player.play();
});