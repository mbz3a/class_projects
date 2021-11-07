var all_btns = document.getElementsByClassName('btn-form');
for(var i=0 ; i<all_btns.length ; i++){
    var parent = all_btns[i].parentElement;
    parent.classList.add('bg-border-transparent');
}