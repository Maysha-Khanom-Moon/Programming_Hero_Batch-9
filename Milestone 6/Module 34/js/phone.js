const loadPhone = async (searchText='iphone') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);

    displayPhones(phones);
}
loadPhone();

const displayPhones = phones => {
    // console.log(phones);

    // 1. get the container
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    phoneContainer.classList = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'

    phones.forEach(phone => {
        console.log(phone);

        // 2. create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card bg-base-100 shadow-xl';

        // 3. set innerHTML
        phoneCard.innerHTML = `
            <div class="px-10 pt-10 flex justify-center">
              <img
                src="${phone.image}"
                class="rounded-xl" />
            </div>
            <div class="card-body items-center text-center text-black px-12">
                <h2 class="card-title font-extrabold">${phone.phone_name}</h2>
                <p>${phone.slug}</p>
                <h3 class="font-bold">${phone.brand}</h3>
            </div>
            <div class="flex justify-center mb-10">
                <button class="px-[20%] py-5 bg-black font-bold text-white rounded-md btn">Show Details</button>
            </div>
        `;

        // 4. append child
        phoneContainer.appendChild(phoneCard);
    })
}


// handle search button
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    loadPhone(searchText);    
}