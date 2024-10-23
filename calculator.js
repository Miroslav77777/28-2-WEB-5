
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    const resultElement = document.getElementById('result');

    const quantityPattern = /^[1-9][0-9]*$/;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const quantity = quantityInput.value.trim();
        const productPrice = productSelect.value;

        if (!quantityPattern.test(quantity)) {
            resultElement.innerText = "Ошибка: введите корректное количество (целое положительное число).";
            return;
        }

        const total = quantity * productPrice;
        resultElement.innerText = "Стоимость заказа: " + total + " руб.";
    });
});
