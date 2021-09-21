import { nanoid } from 'nanoid';

export const tickets = [
    {
        _id: nanoid(6),
        type: 'product',
        customer: {
            name: "customer1",
            email: 'customer1@gmail.com',
        },
        productOrServiceName: "Laptop",
        details: "I have buy a laptop. But it needs repairing",
        status: 'issued',
        assignedTo: null,
        createdAt: Date.now()
    },
    {
        _id: nanoid(6),
        type: 'service',
        customer: {
            name: "customer2",
            email: 'customer2@gmail.com',
        },
        productOrServiceName: "Education",
        details: "I have some problem in a course",
        status: 'issued',
        assignedTo: null,
        createdAt: Date.now()
    },
    {
        _id: nanoid(6),
        type: 'service',
        customer: {
            name: "customer3",
            email: 'customer3@gmail.com',
        },
        productOrServiceName: "Sport",
        details: "This is dummy data. This is dummy data. This is dummy data. This is dummy data. This is dummy data.",
        status: 'issued',
        assignedTo: null,
        createdAt: Date.now()
    },
]

export const employees = [
    {
        _id: nanoid(6),
        name: "Akash",
        email: 'admin@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: true,
        tickets: []
    },
    {
        _id: nanoid(6),
        name: "Lamim",
        email: 'lamin@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
        tickets: []
    },
    {
        _id: nanoid(6),
        name: "Hridoy",
        email: 'hridoy@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
        tickets: []
    },
    {
        _id: nanoid(6),
        name: "Arif",
        email: 'arif@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
        tickets: []
    },
    {
        _id: nanoid(6),
        name: "Imon",
        email: 'imon@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
        tickets: []
    },
    {
        _id: nanoid(6),
        name: "Jony",
        email: 'jony@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
        tickets: []
    },
    {
        _id: nanoid(6),
        name: "Tutul",
        email: 'tutul@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
        tickets: []
    },
    {
        _id: nanoid(6),
        name: "Tushar",
        email: 'tushar@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
        tickets: []
    }
];