function load() {
    const searchField = document.getElementById('phone-search');
    const searchText = searchField.value;
    loadPhone(searchText);
}

const loadPhone = async (searchText = "iphone") => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    displayPhone(data.data);
}
loadPhone();

const displayPhone = (phones) => {
    // show-all
    const showAll = document.getElementById('show-all');
    if (phones.length > 6) {
        showAll.classList.remove('hidden');
    }
    else {
        showAll.classList.add('hidden');
    }

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
        <div class="card bg-white  shadow-md">
            <figure class="px-10 pt-10">
              <img id="phone-img"
                src=${phone.image}
                alt="phone-image"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center text-black px-12">
              <h2 id="phone-name" class="card-title font-extrabold">${phone.phone_name}</h2>
              <p id="phone-description">${phone.slug}</p>
              <h3 class="font-bold">${phone.brand}</h3>
            </div>
            <div class="flex justify-center mb-10">
                <button class="px-[20%] py-5 bg-black font-bold text-white rounded-md btn calculate">Show Details</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    })
}