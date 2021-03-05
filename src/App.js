import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseForm from './Components/ExpenseForm';
import TabNav from './Components/TabNav';
import Tab from './Components/Tab';
import TransactionsTable from './Components/TransactionsTable';
import IncomeForm from './Components/IncomeForm';
import './style.css';
const App = () => {
  const [selected, setSelected] = useState('Expense');
  const [expenses, setExpense] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    localStorage.setItem('expense', JSON.stringify(expenses));
    Number(localStorage.setItem('balance', JSON.stringify(balance)));
  }, [expenses, balance]);

  return (
    <div class='d-flex align-items-center flex-column'>
      <h1 class='title '>Expense Tracker</h1>
      <h2 class='p-2'>Current Balance: {`$${balance}`}</h2>

      <TabNav
        tabs={['Expense', 'Income', 'Transactions']}
        selected={selected}
        setSelected={setSelected}
      >
        <Tab isSelected={selected === 'Expense'}>
          <ExpenseForm
            expenses={expenses}
            setExpense={setExpense}
            balance={balance}
            setBalance={setBalance}
          />
        </Tab>
        <Tab isSelected={selected === 'Income'}>
          <IncomeForm
            expenses={expenses}
            setExpense={setExpense}
            balance={balance}
            setBalance={setBalance}
          />
        </Tab>

        <Tab isSelected={selected === 'Transactions'}>
          <TransactionsTable
            expenses={expenses}
            setExpense={setExpense}
            balance={balance}
            setBalance={setBalance}
          />
        </Tab>
      </TabNav>
    </div>
  );
};

export default App;
