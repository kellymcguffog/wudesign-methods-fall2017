/**
 * jquery.slicescreen.js v1.0.0
 * http://
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, yuanshenee <yuanshenmick@gmail.com>
 */

 ;(function ($, window, undefined) {

    'use strict';


    /* constractor: Slice Screen
     * description: the total control of the screen
     * @param cfg: a config object
     */
     $.SliceScreen = function(cfg) {

        // the default configuration
        this.config = {

            // if autoplay is true, the page will start to navigate automatically
            autoplay: true,
            // the number of slices
            slicesCountX: 6,
            slicesCountY: 5,
            // perspective
            perspective: '2000px',
            // rotate speed
            speed: 500,
            // duation type, defines the time of different slices starts to 
            // rotate according to their x and y coodiates
            duration: function(x, y) {
                return (x + y) * 150;
            },
            // the orientation of the slices, h for horizontal and v for vertical
            orientation: 'v',
            // the element selector of the pages
            el: 'section',
            // the hook functions
            beforeTurn: function() {
                console.log("before turn");
            },
            afterTurn: function() {
                console.log("after turn");
            }

        };
        this.config = $.extend(true, this.config, cfg);

        this._init();

    }

    $.SliceScreen.prototype = {

        /* private method: _init
         * description: initialize the slice
         */
         _init: function() {

            // set up the config and parameters
            this._norm();
            this._setStyle();

            // page indexes
            this.curPage = 0;
            this.maxPage = $(this.config.el).length;

            // animation state
            this.isAnimating = false;

            // start the autoplay
            if(this.config.autoplay) {

                this._autoplay();

            }

        },

        /* private method: _norm
         * description: normalize the config parameters
         * @param
         */
         _norm: function() {
            // TODO
        },

        /* private method: _setSize
         * description: get and set the screen size
         * @param
         */
         _setStyle: function() {

            // get the window height and width
            var h = $(window).height();
            var w = $(window).width();

            // set the style of body
            $('body').css({
                overflow: 'hidden',
                margin: '0',
                padding: '0',

                // customized configurations
                perspective: this.config.perspective
            });

            // set the style of elements
            $(this.config.el).css({
                position: 'fixed',
                left: '0',
                top: '0',
                height: h,
                width: w
            });

            // set the style of the pager
            $('#ss-pager').css({
                cursor: 'pointer',
                position: 'relative',
                left: w - 150 + 'px',
                top: h - 100 + 'px'
            });
            $('#next').css({
                width: 0,
                height: 0,
                border: '25px solid',
                borderColor: 'rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)',
                position: 'relative',
                top: '45px'

            });
            $('#prev').css({
                width: 0,
                height: 0,
                border: '25px solid',
                borderColor: 'rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0)',
                position: 'relative',
                left: '-50px',
                top: '-45px'
            });

        },

        /* private method: _nav
         * description: navigate to some page
         * @param idx: the page index
         */
         _nav: function(idx) {

            if(this.isAnimating || idx < 0 || idx >= this.maxPage) {

                return false;
            } else {

                this.isAnimating = true;
                this.config.beforeTurn();
            }

            this.prevPage = this.curPage;
            this.curPage = idx;

            var prevbg = $($(this.config.el)[this.prevPage]).css('backgroundImage');
            var curbg = $($(this.config.el)[this.curPage]).css('backgroundImage');

            // hide this page
            var that = this;
            if ($($(this.config.el)[this.prevPage]).children().length) {

                $($(this.config.el)[this.prevPage]).children().slideUp('1000', function() {
                    // show current page
                    $($(that.config.el)[that.curPage]).css('display', 'block');
                    $($(that.config.el)[that.curPage]).children().hide('0');
                    // hide previous page
                    $($(that.config.el)[that.prevPage]).css('display', 'none');
                    that._animate(prevbg, curbg);
                });
            }
            else {
                // show current page
                $($(that.config.el)[that.curPage]).css('display', 'block');
                $($(that.config.el)[that.curPage]).children().slideUp('0');
                // hide previous page
                $($(that.config.el)[that.prevPage]).css('display', 'none');
                that._animate(prevbg, curbg);
            }

        },

        /* private method: _animate
         * description: start the animate
         * @param prevbg: the previous page background, curbg: the current page background
         */
         _animate: function(prevbg, curbg) {

            var slices = [];
            for(var x = 0; x < this.config.slicesCountX; x++) {

                for(var y = 0; y < this.config.slicesCountY; y++) {

                    var sliceConfig = {
                        dir: (this.curPage - this.prevPage) > 0 ? 'n' : 'p',
                        pageIndex: this.curPage,
                        positionX: x,
                        positionY: y,
                        currentBackground: curbg,
                        previousBackground: prevbg
                    };
                    sliceConfig = $.extend(true, sliceConfig, this.config);
                    slices.push(new $.Slice(sliceConfig));
                }
            }
            var that = this;
            slices.forEach(function(item, index, arr) {

                item.rotate(function() {

                    $('.slices').remove();
                    $($(that.config.el)[that.curPage]).children().slideDown('1000');
                    that.isAnimating = false;
                    that.config.afterTurn();

                });

            });
        },

        /* private method: _autoplay
         * description: start to autoplay
         * @param
         */
         _autoplay: function() {
            // TODO
        },

        /* public method: next
         * description: navigate to next page
         * @param
         */
         next: function() {

            this._nav(this.curPage + 1);

        },

        /* public method: prev
         * description: navigate to previous page
         * @param
         */
         prev: function() {

            this._nav(this.curPage - 1);

        },

        /* public method: nav
         * description: navigate to the specified page
         * @param idx: the specified page
         */
         nav: function(idx) {

            this._nav(idx);

        }

    }

    /* constractor: Slice
     * description: a slice of the screen
     * @param cfg: the slice config object
     * @param pos: the slice position(starting with 0)
     */
     $.Slice = function(cfg) {

        this.sliceConfig = cfg;

        this._init();

    }

    $.Slice.prototype = {

        /* private method: _init
         * description: initialize the slice
         * @param
         */
         _init: function() {

            this._configStyle();
            this._createElements();

        },

        /* private method: _configStyle
         * description: get the style of the slice
         * @param
         */
         _configStyle: function() {

            var w = $(this.sliceConfig.el).width() / this.sliceConfig.slicesCountX;
            var h = $(this.sliceConfig.el).height() / this.sliceConfig.slicesCountY;
            var d = this.sliceConfig.orientation == 'v' ? h : w;

            // the original style
            this.style = {
                size: {
                    w: w,
                    h: h,
                    d: d
                },
                container: {
                    'position': 'absolute',
                    'top': this.sliceConfig.positionY * h + 'px',
                    'left': this.sliceConfig.positionX * w + 'px',
                    'height': h,
                    'width': w,
                    'margin': '0',
                    'z-index': (this.sliceConfig.slicesCountY - this.sliceConfig.positionY) * (this.sliceConfig.positionX < this.sliceConfig.slicesCountX / 2 ? this.sliceConfig.positionX : (this.sliceConfig.slicesCountX - 1 - this.sliceConfig.positionX)),
                    'transform-style': 'preserve-3d',
                    'transition' : 'transform ' + this.sliceConfig.speed + 'ms ' + 'ease',
                    '-moz-transition' : 'transform ' + this.sliceConfig.speed + 'ms ' + 'ease',
                    '-webkit-transition' : 'transform ' + this.sliceConfig.speed + 'ms ' + 'ease',
                    '-o-transition' : 'transform ' + this.sliceConfig.speed + 'ms ' + 'ease'
                },
                front: {
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'height': h,
                    'width': w
                },
                back: {
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'height': h,
                    'width': w,
                    'transform': 'rotateZ(180deg) translateZ(-' + d + 'px)',
                    '-moz-transform': 'rotateZ(180deg) translateZ(-' + d + 'px)',
                    '-webkit-transform': 'rotateZ(180deg) translateZ(-' + d + 'px)',
                    '-o-transform': 'rotateZ(180deg) translateZ(-' + d + 'px)'

                },
                top: {
                    'position': 'absolute',
                    'top': - (d - h) / 2 + 'px',
                    'left': '0',
                    'height': d,
                    'width': w,
                    'transform': 'rotateX(90deg) translate3d(0, -' + d / 2 + 'px, ' + h / 2 + 'px)',
                    '-moz-transform': 'rotateX(90deg) translate3d(0, -' + d / 2 + 'px, ' + h / 2 + 'px)',
                    '-webkit-transform': 'rotateX(90deg) translate3d(0, -' + d / 2 + 'px, ' + h / 2 + 'px)',
                    '-o-transform': 'rotateX(90deg) translate3d(0, -' + d / 2 + 'px, ' + h / 2 + 'px)'
                },
                bottom: {
                    'position': 'absolute',
                    'top': - (d - h) / 2 + 'px',
                    'left': '0',
                    'height': d,
                    'width': w,
                    'transform': 'rotateX(-90deg) translate3d(0, ' + d / 2 + 'px, ' + h / 2 + 'px)',
                    '-moz-transform': 'rotateX(-90deg) translate3d(0, ' + d / 2 + 'px, ' + h / 2 + 'px)',
                    '-webkit-transform': 'rotateX(-90deg) translate3d(0, ' + d / 2 + 'px, ' + h / 2 + 'px)',
                    '-o-transform': 'rotateX(-90deg) translate3d(0, ' + d / 2 + 'px, ' + h / 2 + 'px)'
                },
                right: {
                    'position': 'absolute',
                    'top': '0',
                    'left': - (d - w) / 2 + 'px',
                    'height': h,
                    'width': d,
                    'transform': 'rotateY(90deg) translate3d(' + d / 2 + 'px, 0, ' + w / 2 + 'px)',
                    '-moz-transform': 'rotateY(90deg) translate3d(' + d / 2 + 'px, 0, ' + w / 2 + 'px)',
                    '-webkit-transform': 'rotateY(90deg) translate3d(' + d / 2 + 'px, 0, ' + w / 2 + 'px)',
                    '-o-transform': 'rotateY(90deg) translate3d(' + d / 2 + 'px, 0, ' + w / 2 + 'px)'
                },
                left: {
                    'position': 'absolute',
                    'top': '0',
                    'left': - (d - w) / 2 + 'px',
                    'height': h,
                    'width': d,
                    'transform': 'rotateY(-90deg) translate3d(-' + d / 2 + 'px, 0, ' + w / 2 + 'px)',
                    '-moz-transform': 'rotateY(-90deg) translate3d(-' + d / 2 + 'px, 0, ' + w / 2 + 'px)',
                    '-webkit-transform': 'rotateY(-90deg) translate3d(-' + d / 2 + 'px, 0, ' + w / 2 + 'px)',
                    '-o-transform': 'rotateY(-90deg) translate3d(-' + d / 2 + 'px, 0, ' + w / 2 + 'px)'
                }
                
            };

            // the original image background
            this.style.front.backgroundImage = this.sliceConfig.previousBackground;
            this.style.front.backgroundPosition = -this.sliceConfig.positionX * w + 'px -' + this.sliceConfig.positionY * h + 'px';
            if(this.sliceConfig.orientation == 'v') {

                if(this.sliceConfig.dir == 'n') {
                    this.style.bottom.backgroundImage = this.sliceConfig.currentBackground;
                    this.style.bottom.backgroundPosition = -this.sliceConfig.positionX * w + 'px -' + this.sliceConfig.positionY * h + 'px';
                } else {
                    this.style.top.backgroundImage = this.sliceConfig.currentBackground;
                    this.style.top.backgroundPosition = -this.sliceConfig.positionX * w + 'px -' + this.sliceConfig.positionY * h + 'px';
                }
            } else {

                if(this.sliceConfig.dir == 'n') {
                    this.style.left.backgroundImage = this.sliceConfig.currentBackground;
                    this.style.left.backgroundPosition = -this.sliceConfig.positionX * w + 'px -' + this.sliceConfig.positionY * h + 'px';
                } else {
                    this.style.right.backgroundImage = this.sliceConfig.currentBackground;
                    this.style.right.backgroundPosition = -this.sliceConfig.positionX * w + 'px -' + this.sliceConfig.positionY * h + 'px';
                }
            }


            // the style after transform
            this.transitionStyle = {
                container: this.sliceConfig.orientation == 'v' ? {
                    'transform' : (this.sliceConfig.dir == 'n' ? 
                        'translate3d(0, -' + this.style.size.h / 2 + 'px, -' + this.style.size.h / 2  + 'px) rotate3d( 1, 0, 0, 90deg )' :
                        'translate3d(0, ' + this.style.size.h / 2 + 'px, -' + this.style.size.h / 2  + 'px) rotate3d( 1, 0, 0, -90deg )'),
                    '-moz-transform' : (this.sliceConfig.dir == 'n' ? 
                        'translate3d(0, -' + this.style.size.h / 2 + 'px, -' + this.style.size.h / 2  + 'px) rotate3d( 1, 0, 0, 90deg )' :
                        'translate3d(0, ' + this.style.size.h / 2 + 'px, -' + this.style.size.h / 2  + 'px) rotate3d( 1, 0, 0, -90deg )'),
                    '-webkit-transform' : (this.sliceConfig.dir == 'n' ? 
                        'translate3d(0, -' + this.style.size.h / 2 + 'px, -' + this.style.size.h / 2  + 'px) rotate3d( 1, 0, 0, 90deg )' :
                        'translate3d(0, ' + this.style.size.h / 2 + 'px, -' + this.style.size.h / 2  + 'px) rotate3d( 1, 0, 0, -90deg )'),
                    '-o-transform' : (this.sliceConfig.dir == 'n' ? 
                        'translate3d(0, -' + this.style.size.h / 2 + 'px, -' + this.style.size.h / 2  + 'px) rotate3d( 1, 0, 0, 90deg )' :
                        'translate3d(0, ' + this.style.size.h / 2 + 'px, -' + this.style.size.h / 2  + 'px) rotate3d( 1, 0, 0, -90deg )')
                } : {
                    'transform' : (this.sliceConfig.dir == 'n' ? 
                        'translate3d(' + this.style.size.w / 2 + 'px, 0, -' + this.style.size.w / 2 + 'px) rotate3d( 0, 1, 0, 90deg )' :
                        'translate3d(-' + this.style.size.w / 2 + 'px, 0, -' + this.style.size.w / 2 + 'px) rotate3d( 0, 1, 0, -90deg )'),
                    '-moz-transform' : (this.sliceConfig.dir == 'n' ? 
                        'translate3d(' + this.style.size.w / 2 + 'px, 0, -' + this.style.size.w / 2 + 'px) rotate3d( 0, 1, 0, 90deg )' :
                        'translate3d(-' + this.style.size.w / 2 + 'px, 0, -' + this.style.size.w / 2 + 'px) rotate3d( 0, 1, 0, -90deg )'),
                    '-webkit-transform' : (this.sliceConfig.dir == 'n' ? 
                        'translate3d(' + this.style.size.w / 2 + 'px, 0, -' + this.style.size.w / 2 + 'px) rotate3d( 0, 1, 0, 90deg )' :
                        'translate3d(-' + this.style.size.w / 2 + 'px, 0, -' + this.style.size.w / 2 + 'px) rotate3d( 0, 1, 0, -90deg )'),
                    '-o-transform' : (this.sliceConfig.dir == 'n' ? 
                        'translate3d(' + this.style.size.w / 2 + 'px, 0, -' + this.style.size.w / 2 + 'px) rotate3d( 0, 1, 0, 90deg )' :
                        'translate3d(-' + this.style.size.w / 2 + 'px, 0, -' + this.style.size.w / 2 + 'px) rotate3d( 0, 1, 0, -90deg )')
                }
            };

        },

        /* private method: _createElements
         * description: create slice elements
         * @param
         */
         _createElements: function() {

            this.$el = $('<div></div>').css(this.style.container).addClass('slices')
            .append($('<div></div>').css(this.style.front))
            .append($('<div></div>').css(this.style.back))
            .append($('<div></div>').css(this.style.top))
            .append($('<div></div>').css(this.style.bottom))
            .append($('<div></div>').css(this.style.left))
            .append($('<div></div>').css(this.style.right));

            $($(this.sliceConfig.el)[this.sliceConfig.pageIndex]).css('position', 'absolute').prepend(this.$el);

        },

        /* public method: rotate
         * description: start to rotate this slice
         * @param callback: the callback function after the animation is stopped
         */
         rotate: function(callback) {

            var that = this;

            setTimeout(function() {

                that.$el.css(that.transitionStyle.container).animate({display: 'none'}, function() {
                    if (that.sliceConfig.positionX + that.sliceConfig.positionY + 2 == that.sliceConfig.slicesCountX + that.sliceConfig.slicesCountY) {
                        callback();
                    }
                });

            } , that.sliceConfig.duration(that.sliceConfig.positionX, that.sliceConfig.positionY));

        }

    }

})(jQuery, window);
