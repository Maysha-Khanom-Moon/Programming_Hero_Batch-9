const loadPhone = async (searchText='iphone', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);

    displayPhones(phones, isShowAll);
}
loadPhone();

const displayPhones = (phones, isShowAll) => {
    // console.log(phones);

    // 1. get the container
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = ''; // clear container for new search
    phoneContainer.classList = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'

    // show all button
    const showAll = document.getElementById('show-all');
    if (phones.length > 6 && !isShowAll) {
        showAll.classList.remove('hidden');
    }
    else {
        showAll.classList.add('hidden');
    }
    // show all
    if (!isShowAll) {
        phones = phones.slice(0, 6);
    }

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
                <button onclick="handleShowDetails('${phone.slug}')" class="px-[20%] py-5 bg-black font-bold text-white rounded-md btn">Show Details</button>
            </div>
        `;

        // 4. append child
        phoneContainer.appendChild(phoneCard);
    })

    // hide loading spinner
    toggleSpinner(false);
}


// handle search button
const handleSearch = (isShowAll) => {
    toggleSpinner(true);
    
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    loadPhone(searchText, isShowAll);
}


// handle loading spinner
const toggleSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loader');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}


// handle show all
const handleShowAll = () => {
    handleSearch(true);
}


// handle show details
const handleShowDetails = async (id) => {
    console.log('click', id);

    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    console.log(phone);
}