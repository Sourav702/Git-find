function load() {
  console.log("i am in");
  // fetch(`https://api.github.com/users/${original_name}`)
  fetch("https://api.github.com/users/Sourav702")
    .then((result) => result.json())
    .then((json) => console.log(json));
}
$(document).ready(function () {
  $(".btn").click(function () {
    let user = $("#find").val();
    // alert(user);
    $.get(" https://api.github.com/users/" + user, function (data, status) {
      // alert("Data: " + data.login + "\nStatus: " + status);
      // $("#search").val(data.avatar_url);
      $("#image").attr("src", data.avatar_url);
      $(".card-title").html(data.name);
      $(".card-text").html(data.bio);
      $(".card-repo").html("Total Repo : " + data.public_repos);
      let profile = "https://github.com/" + user;
      $("#go").attr("href", profile);
    });
  });
});
