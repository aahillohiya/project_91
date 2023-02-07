player1_name = localStorage.getItem("Player_1_name");
player2_name = localStorage.getItem("Player_2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":" ;
document.getElementById("player2_name").innerHTML = player2_name + ":" ;

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question turn " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer turn " + player2_name ;

function send() {
    number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;
    atual_answer = parseInt(number_1)*parseInt(number_2);

    qustion_number = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";

    row = qustion_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    number_1 = document.getElementById("number_1").value = "";
    number_2 = document.getElementById("number_2").value = "";

}