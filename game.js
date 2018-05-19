
/*GOTTA OPEN A PYTHON SERVER TO MAKE IT WORK*/
/* python3 -m http.server */
function parsing_file()
{
    var rawFile = new XMLHttpRequest();
    let text = []
    rawFile.open("GET", "../quiz.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                text = rawFile.responseText.split("\n");
            }
        }
    }
    rawFile.send(null);
    return text;
}
function create_array(){
  let question = [];
  for (var i = 0; i < (parsing_file().length)-1; i++) {
    question.push([parsing_file()[i].split(":")[0],parsing_file()[i].split(":")[1]]);
  }
  return question;
}
function _generator(){
  
}
