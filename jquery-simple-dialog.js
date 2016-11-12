/**
 * Plugin name: jquery-simple-dialog
 * Author: frustigor
 * Author URI: http://www.tangshuang.net
 * Origin: https://github.com/tangshuang/jquery-simple-dialog 
 */

function Dialog(options) {
    this.$dialog = $('<div class="dialog" style="position:fixed;left:0;top:0;z-index:9999;width:100%;height:100%;"><div class="dialog-bg" style="position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:.6"></div><div class="dialog-container" style="position:absolute;top:50%;left:50%;background:#fff;"><a href="javascript:void(0)" class="dialog-close" style="position:absolute;top:2px;right:5px;text-decoration: none;">&times;</a><div class="dialog-title" style="font-size:1.4em;margin:20px;"></div><div class="dialog-inner" style="margin:20px;overflow:auto;"></div></div></div>');
    this.$container = this.$dialog.find('.dialog-container');
    this.$content = this.$container.find('.dialog-inner');
    this.$title = this.$container.find('.dialog-title');
    this.content = null;
    this.title = null;
    this.options = options;

    this.$dialog.appendTo('body');
    this.$dialog.hide();

    if (options.id) {
        this.$dialog.attr('id', options.id);
    }

    // width
    if(options.width) {
        this.$container.width(options.width);
    }
    else {
        this.$container.width('60%');
    }
    // height
    if(options.height) {
        this.$container.height(options.height);
    }
    else {
        this.$container.css('max-height','90%');
    }
    // resize when without width or height
    $(window).resize(function(){
        if(!options.width || !options.height) {
            this.resize();
        }
    }.bind(this));

    // close btn
    var self = this;
    this.$dialog.on('click', '.dialog-close', function(e) {
        e.preventDefault();
        self.close();
    });

    // close bg
    this.$dialog.on('click', '.dialog-bg', function() {
        if(options.bgClose) {
            self.close();
        }
    });
}
Dialog.prototype.open = function(content,title) {
    if(!title || title == '') {
        this.$container.find('.dialog-title').hide();
        this.title = null;
    }
    else if(title != this.title) {
        this.$container.find('.dialog-title').html(title).show();
        this.title = title;
    }
    
    if(content && content != this.content) {
        this.$content.html(content);
        this.content = content;
    }

    this.$dialog.show();
    this.resize();
}
Dialog.prototype.close = function() {
    this.$dialog.hide();
}
Dialog.prototype.destory = function() {
    this.$dialog.hide();
    this.$content.children().remove();
    this.content = null;
}
Dialog.prototype.resize = function(width, height) {
    var options = this.options;
    
    // width
    if(width) {
        this.$container.width(width);
    }
    else if(options.width) {
        width = options.width;
        this.$container.width(width);
    }
    else {
        width = this.$container.width();
    }

    // height
    if(height) {
        this.$container.height(height);
    }
    else if(options.height) {
        height = options.height;
        this.$container.height(height);
    }
    else {
        height = this.$container.height();
    }

    // content height
    var title = this.title;
    if(!title || title == '') {
        this.$content.height(height - 40);
    }
    else {
        var headHeight = this.$container.find('.dialog-title').height() + 20;
        this.$content.height(height - headHeight - 40);
    }

    this.$container.css({ marginLeft: -width / 2, marginTop: -height / 2 });
}