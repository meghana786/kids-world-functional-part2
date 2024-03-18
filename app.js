document.addEventListener("DOMContentLoaded", function() {
    var cartValue = document.getElementById("cart-value");
    var cartButton = document.getElementById("cart");
    var addButtons = document.getElementsByClassName("button");
    var items = [
      {
        name: "This was our pact",
        quantity: 0,
        dollars: 7,
        cents: 49,
      },
      {
        name: "The famous five",
        quantity: 0,
        dollars: 4,
        cents: 59,
      },
      {
        name: "Matilda",
        quantity: 0,
        dollars: 6,
        cents: 80,
      },
      {
        name: "Harry Potter",
        quantity: 0,
        dollars: 10,
        cents: 0,
      },
      {
        name: "For Young Readers",
        quantity: 0,
        dollars: 7,
        cents: 29,
      },
      {
        name: "Wimpy Kid - DIY",
        quantity: 0,
        dollars: 4,
        cents: 99,
      },
      {
        name: "Dart Board",
        quantity: 0,
        dollars: 17,
        cents: 49,
      },
      {
        name: "Connect Four",
        quantity: 0,
        dollars: 19,
        cents: 99,
      },
      {
        name: "Jenga",
        quantity: 0,
        dollars: 20,
        cents: 99,
      },
      {
        name: "Monopoly",
        quantity: 0,
        dollars: 19,
        cents: 49,
      },
      {
        name: "Bookmarks",
        quantity: 0,
        dollars: 12,
        cents: 49,
      },
      {
        name: "Birthday Card",
        quantity: 0,
        dollars: 12,
        cents: 49,
      },
      {
        name: "Stuffed toys",
        quantity: 0,
        dollars: 15,
        cents: 99,
      },
      {
        name: "Dream catcher drawing",
        quantity: 0,
        dollars: 18,
        cents: 49,
      },
    ];
    
    function updateCart() {
      let cart = 0;
      for (let index = 0; index < items.length; index++) {
        cart += items[index].quantity;
      }
      cartValue.innerText = cart;
    }
  
    for (let i = 0; i < addButtons.length; i++) {
      addButtons[i].addEventListener("click", function() {
        items[i].quantity++;
        updateCart();
      });
    }
  
    cartButton.addEventListener("click", function() {
      var orderDetails = "Order Details:\n";
      for (let index = 0; index < items.length; index++) {
        if (items[index].quantity !== 0) {
          orderDetails += items[index].name + " - Quantity: " + items[index].quantity + "\n";
        }
      }
      
      var totalAmount = calculateTotalAmount();
      var message = encodeURIComponent(orderDetails + "\nTotal Amount: $" + totalAmount);
  
       var whatsappURL = "https://wa.me/+919000000000?text=" + message;
  
       window.open(whatsappURL);
    });
  
    function calculateTotalAmount() {
      let totalPriceInCents = 0;
  
      for (let index = 0; index < items.length; index++) {
        totalPriceInCents +=
          items[index].quantity * (items[index].dollars * 100 + items[index].cents);
      }
      return (totalPriceInCents / 100).toFixed(2);
    }
  });
