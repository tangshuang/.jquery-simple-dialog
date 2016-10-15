/**
 * Plugin name: jquery-simple-dialog
 * Author: frustigor
 * Author URI: http://www.tangshuang.net
 * Origin: https://github.com/tangshuang/jquery-simple-dialog 
 *
 options: {
    id: this dialog id, each dialog has its own id, use as attr('id')
    width: container's width
    height: container's height
    bgColse: if true, clicking on dialog backgroud fires close action
 }
 * all of the options do not neccessary, but you must notice that, the width and height are recommended, because if you use image in dialog, container's position may be incorrect.
 methods: {
    open(content): after intance a dialog, use dialog.open(html) to show the dialog
    close(): use dialog.close to hide the dialog
    destory(): remove content form the dialog and hide the dialog
 }
 */

function Dialog(options) {
    this.$dialog = $('<div class="dialog" style="position:fixed;left:0;top:0;z-index:9999;width:100%;height:100%;background:rgba(0,0,0,.8)"><div class="dialog-container" style="position:absolute;top:50%;left:50%;background:#fff;"><a href="javascript:void(0)" class="dialog-close" style="position:absolute;top:2px;right:5px;">&times;</a><div class="dialog-inner" style="margin:10px;"></div></div></div>');
    this.$container = this.$dialog.find('.dialog-container');
    this.content = null;

    this.$dialog.appendTo('body');
    this.$dialog.hide();

    if(options.id) this.$dialog.attr('id',options.id);
    if(options.width) this.$container.width(options.width);
    if(options.height) this.$container.height(options.height);

    var self = this;
    this.$dialog.on('click','.dialog-close',function(e){
        e.preventDefault();
        self.close();
    });

    if(options.bgClose) {
        this.$dialog.on('click',function(){
            self.close();
        });
        this.$dialog.on('click','.dialog-container',function(e){
            e.stopPropagation();
        });
    }
}
Dialog.prototype.open = function(content) {
    if(content && content !== this.content) {
        this.$container.find('.dialog-inner').html(content);
        this.content = content;
    }
    this.$dialog.show();

    var width = this.$container.width();
    var height = this.$container.height();
    this.$container.css({marginLeft:-width/2,marginTop:-height/2});
}
Dialog.prototype.close = function() {
    this.$dialog.hide();
}
Dialog.prototype.destory = function() {
    this.$dialog.hide();
    this.$container.find('.dialog-inner').children().remove();
    this.content = null;
}
