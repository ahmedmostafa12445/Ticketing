var coll = document.getElementsByClassName("l-open");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
	if ((content.style.display) || (content.style.maxHeight)) {
       content.style.display = null;
		content.style.maxHeight = null;
    } else {
        content.style.display = "block";	
		content.style.maxHeight = content.scrollHeight + "px";
	}	
  });
}

var bars = document.querySelectorAll('.meter > span');

setInterval(function(){
  bars.forEach(function(bar){
    var getWidth = parseFloat(bar.dataset.progress);
    
    for(var i = 0; i < getWidth; i++) {
      bar.style.width = i + '%';
    }
  });
}, 500);


var searchBtn = document.getElementById("search-btn"),
    tog = document.getElementById("toggle");
searchBtn.onclick = function() {
    tog.classList.toggle("search-toggle");
    tog.style.transition = ".3s ease-in-out";
};





