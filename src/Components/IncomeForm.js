import React, { useState } from "react";

const IncomeForm = ({ expense, setExpense, balance, setBalance }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [incomeSource, setIncomeSource] = useState("");
  const [isIncome, setIsIncome] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount) {
      alert("Please Complete Form");
    } else {
      let newExpense = {
        id: expense.length,
        date,
        amount,
        description,
        incomeSource,
        isIncome,
      };
      let arr = expense.concat(newExpense);
      setExpense(arr);

      setBalance(balance + amount);
    }
  };

  return (
    <div class="card-body w-50 mx-auto">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Date</label>
            <input
              type="text"
              class="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div class="form-group col-md-6">
            <label>Amount</label>
            <input
              type="number"
              class="form-control"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Income Source</label>
          <input
            type="text"
            class="form-control"
            value={incomeSource}
            onChange={(e) => setIncomeSource(e.target.value)}
          />
        </div>

        <button class="btn btn-primary" onClick={handleSubmit}>
          Add Income
        </button>
      </form>
    </div>
  );
};

export default IncomeForm;
