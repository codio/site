if (window.Rainbow) window.Rainbow.linecount = (function(Rainbow) {
    Rainbow.onHighlight(function(block) {
        var $block = $(block);
        var $dummy = $block.clone().empty();
        var $lines = $('<table />', {class: 'rainbow'}).appendTo($dummy);
        var $header = $('<tr />', {class: 'rainbow-header'}).appendTo($lines);

        $('<th />').appendTo($header);
        $('<th />', {class: 'rainbow-language'}).text($block.data('language')).appendTo($header);

        var lines = $block.html().trim().split('\n');

        $.each(lines, function(index, value) {
            index++;

            var $row = $('<tr />', {class: 'rainbow-line rainbow-line-' + index});

            $('<td />', {class: 'rainbow-line-number', 'data-number': index}).appendTo($row);
            $('<td />', {class: 'rainbow-line-code'}).html(value).appendTo($row);

            $lines.append($row);
        });

        $block.replaceWith($lines);
    });
})(window.Rainbow);