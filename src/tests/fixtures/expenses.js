import moment from "moment";

export default [
  {
    id: 1,
    description: "Phone",
    note: "test note 1",
    amount: 4000,
    createdAt: 0
  },
  {
    id: 2,
    description: "Rent",
    note: "test note 2",
    amount: 75000,
    createdAt: moment(0)
      .subtract(7, "days")
      .valueOf()
  },
  {
    id: 3,
    description: "Utility",
    note: "test note 3",
    amount: 10000,
    createdAt: moment(0)
      .add(7, "days")
      .valueOf()
  }
];
