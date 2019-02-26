var answer;
var billTotal;
var venmoText;
var venmoHandle;

function calculateMultiplier(){
  billTotal = Number(Math.round(((Number(document.getElementById("total").value)) * (1 + parseFloat(document.getElementById("tip").value)))+'e2')+'e-2');

  answer = ((billTotal) / Number(document.getElementById("subtotal").value));
  answer = Number(Math.round(answer+'e2')+'e-2');

  document.getElementById("answer").innerHTML = answer;
  document.getElementById("receiptTotal").textContent = billTotal;

  replaceVenmoText();
}

function replaceVenmoText(){
  venmoHandle = document.getElementById("handle").value;
  venmoText = "Venmo me for what you ordered times x" + answer + " @" + venmoHandle;
	venmoText = "Venmo @" + venmoHandle + " for what you ordered times x" + answer;

  document.getElementById("venmoTextArea").innerHTML = venmoText;
  console.log(venmoText);
}

function copyToClipboard(){
  const el = document.createElement('textarea');
  el.value = venmoText;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
