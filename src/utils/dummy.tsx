import defaultSamsung from "../assets/defaultSamsung.jpg";
import defaultIphone from "../assets/defaultIphone.png";
import defaultXiaomi from "../assets/defaultXiaomi.jpg";

export const dataGateways = [
  {
    id: "samsung",
    name: "samsung",
    sinc: "sincSamsung",
    ipv4: "10.10.10.0",
  },
  {
    id: "iphone",
    name: "iphone",
    sinc: "sincIphone",
    ipv4: "11.10.10.0",
  },
  {
    id: "xiaomi",
    name: "xiaomi",
    sinc: "sincXiaomi",
    ipv4: "12.10.10.0",
  },
];
export const dataDevices = {
  samsung: [
    {
      id: 1,
      vendor: "samsung",
      name: "Galaxy S23 Ultra",
      image: defaultSamsung,
      dateCreated: "12/12/2020",
      status: "online",
      ipv4: "10.10.10.1",
    },
    {
      id: 2,
      vendor: "samsung",
      name: "Galaxy S23 | S23+",
      image: defaultSamsung,
      dateCreated: "1/10/2022",
      status: "online",
      ipv4: "10.10.10.2",
    },
    {
      id: 3,
      vendor: "samsung",
      name: "Galaxy Tab S8 Ultra",
      image: defaultSamsung,
      dateCreated: "10/2/2021",
      status: "offline",
      ipv4: "10.10.10.11",
    },
    {
      id: 4,
      vendor: "samsung",
      name: "Galaxy Tab S8 Ultra",
      image: defaultSamsung,
      dateCreated: "12/2/2019",
      status: "online",
      ipv4: "10.10.10.4",
    },
    {
      id: 5,
      vendor: "samsung",
      name: "Galaxy Z Fold4.",
      image: defaultSamsung,
      dateCreated: "12/2/2019",
      status: "online",
      ipv4: "10.10.10.5",
    },
    {
      id: 6,
      vendor: "samsung",
      name: "Galaxy Tab S8 Ultra",
      image: defaultSamsung,
      dateCreated: "10/2/2021",
      status: "online",
      ipv4: "10.10.10.6",
    },
    {
      id: 7,
      vendor: "samsung",
      name: "Galaxy Tab S8 Ultra",
      image: defaultSamsung,
      dateCreated: "10/2/2021",
      status: "offline",
      ipv4: "10.10.10.7",
    },
    {
      id: 8,
      vendor: "samsung",
      name: "Galaxy Watch5 Pro.",
      image: defaultSamsung,
      dateCreated: "5/6/2022",
      status: "online",
      ipv4: "10.10.10.8",
    },
    {
      id: 9,
      vendor: "samsung",
      name: "Galaxy Watch5 Pro.",
      image: defaultSamsung,
      dateCreated: "5/6/2022",
      status: "offline",
      ipv4: "10.10.10.9",
    },
    {
      id: 10,
      vendor: "samsung",
      name: "Galaxy Watch5 Pro.",
      image: defaultSamsung,
      dateCreated: "5/6/2022",
      status: "offline",
      ipv4: "10.10.10.10",
    },
    {
      id: 11,
      vendor: "samsung",
      name: "Galaxy Buds2 Pro.",
      image: defaultSamsung,
      dateCreated: "5/8/2022",
      status: "online",
      ipv4: "10.10.10.3",
    },
  ],
  iphone: [
    {
      id: 1,
      vendor: "iphone",
      name: "iPhone X",
      image: defaultIphone,
      dateCreated: "12/12/2120",
      status: "online",
      ipv4: "11.10.10.1",
    },
    {
      id: 2,
      vendor: "iphone",
      name: "iPhone 13 mini",
      image: defaultIphone,
      dateCreated: "1/10/2012",
      status: "online",
      ipv4: "11.10.10.2",
    },
    {
      id: 3,
      vendor: "iphone",
      name: "iPhone X",
      image: defaultIphone,
      dateCreated: "10/2/2011",
      status: "offline",
      ipv4: "11.10.10.3",
    },
    {
      id: 4,
      vendor: "iphone",
      name: "iPhone 13",
      image: defaultIphone,
      dateCreated: "12/2/2019",
      status: "online",
      ipv4: "11.10.10.4",
    },
    {
      id: 5,
      vendor: "iphone",
      name: "iPhone 13 mini",
      image: defaultIphone,
      dateCreated: "12/2/2019",
      status: "online",
      ipv4: "11.10.10.11",
    },
    {
      id: 6,
      vendor: "iphone",
      name: "iPhone 13",
      image: defaultIphone,
      dateCreated: "10/2/2011",
      status: "online",
      ipv4: "11.10.10.6",
    },
    {
      id: 7,
      vendor: "iphone",
      name: "iPhone 13 Pro",
      image: defaultIphone,
      dateCreated: "10/2/2011",
      status: "offline",
      ipv4: "11.10.10.7",
    },
    {
      id: 8,
      vendor: "iphone",
      name: "iPhone 13 Pro Max",
      image: defaultIphone,
      dateCreated: "5/6/2021",
      status: "online",
      ipv4: "11.10.10.12",
    },
    {
      id: 9,
      vendor: "iphone",
      name: "iPhone 13 Pro Max",
      image: defaultIphone,
      dateCreated: "5/6/2021",
      status: "offline",
      ipv4: "11.10.10.9",
    },
    {
      id: 10,
      vendor: "iphone",
      name: "iPhone SE (tercera generación)",
      image: defaultIphone,
      dateCreated: "5/6/2021",
      status: "offline",
      ipv4: "11.10.10.10",
    },
    {
      id: 11,
      vendor: "iphone",
      name: "iPhone SE (tercera generación)",
      image: defaultIphone,
      dateCreated: "5/8/2021",
      status: "online",
      ipv4: "11.10.10.5",
    },
  ],
  xiaomi: [
    {
      id: 1,
      vendor: "xiaomi",
      name: "Xiaomi 13 Pro",
      image: defaultXiaomi,
      dateCreated: "12/12/2120",
      status: "online",
      ipv4: "12.10.10.18",
    },
    {
      id: 2,
      vendor: "xiaomi",
      name: "Xiaomi 12 Pro",
      image: defaultXiaomi,
      dateCreated: "1/10/2012",
      status: "online",
      ipv4: "12.10.10.2",
    },
    {
      id: 3,
      vendor: "xiaomi",
      name: "Xiaomi 13 Pro",
      image: defaultXiaomi,
      dateCreated: "10/2/2011",
      status: "offline",
      ipv4: "12.10.10.3",
    },
    {
      id: 4,
      vendor: "xiaomi",
      name: "Xiaomi 13",
      image: defaultXiaomi,
      dateCreated: "12/2/2019",
      status: "online",
      ipv4: "12.10.10.4",
    },
    {
      id: 5,
      vendor: "xiaomi",
      name: "Xiaomi 13 Pro",
      image: defaultXiaomi,
      dateCreated: "12/2/2019",
      status: "online",
      ipv4: "12.10.10.10",
    },
    {
      id: 6,
      vendor: "xiaomi",
      name: "Xiaomi 12 Pro",
      image: defaultXiaomi,
      dateCreated: "10/2/2011",
      status: "online",
      ipv4: "12.10.10.6",
    },
    {
      id: 7,
      vendor: "xiaomi",
      name: "Xiaomi 12X",
      image: defaultXiaomi,
      dateCreated: "10/2/2011",
      status: "offline",
      ipv4: "12.10.10.7",
    },
    {
      id: 8,
      vendor: "xiaomi",
      name: "Xiaomi 12X",
      image: defaultXiaomi,
      dateCreated: "5/6/2021",
      status: "online",
      ipv4: "12.10.10.12",
    },
    {
      id: 9,
      vendor: "xiaomi",
      name: "Xiaomi 12 Ultra",
      image: defaultXiaomi,
      dateCreated: "5/6/2021",
      status: "offline",
      ipv4: "12.10.10.9",
    },
    {
      id: 10,
      vendor: "xiaomi",
      name: "Xiaomi Note 7 Pro",
      image: defaultXiaomi,
      dateCreated: "5/6/2021",
      status: "offline",
      ipv4: "12.10.10.19",
    },
    {
      id: 11,
      vendor: "xiaomi",
      name: "Xiaomi Note 7",
      image: defaultXiaomi,
      dateCreated: "5/8/2021",
      status: "online",
      ipv4: "12.10.10.5",
    },
  ],
};
