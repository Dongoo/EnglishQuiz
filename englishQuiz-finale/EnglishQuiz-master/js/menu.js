
function selezione_diff()
{
  let e = document.getElementById("sel");
  let diff = e.options[e.selectedIndex].text;
  localStorage.setItem("difficulty", diff);
  document.getElementById("display_diff").innerHTML = "Difficulty : " + diff;
}

function selezione_tempo()
{
  $("#time").on('blur change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit',
            function() {
              localStorage.setItem("time",$("#time").val())
              $("#display_time").text("Time : " + localStorage.getItem("time"))
            });
}

function selezione_numQ()
{
  $("#quest").on("change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit",
    function() {
      localStorage.setItem("numberQ", $("#quest").val())
      $("#display_numQ").text("Number questions : " + localStorage.getItem("numberQ"))
    });
}

function avvio_gioco()
{
  let e = document.getElementById("sel");
  let diff = e.options[e.selectedIndex].text;
  if($("#time").val() + "" == "" || diff == "Select Difficulty"){
    console.log("error");
  }
  else {

    window.location.href = "game.html";
  }
}
