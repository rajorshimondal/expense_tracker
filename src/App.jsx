
import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import { Dashboard } from './components/Dashboard';
import { ExpenseList } from './components/ExpenseList';
import { AddExpenseForm } from './components/AddExpenseForm';

function App() {
  return (
    <GlobalProvider>
      <div className="min-h-screen bg-gray-100 font-sans">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight">Expense Tracker</h1>
            <p className="text-gray-500 mt-2">Manage your daily finances with ease</p>
          </header>

          <Dashboard />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AddExpenseForm />
            <ExpenseList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
