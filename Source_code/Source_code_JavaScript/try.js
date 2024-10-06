// Include jQuery from external source
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

// jQuery camera plugin for homepage
if (window.location.href == "https://www.yourhomepageurl.com/") {
    jQuery(function(){
        jQuery('#camera_wrap_1').camera({
            thumbnails: true,
            height: '540px'
        });
    });
}

// Default settings for product pages
if (window.location.href.includes("/item")) {
    var defaultnoimage = "https://blogger.googleusercontent.com/img/s1600/no_image.jpg";
    var maxresults = 5;
    var splittercolor = "#DDDDDD";
    var relatedpoststitle = "Similar Products:";
}

// JavaScript for handling product features (Top Selling)
$(document).ready(function() {
    var numposts = 6;
    var showpostthumbnails = true;
    var displaymore = false;
    var displayseparator = false;
    var showcommentnum = false;
    var showpostdate = false;
    var showpostsummary = true;
    var numchars = 80;
});

// Shopping cart toggle functionality
$(".menu-cart .mycart").click(function() {
    $(".menu-cart .bag").toggle();
});

// Resize images in the post and item containers
$(document).ready(function() {
    $('.post-home img, .item .item_thumb,.label_with_thumbs img').attr('src', function(i, src) {
        return src.replace('s72-c', 's400-c');
    });
});

// Add to Cart button functionality with toggle effect
$(document).ready(function() {
    $('.item_add').click(function(){
        var $this = $(this);
        $this.toggleClass('productad');
        if ($this.hasClass('productad')) {
            $this.html('<i class="fa fa-check-square"></i> Product Added');
        } else {
            $this.html('<i class="fa fa-shopping-cart"></i> Add to Cart');
        }
    });
});

// Auto Facebook Like Box (inserting iframe)
$(".widget-content").each(function() {
    var content = $(this).text();
    if (content.substr(0,10).match("fbbox")) {
        content = content.replace("fbbox/", "");
        $(this).html('<iframe allowtransparency="true" frameborder="0" scrolling="no" src="//www.facebook.com/plugins/likebox.php?href='+content+'&width=340px&height=258&colorscheme=dark&show_faces=true&header=false&stream=false&show_border=false&appId=492409184153294" style="border:none; overflow:hidden; width:100%; height:258px;"></iframe>');
    }
});

// Find and format price tags in the widget
$(document).ready(function(){
    $(".price_remove .label_remove").each(function() {
        var e = $(this).text();
        if (e.substr(0, 10).match("price")) {
            e = e.replace("price_", "");
            $(this).html('<div class="item_price"><span class="price">' + e + "</span></div>");
        }
        $(".item_price").parent(".label_remove").replaceWith(function() {
            return $(this).contents();
        });
        $(".price_remove").replaceWith(function() {
            return $(this).contents();
        });
    });

    $(".widget.Label a").each(function() {
        var e = $(this).text();
        if (e.substr(0,10).match("price")) {
            e = e.replace("price_", "");
            $(this).html('<span class="tag_remove">' + e + "</span>");
            $(".tag_remove").parent("a").remove();
        }
    });

    $(".widget.Label span").each(function() {
        var e = $(this).text();
        if (e.substr(0,10).match("price")) {
            e = e.replace("price_", "");
            $(this).html('<span class="tag_remove">' + e + "</span>");
            $(".tag_remove").parent("span").remove();
        }
    });

    $(".label_remove").remove();
});

// Resize images based on their parent containers (by Christian Varga)
(function(e){
    e.fn.resizeToParent = function(t){
        function r(e){
            e.css({width:"",height:"auto","margin-left":"","margin-top":""});
            var n=e.parents(t.parent).width();
            var r=e.parents(t.parent).height();
            var i=e.width();
            var s=e.height();
            var o=i/n;
            if(s/o<r){
                e.css({width:"auto",height:r});
                i=i/(s/r);
                s=r
            } else {
                e.css({height:"auto",width:n});
                i=n;
                s=s/o
            }
            var u=(i-n)/-2;
            var a=(s-r)/-2;
            e.css({"margin-left":u,"margin-top":a})
        }
        var n={parent:"div",delay:100};
        var t=e.extend(n,t);
        var i;
        var s=this;
        e(window).on("resize",function(){
            clearTimeout(i);
            i=setTimeout(function(){
                s.each(function(){
                    r(e(this))
                })
            },t.delay)
        });
        return this.each(function(){
            var t=e(this);
            t.attr("src",t.attr("src"));
            t.load(function(){
                r(t)
            });
            if(this.complete){
                r(t)
            }
        })
    }
})(jQuery);

$(".imco img").resizeToParent();
