
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddExpenseForm = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('Groceries');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [paymentMethod, setPaymentMethod] = useState('Cash');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            description,
            amount: +amount,
            category,
            date,
            paymentMethod
        }

        addTransaction(newTransaction);
        setDescription('');
        setAmount(0);
        // Keep category, date, paymentMethod for convenience or reset? Let's keep date.
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description..." className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none">
                            <option value="Groceries">Groceries</option>
                            <option value="Rent">Rent</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Health">Health</option>
                            <option value="Transport">Transport</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none">
                            <option value="Cash">Cash</option>
                            <option value="UPI">UPI</option>
                            <option value="Card">Card</option>
                        </select>
                    </div>
                </div>
                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">Add Transaction</button>
            </form>
        </div>
    )
}
