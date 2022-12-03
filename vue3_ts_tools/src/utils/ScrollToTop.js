function bindTop(time = 10, value = 50) { // time 定时器回滚的间隔 value每次回滚的距离
  // 方法一 这样可以实现，但是效果不太行

  // window.scrollTo(0, 0)
  // document.documentElement.scrollTop = 0; // document.body.scrollTop = document.documentElement.scrollTop = 0;

  // 方法二 通过计时器去滚动 视觉上会丝滑一些，没有太大的卡顿效果

  const timeTop = setInterval(() => {
    // 去控制他的滑行距离
    let scrollTop = document.documentElement.scrollTop
    document.documentElement.scrollTop = scrollTop -= value
    // 当滑到顶部的时候记得清除计时器(*) 重点
    if (scrollTop <= 0) {
      clearInterval(timeTop)
    }
  }, time)

  // 方法三 兼容性差些 但视觉效果挺好且代码量不多

  // window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth'
  // })
}

export default bindTop;