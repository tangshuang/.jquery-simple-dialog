# jquery-simple-dialog
a simple dialog object based on jquery, contains basic style

How to use? very simple:

```
var dialog = new Dialog({
  id: 'my-dialog',
  width: 400,
  height: 350,
  bgClose: true
});

$('.btn').on('click',function(){
  var content = '<div class="xxx">\
    <h2>My Dialog</h2>\
    <p>This is my test dialog.</p>\
    <p>It\'s so easy</p>\
  </div>';
  dialog.open(content);
});
```

```
 options: {
    id: this dialog id, each dialog has its own id, use as attr('id')
    width: container's width
    height: container's height
    bgColse: if true, clicking on dialog backgroud fires close action
 }
```
 * all of the options do not neccessary, but you must notice that, the width and height are recommended, because if you use image in dialog, container's position may be incorrect.
 
```
 methods: {
    open(content): after intance a dialog, use dialog.open(html) to show the dialog
    close(): use dialog.close to hide the dialog
    destory(): remove content form the dialog and hide the dialog
 }
```