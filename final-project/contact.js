window.onload = function() {
  var userName = document.getElementById("userName");
  var content = document.getElementById("content");
  var submitBtn = document.getElementById("submit");
  var ul = document.getElementById("comment_ul");
  var timer = null;
  submitBtn.onclick = function() {
    var name = userName.value;
    var comment_P = content.value;
  
    if (name == "" || comment_P == "") {
      alert("Enter your nickname and comments plz~");
      return;
    }
  
    userName.value = "";
    content.value = "";
    var li = document.createElement('li');
    li.innerHTML = '<h3>' + name + '</h3><p>' + comment_P + '<a href="###">delete</a></p>';
    if (ul.children.length > 0) {
      ul.insertBefore(li, ul.children[0]);
    } else {
      ul.appendChild(li);
    }
  
    var start = 0;
    var end = li.offsetHeight;
  
    li.style.height = 0;
    var change = end - start;
    var t = 0;
    var endT = 20;
  
    clearInterval(timer);
    timer = setInterval(function() {
      t++;
      if (t == endT) {
        clearInterval(timer);
      }
  
      li.style.height = Tween.Bounce.easeOut(t, start, change, endT) + 'px';
    }, 30);
  
  
    var deleteAObj = li.getElementsByTagName('a')[0];
  
    deleteAObj.onclick = function() {
  
      var deleteLi = this.parentNode.parentNode;
      var start = li.offsetHeight;
      var end = 0;
      var change = end - start;
      var t = 0;
      var endT = 20;
      clearInterval(timer);
      timer = setInterval(function() {
        t++;
        if (t == endT) {
  
          ul.removeChild(deleteLi);
          clearInterval(timer);
        }
        li.style.height = Tween.Quart.easeIn(t, start, change, endT) + 'px';
      }, 30);
    }
  }
}