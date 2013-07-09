$(function () {
    var aside = $('aside'),
        initOffset = aside.offset(),
        items = aside.find('li'),
        links = items.find('a'),
        sections = $('section'),
        asideHeight = aside.height()

    initOffset.left = $('.container', sections.first()).offset().left;
    aside.css({left: initOffset.left});

    $(window).on('scroll', function () {
        var position = $(document).scrollTop();

        if (position >= initOffset.top && !aside.hasClass('fixed')) {
            aside.addClass('fixed');
        } else if (position <= initOffset.top) {
            aside.removeClass('fixed');
        }

        if (position < initOffset.top) return;

        sections.each(function (i, el) {
            var section = $(el)

            if (!section.data().frame) {
                section.data({
                    frame: {
                        top: section.offset().top,
                        bottom: section.offset().top + section.height()
                    },
                    link: links.filter('[href="#' + section.attr('id') + '"]')
                })
            }

            if (position + asideHeight / 2 >= section.data().frame.top &&
                position + asideHeight / 2 <= section.data().frame.bottom) {
                items.removeClass('active')
                section.data().link.closest('li').addClass('active')
            }
        })

    });

    items.on('click', function () {
        items.removeClass('active')
        $(this).addClass('active')
    })
})
