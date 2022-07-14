let apiUrls = {
    address: 'https://api.openbrewerydb.org/breweries'
};
let addressSec = document.getElementById('address-section-wrapper');

function getAddress() {
    fetch(apiUrls.address)
    .then(response => response.json())
    .then(response => {
        response.forEach(el => {
            let resp_address = el.state ? el.state + ' ' : '';
            resp_address += el.city ? el.city + ' ' : '';
            resp_address += el.street ? el.street + ' ' : '';
            let resp_name = el.name ? el.name : '-';
            let resp_phone = el.phone ? el.phone : '-';

            let address = document.createElement('div');
            address.classList.add('address');

            let location = document.createElement('h6');
            location.classList.add('addresses-text');
            let location_icon = document.createElement('i');
            location_icon.classList.add('fa-solid', 'fa-location-dot', 'address-icon');
            let location_text = document.createElement('span');
            location_text.textContent = 'Location: ' + resp_address;
            location.appendChild(location_icon);
            location.appendChild(location_text);

            let name = document.createElement('h6');
            name.classList.add('addresses-text');
            let name_icon = document.createElement('i');
            name_icon.classList.add('fa-solid', 'fa-hotel', 'address-icon');
            let name_text = document.createElement('span');
            name_text.textContent = 'Name: ' + resp_name;
            name.appendChild(name_icon);
            name.appendChild(name_text);

            let phone = document.createElement('h6');
            phone.classList.add('addresses-text');
            let phone_icon = document.createElement('i');
            phone_icon.classList.add('fa-solid', 'fa-phone', 'address-icon');
            let phone_text = document.createElement('span');
            phone_text.textContent = 'Phone: ' + resp_phone;
            phone.appendChild(phone_icon);
            phone.appendChild(phone_text);

            address.appendChild(location);
            address.appendChild(name);
            address.appendChild(phone);
            addressSec.appendChild(address);
        });
    })
    .catch(err => console.error(err));
}
getAddress();
