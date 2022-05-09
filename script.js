document.addEventListener("DOMContentLoaded", function(){
    const block = "block";
    const none = "none";
    const circleImage = document.getElementsByClassName("circle");
    const checkImage = document.getElementsByClassName("check");
    const answerModelElement = document.getElementById("answerModel");
    const answersByUser = document.getElementsByClassName("user-input");
    const result = document.getElementById("result");
    for (let step = 0; step < circleImage.length; step++) {
        circleImage[step].style.display = none;
    }

    for (let step = 0; step < checkImage.length; step++) {
        checkImage[step].style.display = none;
    }

    const answerModel = [
        "え", "い", "え", "い", "あ",
        "え", "い", "え", "い", "い",
        "う", "う", "える", "いる", "う",
        "うる", "うる", "える", "いる", "う",
        "うれ", "うれ", "えれ", "いれ", "え",
        "えよ", "いよ", "えよ", "いよ", "え"
    ];

    answerModelElement.style.display = none;


    function onButtonClick() {
        let correctCount = 0;
        for (let step = 0; step < answersByUser.length; step++) {
            if (answersByUser[step].value == answerModel[step]) {
                circleImage[step].style.display = block;
                correctCount++;
            } else {
                checkImage[step].style.display = block;
            }
        }
        result.textContent = '結果：' + correctCount + '/' + answersByUser.length;
        answerModelElement.style.display = block;
    }
});