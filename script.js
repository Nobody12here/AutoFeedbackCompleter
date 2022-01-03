clear()
var textArea = document.querySelectorAll("textarea.form-control")
for (var i = 0;i<textArea.length; i++) {
  textArea[i].value = RandomQuotes[randomNumber]
}
var Radiobtns = document.querySelectorAll('input[type="radio"]')
console.log("Btn = ",Radiobtns.length);
for(var i=0;i<Radiobtns.length;i++){
  Radiobtns[i].checked = true;
 }
