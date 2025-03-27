class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    move() {
        console.log('gari chole na chole na chole na re');
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat, seatPrice) {
        super(name, price);
        this.seat = seat;
        this.seatPrice = seatPrice;
    }
}

class Truck extends Vehicle {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }
}

const vehicle1 = new Vehicle('mk', '10000000');

const bus1 = new Bus('bus', 320000, 50, 100);
console.log(bus1);