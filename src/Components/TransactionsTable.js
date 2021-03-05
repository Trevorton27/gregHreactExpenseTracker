import React, { useState } from 'react';

const TransactionsTable = ({ expenses, setExpense, balance, setBalance }) => {
  const [show, setShow] = useState(null);

  const deleteRow = (id, amount) => {
    const newList = expenses.filter((expense) => expense.id !== id);
    setExpense(newList);

    setBalance(balance - amount);
  };

  const renderTableData = () => {
    return expenses.map((expense) => {
      const {
        id,
        date,
        amount,
        description,
        purchasedFrom,
        incomeSource
      } = expense;
      return (
        <tr onMouseOver={(e) => setShow(expense.id)} key={id}>
          <td>{date}</td>
          <td>{description}</td>
          <td>{expense.isIncome ? 'N/A' : purchasedFrom}</td>
          <td>{expense.isIncome ? incomeSource : 'N/A'}</td>
          <td class={expense.isIncome ? 'text-dark' : 'text-danger'}>
            {expense.isIncome ? `$${amount}` : `-$${amount}`}
          </td>
          <td onClick={() => deleteRow(expense.id, expense.amount)}>
            {show === expense.id && <h5 className='deleteButton'>❌</h5>}
          </td>
        </tr>
      );
    });
  };

  return (
    <table class='table table-hover table-lg'>
      <thead class='thead-light'>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Purchased From</th>
          <th>Income Source</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
};

export default TransactionsTable;
