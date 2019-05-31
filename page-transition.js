$(window).load(function() {

    function sizeText() {
        $("h1").fitText(0.165);
        $("p").fitText(0.35);
    }
    // Call size text on page load.
    sizeText();

    /*
    var transition = Barba.BaseTransition.extend({

        start: function() {
            this.newContainerLoading.then(val => this.loadNewContent($(this.newContainer)));
            console.log('start function');
        },

        loadNewContent: function(e) {
            e.hide;
            var f = this;
            console.log('load content');
            $(this.oldContainer).fadeOut(600).promise().done(() => {
                e.css('visibility', 'visible');
                console.log('fade out');
                e.fadeIn(600, function() {
                    console.log('fade in');
                    f.done();
                    sizeText();
                });
            });
        }
    });
    



    Barba.Pjax.getTransition = function() {
        return transition;
    }
    Barba.Pjax.start();
    */
});