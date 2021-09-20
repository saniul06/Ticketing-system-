import { nanoid } from 'nanoid';

let employeeData = [
    {
        _id: nanoid(6),
        name: "Akash",
        email: 'admin@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: true,
    },
    {
        _id: nanoid(6),
        name: "Lamim",
        email: 'lamin@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
    },
    {
        _id: nanoid(6),
        name: "Hridoy",
        email: 'hridoy@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
    },
    {
        _id: nanoid(6),
        name: "Arif",
        email: 'arif@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
    },
    {
        _id: nanoid(6),
        name: "Imon",
        email: 'imon@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
    },
    {
        _id: nanoid(6),
        name: "Jony",
        email: 'jony@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
    },
    {
        _id: nanoid(6),
        name: "Tutul",
        email: 'tutul@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
    },
    {
        _id: nanoid(6),
        name: "Tushar",
        email: 'tushar@gmail.com',
        phone: `${Math.floor(Math.random() * 100000000000)}`,
        isAdmin: false,
    }
];

export default employeeData
