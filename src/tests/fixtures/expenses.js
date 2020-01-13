import moment from "moment";

export default [
  {
    id: 1,
    description: "Phone",
    notes: "",
    amount: 4000,
    createdAt: 0
  },
  {
    id: 2,
    description: "Rent",
    notes: "",
    amount: 75000,
    createdAt: moment(0)
      .subtract(7, "days")
      .valueOf()
  },
  {
    id: 3,
    description: "Utility",
    notes: "",
    amount: 10000,
    createdAt: moment(0)
      .add(7, "days")
      .valueOf()
  }
];
