$(".openBtn").click(function () {
    $(this).toggleClass('active');
    $('.gnav').fadeToggle();
});

$(function(){
	$('.toggle_title').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});

$('#check').change(function() {
    // チェックが入っていたら有効化
    if ( $(this).is(':checked') ){ 
        // ボタンを有効化
        $('#button').prop('disabled', false);
    } else { 
        // ボタンを無効化
        $('#button').prop('disabled', true); 
    }
});