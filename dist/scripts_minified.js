function newItem() {
  let t = $("#input").val(),
    e = $("<li></li>");
  (e.append(t), "" === t)
    ? alert("You must write something")
    : ($("#list").append(e), $("input").val("")),
    e.on("dblclick", function t() {
      e.toggle("strike");
    });
  let n = $("<crossOutButton></crossOutButton>");
  n.append(document.createTextNode("X")),
    e.append(n),
    n.on("click", function t() {
      e.addClass("delete");
    }),
    $("#list").sortable();
}
$("#input").keydown(function (t) {
  13 === t.keyCode && (t.preventDefault(), newItem());
});
