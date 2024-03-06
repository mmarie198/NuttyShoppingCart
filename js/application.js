$(document).ready(function () {
    // Update total based on predefined items
    updateTotal();

    // Add item to the cart
    $(document).on('click', '.add-item', function () {
        var row = $(this).closest('tr');
        var quantity = Number(row.find('td:nth-child(2)').text());
        row.find('td:nth-child(2)').text(quantity + 1);
        updateTotal();
    });

    // Add custom item to the cart
  $(document).on('click', '.add-custom-item', function () {
    addCustomItem();
  });

    // Update total price
    function updateTotal() {
        var totalPrice = 0;
        $('#cart tbody tr').each(function () {
            var quantity = Number($(this).find('td:nth-child(2)').text());
            var price = Number($(this).find('td:nth-child(3)').text());
            var subtotal = quantity * price;
            totalPrice += subtotal;
            $(this).find('td:nth-child(4)').text(subtotal.toFixed(2));
        });
        $('#total-price').text(' $' + totalPrice.toFixed(2));
    }

    // Add item to the cart function
    function addCartItem(itemName, price, quantity) {
        var newRow = `<tr>
                        <td class="border">${itemName}</td>
                        <td class="border">${quantity - 1}</td>
                        <td class="border">${price.toFixed(2)}</td>
                        <td class="border">${(quantity * price).toFixed(2)}</td>
                        <td class="border"><button class="add-item">Add</button></td>
                        <td class="border"><button class="remove-item"><i class="fa-solid fa-trash"></i></button></td>
                      </tr>`;
        $('#cart tbody').append(newRow);
    }

    // Add custom item to the cart function
    function addCustomItem() {
    var itemName = $('#customItemInput').val();
    var price = parseFloat($('#customPriceInput').val());
    addCartItem(itemName, price, 1); // Set quantity to 1 for custom items
  }

    // Remove item from the cart
$(document).on('click', '.remove-item', function () {
    var row = $(this).closest('tr');
    var quantity = Number(row.find('td:nth-child(2)').text());

    if (quantity > 0) {
        row.find('td:nth-child(2)').text(quantity - 1);
    }

    updateTotal();
});

});

    updateTotal();
});

});
