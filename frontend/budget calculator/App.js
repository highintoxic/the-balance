import React, { useState } from 'react';
import './App.css';

function App() {
    const [totalAmount, setTotalAmount] = useState(0);
    const [userAmount, setUserAmount] = useState('');
    const [productTitle, setProductTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [productTitleError, setProductTitleError] = useState('');
    const [expenditureValue, setExpenditureValue] = useState(0);
    const [balanceValue, setBalanceValue] = useState(0);
    const [list, setList] = useState([]);

    const handleSetBudget = () => {
        if (totalAmount === "" || totalAmount < 0) {
            setErrorMessage('Value cannot be empty or negative');
        } else {
            setErrorMessage('');
            setBalanceValue(totalAmount - expenditureValue);
        }
    };

    const handleAddExpense = () => {
        if (!userAmount || !productTitle) {
            setProductTitleError('Values cannot be empty');
            return;
        }
        const newExpense = parseInt(userAmount);
        const newExpenditureValue = expenditureValue + newExpense;
        const newBalanceValue = totalAmount - newExpenditureValue;

        const newExpenseItem = {
            title: productTitle,
            amount: newExpense,
        };

        setList([...list, newExpenseItem]);
        setExpenditureValue(newExpenditureValue);
        setBalanceValue(newBalanceValue);
        setProductTitle('');
        setUserAmount('');
    };

    const handleModifyExpense = (index, edit = false) => {
        const expenseToModify = list[index];
        const newBalanceValue = balanceValue + expenseToModify.amount;
        const newExpenditureValue = expenditureValue - expenseToModify.amount;

        setList(list.filter((_, i) => i !== index));
        setBalanceValue(newBalanceValue);
        setExpenditureValue(newExpenditureValue);

        if (edit) {
            setProductTitle(expenseToModify.title);
            setUserAmount(expenseToModify.amount);
        }
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="sub-container">
                    <div className="total-amount-container">
                        <h3>Budget</h3>
                        <p className={errorMessage ? '' : 'hide error'}>{errorMessage}</p>
                        <input
                            type="number"
                            id="total-amount"
                            placeholder="Enter Budget"
                            value={totalAmount}
                            onChange={(e) => setTotalAmount(parseInt(e.target.value))}
                        />
                        <button className="submit" onClick={handleSetBudget}>Set Budget</button>
                    </div>

                    <div className="user-amount-container">
                        <h3>Expenses</h3>
                        <p className={productTitleError ? '' : 'hide error'}>{productTitleError}</p>
                        <input
                            type="text"
                            className="product-title"
                            id="product-title"
                            placeholder="Enter Title of Product"
                            value={productTitle}
                            onChange={(e) => setProductTitle(e.target.value)}
                        />
                        <input
                            type="number"
                            id="user-amount"
                            placeholder="Enter Cost of Product"
                            value={userAmount}
                            onChange={(e) => setUserAmount(e.target.value)}
                        />
                        <button className="submit" onClick={handleAddExpense}>Check Amount</button>
                    </div>
                </div>

                <div className="output-container flex-space">
                    <div>
                        <p>Total Budget</p>
                        <span id="amount">{totalAmount}</span>
                    </div>
                    <div>
                        <p>Expenses</p>
                        <span id="expenditure-value">{expenditureValue}</span>
                    </div>
                    <div>
                        <p>Balance</p>
                        <span id="balance-amount">{balanceValue}</span>
                    </div>
                </div>
            </div>

            <div className="list">
                <h3>Expense List</h3>
                <div className="list-container" id="list">
                    {list.map((item, index) => (
                        <div key={index} className="sublist-content flex-space">
                            <p className="product">{item.title}</p>
                            <p className="amount">{item.amount}</p>
                            <button
                                className="fa-solid fa-pen-to-square edit"
                                style={{ fontSize: '1.2em' }}
                                onClick={() => handleModifyExpense(index, true)}
                            ></button>
                            <button
                                className="fa-solid fa-trash-can delete"
                                style={{ fontSize: '1.2em' }}
                                onClick={() => handleModifyExpense(index)}
                            ></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
