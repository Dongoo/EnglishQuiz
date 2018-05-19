function selezione_diff()
{
  let e = document.getElementById("sel");
  let diff = e.options[e.selectedIndex].text;
  document.getElementById("display_diff").innerHTML = "Difficulty : " + diff;
}

function selezione_tempo()
{
  $("#time").on('blur change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit',
            function() {
              $("#display_time").text("Time : " + $("#time").val())
            });
}

function selezione_numQ()
{
  $("#quest").on("change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit",
    function() {
      $("#display_numQ").text("Number questions : " + $("#quest").val())
    });
}

// !! ATTENZIONE !! RICORDATI DI CREARE LA CLASSE PER LA GIOCATA
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
