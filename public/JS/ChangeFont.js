window.onload = function() {
  getCurFont();
};

var curFont;

function getCurFont() {
  var url = window.location.href;
  var fontString = url.split("?");

  if (fontString.length == 0) {
    curFont = "helvetica";
  } else {
    curFont = fontString[1];
  }

  document.getElementById("selector").value = curFont;

  if (curFont == "helvetica") {
    document.getElementById("wholeBody").className = "HelveticaFont";
    var btns = document.getElementsByName("redirectBtn");
    for (i = 0; i < btns.length; i++) {
      btns[i].className = "HelveticaFont";
    }
  } else if (curFont == "cursive") {
    document.getElementById("wholeBody").className = "CursiveFont";
    var btns = document.getElementsByName("redirectBtn");
    for (i = 0; i < btns.length; i++) {
      btns[i].className = "CursiveFont";
    }
  } else if (curFont == "arialbold") {
    document.getElementById("wholeBody").className = "ArialBold";
    var btns = document.getElementsByName("redirectBtn");
    for (i = 0; i < btns.length; i++) {
      btns[i].className = "ArialBold";
    }
  } else if (curFont == "monospace") {
    document.getElementById("wholeBody").className = "MonospaceBold";
    var btns = document.getElementsByName("redirectBtn");
    for (i = 0; i < btns.length; i++) {
      btns[i].className = "MonospaceBold";
    }
  } else if (curFont == "impact") {
    document.getElementById("wholeBody").className = "ImpactBold";
    var btns = document.getElementsByName("redirectBtn");
    for (i = 0; i < btns.length; i++) {
      btns[i].className = "ImpactBold";
    }
  }
}

function changeFont() {
  if (document.getElementById("selector").value == "helvetica") {
    document.getElementById("wholeBody").className = "HelveticaFont";
    var btns = document.getElementsByName("redirectBtn");
    for (i = 0; i < btns.length; i++) {
      btns[i].className = "HelveticaFont";
    }
  } else if (document.getElementById("selector").value == "cursive") {
    document.getElementById("wholeBody").className = "CursiveFont";
    var btns = document.getElementsByName("redirectBtn");
    for (i = 0; i < btns.length; i++) {
      btns[i].className = "CursiveFont";
    }
  } else if (document.getElementById("selector").value == "arialbold") {
    document.getElementById("wholeBody").className = "ArialBold";
    var btns = document.getElementsByName("redirectBtn");
    for (i = 0; i < btns.length; i++) {
      btns[i].className = "ArialBold";
    }
  } else if (document.getElementById("selector").value == "monospace") {
    document.getElementById("wholeBody").className = "MonospaceBold";
    var btns = document.getElementsByName("redirectBtn");
    for (i = 0; i < btns.length; i++) {
      btns[i].className = "MonospaceBold";
    }
  } else if (document.getElementById("selector").value == "impact") {
    document.getElementById("wholeBody").className = "ImpactBold";
    var btns = document.getElementsByName("redirectBtn");
    for (i = 0; i < btns.length; i++) {
      btns[i].className = "ImpactBold";
    }
  }
}
