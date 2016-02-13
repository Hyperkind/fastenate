window.onload = function () {
  $(function () {
    $.ajax('/api/my_boards.json', {
      contentType: 'application/json',
      success: loadImage
    });
  });
};

function loadImage (pic) {
  var $story = $('#story');
  pic.forEach(function () {
    var $thumbnail = $('<img />').text(user.name);
    $story.append($thumbnail);

  });
}