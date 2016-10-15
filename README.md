# jquery-simple-dialog
a simple dialog object based on jquery, contains basic style

How to use? very simple:

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
