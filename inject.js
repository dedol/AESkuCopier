let productPrice = document.querySelector('.product-price-current');
if (productPrice) {
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('id', 'user-copy-data');
    button.setAttribute('class', 'next-btn next-small next-btn-primary');
    button.innerHTML = 'Copy Data';
    let priceWrapper = document.querySelector('.product-price');
    priceWrapper.appendChild(document.createElement('br'));
    priceWrapper.appendChild(document.createElement('br'));
    priceWrapper.appendChild(button);

    button.addEventListener('click', function() {
        let data = {}
        data['id'] = window.location.pathname.match(/\d+/)[0];
        let urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('sku_id')) {
          console.log(encodeURIComponent(urlParams.get('sku_id')));
          data['skuid'] = encodeURIComponent(urlParams.get('sku_id'));
        }
        else {
          alert('Выбраны не все параметры!');
          return;
        }
        data['count'] = parseInt(document.querySelector('.product-number-picker input').value);

        navigator.clipboard.writeText(JSON.stringify(data)).then(function () {
            button.classList.remove("next-btn-primary");
            setTimeout(() => button.classList.add("next-btn-primary"), 250);
        }); 
    });
}