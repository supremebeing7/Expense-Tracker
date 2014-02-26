var Purchase = {
  initialize: function(description, amount) {
    this.description = description;
    this.amount = amount;
  },
  create: function(description, amount) {
    var newPurchase = Object.create(Purchase);
    newPurchase.initialize(description, amount);
    return newPurchase;
  }
} 

var Category = {
  initialize: function(name) {
    this.name = name;
    this.purchases = [];
  },
  create: function(name) {
    var newCategory = Object.create(Category);
    newCategory.initialize(name);
    if(newCategory.valid()) {
      return newCategory;  
    } else {
      alert('Categories require names to be used.');
      return false;
    }
  },
  valid: function() {
    if (this.name === undefined) {
      return false;
    } else {
      return this.name.length > 0;
    }
  }
}


$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append();
  });


  $("form#new-purchase").submit(function(event) {
    event.preventDefault();

    var newPurchase = Purchase.create($("input#new-description").val(), $("input#new-amount").val());

    $("#purchase").append("<tr><td>" + newPurchase.description + "</td><td>" + newPurchase.amount + "</td></tr>");
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

  $("form#new-category").submit(function(event) {
    event.preventDefault();

    var newCategory = Category.create($("input#new-category-name").val());

    $("ul#categories").append("<li><span class='category'>" + newCategory.name + "</span></li>");
    $("#category-input").hide();
    this.reset();      
  });

  $("#show-category").click(function() {
    $("#category-input").show();
  });
});

