
// Document Ready Function
$(document).ready(function () {
    $("#clickMe").click(function () {
        $("#message").text("Button was clicked!");
        // alert("You clicked the button!");
    });
});

// Selectors in jQuery
$(document).ready(function () {
    // Selecting an element by id
    $("#mainHeading").css("color", "red");
    // Selecting an element by class
    $(".intro").css("background-color", "lightblue");
    // Selecting an element by tag name
    $("p").css("background-color", "lightgrey");
    // Attribute Selector
    $("input[type='text']").css("border", "2px solid blue");
})

// Handling Events in jQuery
$(document).ready(function () {
    // Click Event
    $("#btnClick").click(function () {
        alert("Button is clicked!");
    });
    // Double Click Event
    $("#btnDoubleClick").dblclick(function () {
        alert("Button is double clicked!");
    });
    // Focus event
    $("#inputField").focus(function () {
        $(this).css("background-color", "lightyellow");
    });
    // Blur event
    $("#inputField").blur(function () {
        $(this).css("background-color", "white");
    });
    // Hover (mouseenter and mouseleave combined)
    $("#hoverText").hover(
        function () {
            $(this).css("color", "green");
        },
        function () {
            $(this).css("color", "black");
        }
    );
})

// Basic jQuery Effects  
$(document).ready(function () {
    // Show
    $("#btnShow").click(function () {
        $("#myParagraph").show();
    });

    // Hide
    $("#btnHide").click(function () {
        $("#myParagraph").hide();
    });

    // Toggle
    $("#btnToggle").click(function () {
        $("#myParagraph").toggle();
    });

    // Fade In
    $("#btnFadeIn").click(function () {
        $("#myParagraph").fadeIn();
    });

    // Fade Out
    $("#btnFadeOut").click(function () {
        $("#myParagraph").fadeOut();
    });

    // Slide Up
    $("#btnSlideUp").click(function () {
        $("#myParagraph").slideUp();
    });

    // Slide Down
    $("#btnSlideDown").click(function () {
        $("#myParagraph").slideDown();
    });

    // Slide Toggle
    $("#btnSlideToggle").click(function () {
        $("#myParagraph").slideToggle();
    });
});

// jQuery Animations
$(document).ready(function () {
    $("#animateBtn").click(function () {


        $("#box").animate({ left: '250px', width: '200px', height: '200px', opacity: 0.5 }, 1000, function () {
            alert("Animation complete!");
        });

        // Changing
        // $("#box").animate({ left: '250px' }, "slow")
        // $("#box").animate({ height: '200px' }, "slow")
        // $("#box").animate({ width: '200px' }, "slow")
        // $("#box").animate({ opacity: 0.5 }, "slow");

    });
});

// jQuery Traversing
$(document).ready(function () {
    // Parent
    $("#btnParent").click(function () {
        alert($("#list").parent().prop("tagName")); // Should alert "DIV"
    });

    // Children
    $("#btnChildren").click(function () {
        $("#list").children().css("color", "blue"); // Changes color of all <li> items to blue
    });

    // Siblings
    $("#btnSiblings").click(function () {
        $("#list").siblings().css("color", "green"); // Changes color of <p> to green
    });

    // Next
    $("#btnNext").click(function () {
        $(".item:first").next().css("font-weight", "bold"); // Makes "Item 2" bold
    });

    // Previous
    $("#btnPrev").click(function () {
        $(".item:last").prev().css("font-weight", "bold"); // Makes "Item 2" bold
    });
});

// jQuery HTML Manipulation
$(document).ready(function () {
    // text() method
    $("#btnText").click(function () {
        $("#paragraph").text("Text has been changed!"); // Replaces paragraph text
    });

    // html() method
    $("#btnHTML").click(function () {
        $("#paragraph").html("<strong>HTML content has been changed!</strong>"); // Replaces paragraph with bold text
    });

    // val() method
    $("#btnVal").click(function () {
        alert($("#inputField").val()); // Shows an alert with the current input value
    });

    // attr() method
    $("#btnAttr").click(function () {
        $("#inputField").attr("placeholder", "New placeholder text"); // Changes the input placeholder
    });
});

// jQuery CSS Manipulation
$(document).ready(function () {
    // css() method
    $("#btnChangeColor").click(function () {
        $("#box").css("background-color", "green"); // Changes background color to green
    });

    // addClass() method
    $("#btnAddClass").click(function () {
        $("#box").addClass("highlight"); // Adds the 'highlight' class to the box
    });

    // removeClass() method
    $("#btnRemoveClass").click(function () {
        $("#box").removeClass("highlight"); // Removes the 'highlight' class from the box
    });

    // toggleClass() method
    $("#btnToggleClass").click(function () {
        $("#box").toggleClass("highlight"); // Toggles the 'highlight' class
    });
});

// jQuery AJAX
$(document).ready(function () {

    //GET
    // $("#loadData").click(function () {
    //     $.get("https://jsonplaceholder.typicode.com/posts/1", function (data) {
    //         $("#content").html("<h3>" + data.title + "</h3><p>" + data.title + "</p>");
    //     });
    // });

    // Advanced Option
    $("#loadData").click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "GET",
            success: function (data) {
                $("#content").html("<h3>" + data.title + "</h3><p>" + data.title + "</p>");
            },
            error: function () {
                alert("Error loading data.");
            }
        });
    });

    //POST
    // $("#loadData").click(function () {
    //     $.post("https://example.com/api", { name: "Hassan", age: 25 }, function (response) {
    //         alert("Server Response: " + response.message);
    //     });
    // });

    // Advanced Option
    // $("#loadData").click(function () {
    //     $.ajax({
    //         url: "https://example.com/api",
    //         type: "POST", // HTTP method type
    //         data: { name: "Hassan", age: 25 }, // Data to be sent to the server
    //         success: function (response) {
    //             alert("Server Response: " + response.message);
    //         },
    //         error: function (xhr, status, error) {
    //             alert("An error occurred: " + error);
    //         }
    //     });
    // });

});