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
                <button class="delete"></button>
                <button class="arrow-container arrow"></button>
            </div>
            <p class="nat">${nat}</p>
        </div>`);
            $('#list').prepend(newElement);
            $('.text').val('');
        } else {
            $('.text').css('border-color', 'red');
        }
    });

    $('#list').on('click', '.delete', function(){
        $(this).parents('.point').remove();
        console.log($('.arrow').css('background-image', '../img/arrow.png'));

        var items = $('.point');
        if (items.length == 1) {
            console.log(items.length);
            $('.comments_none').show();
        }
    });

    $('#list').on('click', '.arrow', function(){
        console.log('this work!');
            $(this).parents('.point').children('.nat').animate({
                height: 0,
                'padding-top': 0,
                'padding-bottom': 0
            }, 400);
            $(this).parents('.point').children('.nat').fadeOut(0);
            $(this).css('transform', 'rotate(-90deg)');
            
            if($(this).parents('.point').children('.nat').css('height')=='0px'){ //условие, если высота блока с описанием равна 0px
                $(this).parents('.point').children('.nat').fadeIn(0);
            $(this).parents('.point').children('.nat').animate({
                    height: '85px',
                    'padding-top': '20px',
                    'padding-bottom': '20px'
            }, 400);
            $(this).css('transform', 'rotate(0deg)');            
            }        
    });
});