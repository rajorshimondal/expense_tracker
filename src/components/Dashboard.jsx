
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Dashboard = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    // Helper to check if date is today
    const isToday = (dateString) => {
        const today = new Date();
        const date = new Date(dateString);
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    }

    // Helper for current week (simple version: last 7 days)
    const isThisWeek = (dateString) => {
        const today = new Date();
        const date = new Date(dateString);
        const diffTime = Math.abs(today - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 7;
    }

    // Helper for current month
    const isThisMonth = (dateString) => {
        const today = new Date();
        const date = new Date(dateString);
        return date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    }

    const dailyTotal = transactions
        .filter(t => isToday(t.date))
        .reduce((acc, item) => (acc += item.amount), 0)
        .toFixed(2);

    const weeklyTotal = transactions
        .filter(t => isThisWeek(t.date))
        .reduce((acc, item) => (acc += item.amount), 0)
        .toFixed(2);

    const monthlyTotal = transactions
        .filter(t => isThisMonth(t.date))
        .reduce((acc, item) => (acc += item.amount), 0)
        .toFixed(2);

    return (
        <div className="flex flex-col space-y-4 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl uppercase">Total Balance</h2>
                <h1 className="text-3xl font-bold tracking-wider">₹{total}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-emerald-500">
                    <h4 className="text-gray-500 uppercase text-xs font-bold">Today</h4>
                    <p className="text-xl font-bold text-gray-800">₹{dailyTotal}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                    <h4 className="text-gray-500 uppercase text-xs font-bold">This Week</h4>
                    <p className="text-xl font-bold text-gray-800">₹{weeklyTotal}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                    <h4 className="text-gray-500 uppercase text-xs font-bold">This Month</h4>
                    <p className="text-xl font-bold text-gray-800">₹{monthlyTotal}</p>
                </div>
            </div>
        </div>
    )
}
