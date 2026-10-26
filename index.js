import express from "express";

const app = express();
const prot = process.env.prot || 5000;

const users = [
  {
    id: "usr_1001",
    name: {
      first: "Rahim",
      last: "Ahmed",
      full: "Rahim Ahmed",
    },
    email: "rahim@example.com",
    phone: "+8801700000001",
    age: 25,
    gender: "male",
    address: {
      country: "Bangladesh",
      division: "Dhaka",
      district: "Dhaka",
      city: "Mirpur",
      postalCode: "1216",
      coordinates: {
        latitude: 23.8223,
        longitude: 90.3654,
      },
    },
    company: {
      name: "TechNova BD",
      department: "Engineering",
      position: "Frontend Developer",
      experienceYears: 2,
    },
    skills: ["HTML", "CSS", "JavaScript", "React"],
    socialMedia: {
      facebook: "rahim.dev",
      github: "rahim-ahmed",
      linkedin: "rahim-ahmed-dev",
    },
    orders: [
      {
        orderId: "ORD-5001",
        product: "Wireless Mouse",
        quantity: 2,
        price: 850,
        status: "delivered",
      },
      {
        orderId: "ORD-5002",
        product: "Keyboard",
        quantity: 1,
        price: 1500,
        status: "shipped",
      },
    ],
    account: {
      role: "user",
      isVerified: true,
      isActive: true,
      createdAt: "2026-01-15T10:30:00Z",
      lastLogin: "2026-10-24T08:15:00Z",
    },
    preferences: {
      language: "bn",
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
    },
    stats: {
      totalOrders: 2,
      totalSpent: 3200,
      loyaltyPoints: 120,
    },
  },
  {
    id: "usr_1002",
    name: {
      first: "Nusrat",
      last: "Jahan",
      full: "Nusrat Jahan",
    },
    email: "nusrat@example.com",
    phone: "+8801700000002",
    age: 23,
    gender: "female",
    address: {
      country: "Bangladesh",
      division: "Chattogram",
      district: "Chattogram",
      city: "Agrabad",
      postalCode: "4100",
      coordinates: {
        latitude: 22.3302,
        longitude: 91.8123,
      },
    },
    company: {
      name: "PixelCraft",
      department: "Design",
      position: "UI Designer",
      experienceYears: 3,
    },
    skills: ["Figma", "UI Design", "UX Research", "CSS"],
    socialMedia: {
      facebook: "nusrat.design",
      github: "nusrat-jahan",
      linkedin: "nusrat-jahan-design",
    },
    orders: [
      {
        orderId: "ORD-5003",
        product: "Headphones",
        quantity: 1,
        price: 2200,
        status: "delivered",
      },
    ],
    account: {
      role: "user",
      isVerified: true,
      isActive: true,
      createdAt: "2026-02-10T12:00:00Z",
      lastLogin: "2026-10-23T14:20:00Z",
    },
    preferences: {
      language: "en",
      theme: "light",
      notifications: {
        email: true,
        sms: true,
        push: false,
      },
    },
    stats: {
      totalOrders: 1,
      totalSpent: 2200,
      loyaltyPoints: 75,
    },
  },
  {
    id: "usr_1003",
    name: {
      first: "Sakib",
      last: "Hasan",
      full: "Sakib Hasan",
    },
    email: "sakib@example.com",
    phone: "+8801700000003",
    age: 28,
    gender: "male",
    address: {
      country: "Bangladesh",
      division: "Rajshahi",
      district: "Rajshahi",
      city: "Boalia",
      postalCode: "6100",
      coordinates: {
        latitude: 24.3745,
        longitude: 88.6042,
      },
    },
    company: {
      name: "CloudBase",
      department: "Backend",
      position: "Backend Developer",
      experienceYears: 5,
    },
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    socialMedia: {
      facebook: "sakib.codes",
      github: "sakib-hasan",
      linkedin: "sakib-hasan-dev",
    },
    orders: [
      {
        orderId: "ORD-5004",
        product: "SSD 1TB",
        quantity: 1,
        price: 7500,
        status: "processing",
      },
      {
        orderId: "ORD-5005",
        product: "USB Hub",
        quantity: 2,
        price: 1200,
        status: "delivered",
      },
    ],
    account: {
      role: "admin",
      isVerified: true,
      isActive: true,
      createdAt: "2025-11-05T09:00:00Z",
      lastLogin: "2026-10-25T07:45:00Z",
    },
    preferences: {
      language: "bn",
      theme: "dark",
      notifications: {
        email: true,
        sms: true,
        push: true,
      },
    },
    stats: {
      totalOrders: 3,
      totalSpent: 9900,
      loyaltyPoints: 350,
    },
  },
  {
    id: "usr_1004",
    name: {
      first: "Ayesha",
      last: "Rahman",
      full: "Ayesha Rahman",
    },
    email: "ayesha@example.com",
    phone: "+8801700000004",
    age: 26,
    gender: "female",
    address: {
      country: "Bangladesh",
      division: "Khulna",
      district: "Khulna",
      city: "Sonadanga",
      postalCode: "9100",
      coordinates: {
        latitude: 22.8158,
        longitude: 89.55,
      },
    },
    company: {
      name: "DataNest",
      department: "Analytics",
      position: "Data Analyst",
      experienceYears: 4,
    },
    skills: ["Python", "SQL", "Excel", "Power BI"],
    socialMedia: {
      facebook: "ayesha.rahman",
      github: "ayesha-data",
      linkedin: "ayesha-rahman",
    },
    orders: [
      {
        orderId: "ORD-5006",
        product: "Laptop Stand",
        quantity: 1,
        price: 1800,
        status: "cancelled",
      },
    ],
    account: {
      role: "user",
      isVerified: false,
      isActive: true,
      createdAt: "2026-03-20T15:00:00Z",
      lastLogin: "2026-10-20T11:10:00Z",
    },
    preferences: {
      language: "bn",
      theme: "light",
      notifications: {
        email: false,
        sms: false,
        push: true,
      },
    },
    stats: {
      totalOrders: 1,
      totalSpent: 0,
      loyaltyPoints: 0,
    },
  },
  {
    id: "usr_1005",
    name: {
      first: "Tanvir",
      last: "Hossain",
      full: "Tanvir Hossain",
    },
    email: "tanvir@example.com",
    phone: "+8801700000005",
    age: 31,
    gender: "male",
    address: {
      country: "Bangladesh",
      division: "Sylhet",
      district: "Sylhet",
      city: "Zindabazar",
      postalCode: "3100",
      coordinates: {
        latitude: 24.8949,
        longitude: 91.8687,
      },
    },
    company: {
      name: "SecureNet",
      department: "Security",
      position: "Security Engineer",
      experienceYears: 7,
    },
    skills: ["Cybersecurity", "Linux", "Networking", "Docker"],
    socialMedia: {
      facebook: "tanvir.tech",
      github: "tanvir-hossain",
      linkedin: "tanvir-hossain-sec",
    },
    orders: [
      {
        orderId: "ORD-5007",
        product: "Mechanical Keyboard",
        quantity: 1,
        price: 4200,
        status: "delivered",
      },
    ],
    account: {
      role: "moderator",
      isVerified: true,
      isActive: false,
      createdAt: "2025-09-12T08:30:00Z",
      lastLogin: "2026-09-30T16:45:00Z",
    },
    preferences: {
      language: "en",
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: false,
      },
    },
    stats: {
      totalOrders: 1,
      totalSpent: 4200,
      loyaltyPoints: 200,
    },
  },
  {
    id: "usr_1006",
    name: {
      first: "Mim",
      last: "Akter",
      full: "Mim Akter",
    },
    email: "mim@example.com",
    phone: "+8801700000006",
    age: 22,
    gender: "female",
    address: {
      country: "Bangladesh",
      division: "Barishal",
      district: "Barishal",
      city: "Nathullabad",
      postalCode: "8200",
      coordinates: {
        latitude: 22.701,
        longitude: 90.3535,
      },
    },
    company: {
      name: "CreativeHub",
      department: "Marketing",
      position: "Content Creator",
      experienceYears: 1,
    },
    skills: ["Content Writing", "SEO", "Social Media"],
    socialMedia: {
      facebook: "mim.creates",
      github: "mim-akter",
      linkedin: "mim-akter",
    },
    orders: [],
    account: {
      role: "user",
      isVerified: true,
      isActive: true,
      createdAt: "2026-04-02T10:15:00Z",
      lastLogin: "2026-10-24T17:30:00Z",
    },
    preferences: {
      language: "bn",
      theme: "light",
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
    },
    stats: {
      totalOrders: 0,
      totalSpent: 0,
      loyaltyPoints: 0,
    },
  },
  {
    id: "usr_1007",
    name: {
      first: "Fahim",
      last: "Chowdhury",
      full: "Fahim Chowdhury",
    },
    email: "fahim@example.com",
    phone: "+8801700000007",
    age: 29,
    gender: "male",
    address: {
      country: "Bangladesh",
      division: "Rangpur",
      district: "Rangpur",
      city: "Modern More",
      postalCode: "5400",
      coordinates: {
        latitude: 25.7439,
        longitude: 89.2752,
      },
    },
    company: {
      name: "DevSphere",
      department: "Engineering",
      position: "Full Stack Developer",
      experienceYears: 6,
    },
    skills: ["TypeScript", "Next.js", "React", "Node.js"],
    socialMedia: {
      facebook: "fahim.dev",
      github: "fahim-chowdhury",
      linkedin: "fahim-chowdhury-dev",
    },
    orders: [
      {
        orderId: "ORD-5008",
        product: "Monitor",
        quantity: 1,
        price: 18500,
        status: "shipped",
      },
    ],
    account: {
      role: "user",
      isVerified: true,
      isActive: true,
      createdAt: "2025-12-18T13:20:00Z",
      lastLogin: "2026-10-25T06:20:00Z",
    },
    preferences: {
      language: "en",
      theme: "dark",
      notifications: {
        email: true,
        sms: true,
        push: true,
      },
    },
    stats: {
      totalOrders: 1,
      totalSpent: 18500,
      loyaltyPoints: 500,
    },
  },
  {
    id: "usr_1008",
    name: {
      first: "Sumaiya",
      last: "Islam",
      full: "Sumaiya Islam",
    },
    email: "sumaiya@example.com",
    phone: "+8801700000008",
    age: 24,
    gender: "female",
    address: {
      country: "Bangladesh",
      division: "Mymensingh",
      district: "Mymensingh",
      city: "Ganginarpar",
      postalCode: "2200",
      coordinates: {
        latitude: 24.7539,
        longitude: 90.4073,
      },
    },
    company: {
      name: "EduTech",
      department: "Education",
      position: "Software Instructor",
      experienceYears: 2,
    },
    skills: ["JavaScript", "Teaching", "React", "Git"],
    socialMedia: {
      facebook: "sumaiya.learns",
      github: "sumaiya-islam",
      linkedin: "sumaiya-islam",
    },
    orders: [
      {
        orderId: "ORD-5009",
        product: "Web Development Book",
        quantity: 2,
        price: 1400,
        status: "delivered",
      },
    ],
    account: {
      role: "user",
      isVerified: true,
      isActive: true,
      createdAt: "2026-05-11T11:45:00Z",
      lastLogin: "2026-10-22T12:40:00Z",
    },
    preferences: {
      language: "bn",
      theme: "light",
      notifications: {
        email: false,
        sms: true,
        push: true,
      },
    },
    stats: {
      totalOrders: 1,
      totalSpent: 2800,
      loyaltyPoints: 90,
    },
  },
  {
    id: "usr_1009",
    name: {
      first: "Imran",
      last: "Kabir",
      full: "Imran Kabir",
    },
    email: "imran@example.com",
    phone: "+8801700000009",
    age: 35,
    gender: "male",
    address: {
      country: "Bangladesh",
      division: "Cumilla",
      district: "Cumilla",
      city: "Kandirpar",
      postalCode: "3500",
      coordinates: {
        latitude: 23.4607,
        longitude: 91.1809,
      },
    },
    company: {
      name: "FinTech Solutions",
      department: "Finance",
      position: "Product Manager",
      experienceYears: 10,
    },
    skills: ["Product Management", "Agile", "SQL", "Leadership"],
    socialMedia: {
      facebook: "imran.kabir",
      github: "imran-kabir",
      linkedin: "imran-kabir-pm",
    },
    orders: [
      {
        orderId: "ORD-5010",
        product: "Laptop",
        quantity: 1,
        price: 85000,
        status: "delivered",
      },
      {
        orderId: "ORD-5011",
        product: "Laptop Bag",
        quantity: 1,
        price: 1800,
        status: "processing",
      },
    ],
    account: {
      role: "admin",
      isVerified: true,
      isActive: true,
      createdAt: "2025-06-25T07:00:00Z",
      lastLogin: "2026-10-25T08:10:00Z",
    },
    preferences: {
      language: "en",
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
    },
    stats: {
      totalOrders: 2,
      totalSpent: 86800,
      loyaltyPoints: 1200,
    },
  },
  {
    id: "usr_1010",
    name: {
      first: "Jannatul",
      last: "Ferdous",
      full: "Jannatul Ferdous",
    },
    email: "jannatul@example.com",
    phone: "+8801700000010",
    age: 27,
    gender: "female",
    address: {
      country: "Bangladesh",
      division: "Dhaka",
      district: "Gazipur",
      city: "Tongi",
      postalCode: "1710",
      coordinates: {
        latitude: 23.8917,
        longitude: 90.4023,
      },
    },
    company: {
      name: "ShopEase",
      department: "E-commerce",
      position: "Operations Manager",
      experienceYears: 5,
    },
    skills: ["E-commerce", "Inventory", "Communication", "Excel"],
    socialMedia: {
      facebook: "jannatul.ferdous",
      github: "jannatul-ferdous",
      linkedin: "jannatul-ferdous",
    },
    orders: [
      {
        orderId: "ORD-5012",
        product: "Smart Watch",
        quantity: 1,
        price: 5500,
        status: "delivered",
      },
    ],
    account: {
      role: "user",
      isVerified: false,
      isActive: true,
      createdAt: "2026-07-08T14:30:00Z",
      lastLogin: "2026-10-24T19:00:00Z",
    },
    preferences: {
      language: "bn",
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: false,
      },
    },
    stats: {
      totalOrders: 1,
      totalSpent: 5500,
      loyaltyPoints: 160,
    },
  },
];

app.get("/", (req, res) => {
  res.send("hello World ");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(prot, () => {
  console.log(`server running port ${prot}`);
});
