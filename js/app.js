
$(document).ready(function()
{
    $("#law21").hover(
        function()
        {
            $(this).attr("src", "images/publications/law2021/teaser.gif");
        },
        function()
        {
            $(this).attr("src", "images/publications/law2021/teaser.png");
        }                         
    );

    $(".news-all").hide();
    $("#read_more").on("click", function () {
        $(".news-all").toggle();
        var txt = $(".news-all").is(':visible') ? 'Read Less' : 'Read More';
        $("#read_more").text(txt);
    });
});