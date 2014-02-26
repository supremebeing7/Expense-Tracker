














$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append();
  });


  $("form#new-purchase").submit(function(event) {
    event.preventDefault();

    var inputtedDescription = $("input#new-description").val();
    var inputtedAmount = $("input#new-amount").val();

    $("#purchase").append("<tr><td>" + inputtedDescription + "</td><td>" + inputtedAmount + "</td></tr>");
    this.reset();      

    //Ask about this being within/outside of if test.
    // $(".contact").last().click(function() {
    //   $("#show-contact").show();

    //   $("#show-contact h2").text(newContact.fullName());
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);

    //   $("ul#addresses").text("");
    //   newContact.addresses.forEach(function(address) {
    //     $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
    //   });

    //   $("ul#phone-numbers").text("");
    //   newContact.phoneNumbers.forEach(function(phoneNumber) {
    //     $("ul#phone-numbers").append("<li>" + phoneNumber.formattedNumber() + "</li>");
    //   });
  
    //   this.reset();
    // }
  });
});
