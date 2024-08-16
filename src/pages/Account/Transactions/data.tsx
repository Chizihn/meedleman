import profileImage from "../../../assets/images/blank-profile-picture-973460_960_720.webp";

const transactions = [
  {
    id: 0,
    profileImg: { profileImage },
    title: "Purchase of 10 Macbook Pro",
    price: 2000000,
    description: "Purchase of macbook pro",
    due: "Monday",
    date: "May 5th, 2024",
    status: "Completed",
  },
  {
    id: 1,
    profileImg: { profileImage },
    title: "E-commerce website development",
    price: 500000,
    description: "Payment for e-commerce website",
    due: "Tuesday",
    date: "January 15th, 2024",
    status: "In-progress",
  },
  {
    id: 2,
    profileImg: { profileImage },
    title: "Purchase of shoes",
    price: 30000,
    description: "Payment for bulk shoe delivery",
    due: "Sunday",
    date: "March 25th, 2024",
    status: "In-progress",
  },
  {
    id: 3,
    profileImg: { profileImage },
    title: "Project Collaboration",
    price: 100000,
    description: "Group Project Payment",
    due: "Friday",
    date: "Feb 2nd, 2024",
    status: "Group",
  },
];

export default transactions;
