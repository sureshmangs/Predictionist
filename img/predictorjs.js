function calculateRank()
{
    var theForm = document.forms["rankform"];
    //Get a reference to the TextBox
    var quantity = theForm.elements["marks"];
    var marks=parseInt(quantity.value);
    var rank=0;
    window.alert("SDASDASD");

    /*var divobj = document.getElementById('rank');
    divobj.style.display='block';
    divobj.innerHTML = "Predicted rank is"+rank;*/

}
function hideTotal()
{
    var divobj = document.getElementById('rank');
    divobj.style.display='none';
}