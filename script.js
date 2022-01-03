clear()
var RandomQuotes=["Do not take life too seriously. You will never get out of it alive.",
"A day without sunshine is like, you know, night.",
"Laziness is nothing more than the habit of resting before you get tired.",
"My life needs editing.",
"If you don't mind, it doesn't matter.",
"A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man."]
var randomNumber = Math.floor(Math.random()*6)
var textArea = document.querySelectorAll("textarea.form-control")
for (var i = 0;i<textArea.length; i++) {
  textArea[i].value = RandomQuotes[randomNumber]
}
var Radiobtns = document.querySelectorAll('input[type="radio"]')
console.log("Btn = ",Radiobtns.length);
for(var i=0;i<Radiobtns.length;i++){
  
  Radiobtns[i].checked = true;
 }
