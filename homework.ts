
interface User {
    readonly id: number;
    name: string;
    phoneNumber: string;
    email: string;
    isAdmin: boolean;
}

interface Admin extends User {
    hasPermition: boolean;
}

interface Customer extends User {
    birth: Date;
    hasSubscription: boolean;
    ammount: number;
}

interface DanсeHall {
    name: string;
    prisePerCustomer: number;
    priceForRent: number;
    capacity: number;
    isEmpty: boolean;
    equipment?: string[];
}

interface DanceSchool {
    name: string;
    address: string;
    bankAccount: string;
    isWorking: boolean;
    danceHalls: DanсeHall[];
}

console.log('hello world')