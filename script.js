var a = new Array();
var counter = 0;
    //var  oForm = document.forms[counter];
jQuery(function(){
    jQuery('a.add-field').click(function(event){
        event.preventDefault();
        //var name = oForm.elements["name"].value;
        var name = document.getElementById('question' + counter).value;
        alert(name);

/*     
        var question = document.getElementsByClassName('question').value;
        alert(question);
        var list = document.getElementsByClassName('list').value;
        alert(list);
        a[question] = list;*/
        counter=counter+1;
        var newRow = jQuery('<input type = "text" id = "questionCounter"  placeholder = "type your question here">&nbsp;<select><option value="1">Text</option><option value="2">Number</option><option value="3">Date</option></select><br>');
        jQuery('div.main1').append(newRow);
    });
});

jQuery(function(){
    jQuery('button.submit').click(function(event){
        event.preventDefault();
        var name = oForm.elements["name"].value;
        alert(name);
    });
});
/*
function myFunction()
{
  $.ajax({
  url: '/'
  data: a,
  type: 'post',
  success: function(data) {
    alert(data);
  }
});
}
*/
