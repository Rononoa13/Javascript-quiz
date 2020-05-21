const recentScore = localStorage.getItem("RecentScore");
const finalScore = document.getElementById("finalScore");

finalScore.innerHTML =
  "You got " + "<b>" + recentScore + "</b>" + " answer correct.";
console.log(recentScore);

fetch("./questions.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let questionData = " ";
    data.forEach(function (query) {
      questionData += `<li>
                    ${query.question} ${query.ans}
                </li>`;
      // console.log(query.question);
      // document.getElementById("test").innerHTML = `<li>  ${query.question}  </li>`;
    });
    //Insert into html
    document.getElementById("test").innerHTML = questionData;
  })
  .catch(function (error) {
    console.log("Something went wrong:");
    console.log(error);
  });

