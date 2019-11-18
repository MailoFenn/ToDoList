$(function(){
    $('#add').click(function(){
        var head = $('#head').val();
        var nat = $('#nat').val();
        if ((head!='')||(nat!='')) {
            $('.comments_none').hide();
            var newElement = $(`
                <div class="point">
                    <div class="head-container">
                        <h3 class="head">${head}</h3>
                        <img src="img/delete.png" class="delete" alt="delete">
                        <span class="arrow-container"><img src="img/arrow.png" class="arrow" alt="arrow"></span>
                    </div>
                    <p class="nat">${nat}</p>
                </div>`);
            $('#list').prepend(newElement);
            $('.text').val('');
        }
    });

    $('#list').on('click', '.delete', function(){
        $(this).parents('.point').remove();

        var items = $('.point');
        if (items.length == 1) {
            console.log(items.length);
            $('.comments_none').show();
        }
    });

    $('#list').on('click','.arrow',function(){
        if ($(this).attr('src')=='img/arrow.png') {
            $(this).parents('.point').children('.nat').animate({
                height: 0,
                'padding-top': 0,
                'padding-bottom': 0
            }, 400);
            $(this).parents('.point').children('.nat').fadeOut(0);
            $(this).attr('src', 'img/arrow-left.png');
        } else if ($(this).attr('src')=='img/arrow-left.png') {
            $(this).parents('.point').children('.nat').fadeIn(0);
            $(this).parents('.point').children('.nat').animate({
                    height: '85px',
                    'padding-top': '20px',
                    'padding-bottom': '20px'
            }, 400);
            $(this).attr('src', 'img/arrow.png');
        }
        
    });
});