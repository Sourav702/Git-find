$(document).ready(function () {
  $("#alert-item").hide();
  $(".btn").click(function () {
    let user = $("#find").val();
    // alert(user);
    if (user == "") {
      $("#inside-alert").text("User Name Not Blank :) ");
      $("#alert-item").show();
      $("#image").attr("src", "");
      $(".card-title").html("");
      $(".card-text").html("");
      $(".card-repo").html("");
      let profile = "https://github.com/";
      $("#go").attr("href", profile);
      console.log("textbox not empty");
    } else {
      $("#alert-item").hide();
      $.get(" https://api.github.com/users/" + user, function (data, status) {
        // alert("Data: " + data.login + "\nStatus: " + status);
        // $("#search").val(data.avatar_url);
        $("#image").attr("src", data.avatar_url);
        $(".card-title").html(data.name);
        $(".card-text").html(data.bio);
        $(".card-repo").html("Total Repo : " + data.public_repos);
        let profile = "https://github.com/" + user;
        $("#go").attr("href", profile);
        window.data = data;
      });
    }
  });
  $("#add").click(function () {
    // alert($(".card-title").text());
    var _name = data.name;
    var _login = data.login;
    var _follow = data.followers;
    var _repo = data.public_repos;
    // alert(_name);
    // alert(_name);
    var _tr =
      "<tr> <td>" +
      _name +
      "</td> <td>" +
      _login +
      "</td> <td>" +
      _follow +
      "</td> <td>" +
      _repo +
      "</td> </tr>";
    $("tbody").append(_tr);
  });
});
