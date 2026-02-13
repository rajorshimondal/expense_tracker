
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ExpenseList = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext);

    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800">History</h3>
            <ul className="list-none">
                {transactions.map(transaction => (
                    <li key={transaction.id} className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center relative overflow-hidden group">
                        <div className={`absolute left-0 top-0 bottom-0 w-2 ${transaction.amount < 0 ? 'bg-red-500' : 'bg-green-500'}`}></div>
                        <div className="ml-4">
                            <span className="block font-semibold text-lg">{transaction.description}</span>
                            <span className="text-gray-500 text-sm">{transaction.date} | {transaction.category} | {transaction.paymentMethod}</span>
                        </div>
                        <div className="flex items-center">
                            <span className={`font-bold text-lg mr-4 ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                {transaction.amount < 0 ? '-' : '+'}₹{Math.abs(transaction.amount)}
                            </span>
                            <button onClick={() => deleteTransaction(transaction.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                x
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
