/**
 * Created by chang on 5/5/14.
 */
(function ($) {
    Drupal.behaviors.stdDiff = {
        attach: function (context) {
            $('.views-table tr td').each(function() {
                if ($(this).hasClass('views-field views-field-nothing')) {
                    var before = $(this).prev().prev().children('a').attr('href');
                    var after = $(this).prev().children('a').attr('href');
                    var diffImage = new Image();
                    resemble(before).compareTo(after).onComplete(function(data) {
                        diffImage.src = data.getImageDataUrl();
                        diffImage.height = 220;
                    });
                   $(this).html(diffImage);
                }
            });
            $('.views-table td.views-field-nothing img').click(function() {
                if ($(this).attr('height') == 220) {
                    $(this).attr('height', '600');
                } else {
                    $(this).attr('height', '220');
                }
            });
        }
    };
})(jQuery);

