/* globals $ */

$.extend($.fn, {
  smoothScroll: function smoothScroll (to, duration) {
    if (duration < 0) {
      return
    }

    const difference = to - $(window).scrollTop()
    const perTick = difference / duration * 10
    this.scrollToTimerCache = setTimeout(() => {
      if (!isNaN(parseInt(perTick, 10))) {
        window.scrollTo(0, $(window).scrollTop() + perTick)
        $(this).smoothScroll(to, duration - 10)
      }
    }, 10)
  }
})
