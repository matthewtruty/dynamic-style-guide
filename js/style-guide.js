var handleColors = function() {
  var setColorBlock = function() {
    var $colorBlock = $(".color-block");
    $.each($colorBlock, function() {
      var color = $(this).find(".color-block-text").text();
      $(this).css("background-color", color);
    });
  };
  var copyColor = function() {
    $(".color-block").on("click", function() {
      window.prompt('Copy to Clipboard: Ctrl+C then Enter', $(this).children(".color-block-text").text());
    })
  }

  //handleColor Calls
  $(document).on("keyup", function() {
    setColorBlock();
  })
  setColorBlock();
  copyColor();
}

var printProperty = function() {
  var $printProperty = $(".property-printer");

  var getElementProperty = function($element, property) {
    return $element.eq(0).css((property));
  }

  var getElementProperties = function($element, propertyArray) {
    var elementText = "";
    for (i = 0; i < propertyArray.length; i++) {
      elementText += getElementProperty($element, propertyArray[i]);
      if (i < (propertyArray.length - 1)) {
        elementText += ", ";
      }
    }
    return elementText;
  }

  $.each($printProperty, function() {
      var displayClass = $(this).attr("data-element-to-display");
      var dataPropertyArray = $(this).attr("data-element-property").split(';');
      (displayClass === undefined) ? ($(this).append(getElementProperties($(this), dataPropertyArray))) : $(this).append((getElementProperties($(displayClass).eq(0), dataPropertyArray)));

    })

}
$(document).ready(function(){

//handleColors();
printProperty();


var renderColorPalette = function (target, colorClass) {
    for (var i = 9; i > 0; i--) {
        $(target).append("<div class='" + colorClass + " color-darken-" + i + "'>.color-darken-" + i + "</div>");
    }
    $(target).append("<p>&nbsp;</p><div class='" + colorClass + "'>." + colorClass + "</div><p>&nbsp;</p>");

    for (var i = 1; i < 10; i++) {
        $(target).append("<div class='" + colorClass + " color-lighten-" + i + "'>.color-lighten-" + i + "</div>");
    }
}
//renderColorPalette(".container-primary-color", "primary-color");
//renderColorPalette(".container-secondary-color", "secondary-color");
//renderColorPalette(".container-accent-color", "accent-color");

colorShader();

});