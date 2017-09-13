$(function(){
    var item= null,
        speed= 0.8;
        doc= $(document),
        parallax= $('.parallax');

    for(var i=0; i<parallax.length; i++) {
        item= parallax.eq(i);
        item.css(
            'background-image',
            'url("' + item.attr('data-img') + '")'
        );
    }
    
    doc.on('scroll', function(e) {
        for(var i=0; i<parallax.length; i++) {
            item= parallax.eq(i);
            item.css(
                'background-position',
                '0 ' + -((doc.scrollTop() - item.offset().top) * speed) + 'px'
            );
        }
    });
});