import { useState } from "react";
import { Edit, Trash } from "grommet-icons";
import BaseLayout from "../layouts/BaseLayout";

function Budget() {
	const [totalAmount, setTotalAmount] = useState(0);
	const [userAmount, setUserAmount] = useState("");
	const [productTitle, setProductTitle] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [productTitleError, setProductTitleError] = useState("");
	const [expenditureValue, setExpenditureValue] = useState(0);
	const [balanceValue, setBalanceValue] = useState(0);
	const [list, setList] = useState([]);

	const handleSetBudget = () => {
		if (totalAmount === "" || totalAmount < 0) {
			setErrorMessage("Value cannot be empty or negative");
		} else {
			setErrorMessage("");
			setBalanceValue(totalAmount - expenditureValue);
		}
	};

	const handleAddExpense = () => {
		if (!userAmount || !productTitle) {
			setProductTitleError("Values cannot be empty");
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
		setProductTitle("");
		setUserAmount("");
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
		<BaseLayout>
			<div className='w-11/12 max-w-screen-md mx-auto my-4 text-base mt-20'>
				<div className='w-full '>
					<div className='w-full grid gap-4'>
						<div className='bg-secondary p-5 rounded-md shadow-md'>
							<h3 className='text-black font-medium mb-2'>Budget</h3>
							<p className={`${errorMessage ? "" : "hidden"} text-red-500`}>
								{errorMessage}
							</p>
							<input
								type='number'
								className='block w-full p-2 border border-gray-300 rounded-lg text-gray-700 focus:border-blue mb-2'
								placeholder='Enter Budget'
								value={totalAmount}
								onChange={(e) => setTotalAmount(parseInt(e.target.value))}
							/>
							<button
								className='text-[white] bg-blue px-4 py-2 rounded-md cursor-pointer'
								onClick={handleSetBudget}
							>
								Set Budget
							</button>
						</div>

						<div className='bg-secondary p-5 rounded-md shadow-md'>
							<h3 className='text-black font-medium mb-2'>Expenses</h3>
							<p
								className={`${productTitleError ? "" : "hidden"} text-red-500`}
							>
								{productTitleError}
							</p>
							<input
								type='text'
								className='block w-full p-2 border border-gray-300 rounded-lg text-gray-700 mb-2'
								placeholder='Enter Title of Product'
								value={productTitle}
								onChange={(e) => setProductTitle(e.target.value)}
							/>
							<input
								type='number'
								className='block w-full p-2 border border-gray-300 rounded-lg text-gray-700 mb-2'
								placeholder='Enter Cost of Product'
								value={userAmount}
								onChange={(e) => setUserAmount(e.target.value)}
							/>
							<button
								className='text-[white] bg-blue px-4 py-2 rounded-md cursor-pointer'
								onClick={handleAddExpense}
							>
								Check Amount
							</button>
						</div>
						<div className='bg-blue text-[white] rounded-md shadow-md p-5 flex justify-between items-center'>
							<div>
								<p className='font-medium mb-2'>Total Budget</p>
								<span
									id='amount'
									className='block text-center font-normal text-gray-300'
								>
									{totalAmount}
								</span>
							</div>
							<div>
								<p className='font-medium mb-2'>Expenses</p>
								<span
									id='expenditure-value'
									className='block text-center font-normal text-gray-300'
								>
									{expenditureValue}
								</span>
							</div>
							<div>
								<p className='font-medium mb-2'>Balance</p>
								<span
									id='balance-amount'
									className='block text-center font-normal text-gray-300'
								>
									{balanceValue}
								</span>
							</div>
						</div>
						<div className='bg-secondary p-5 rounded-lg shadow-md'>
							<h3 className='text-black font-medium mb-4'>Expense List</h3>
							<div className='space-y-4' id='list'>
								{list.map((item, index) => (
									<div
										key={index}
										className='grid grid-cols-3 items-center space-x-4 border-l-4 border-blue p-4'
									>
										<p className='font-medium text-gray-800'>{item.title}</p>
										<p className='text-gray-700'>{item.amount}</p>
										<div className='flex space-x-4 justify-end'>
											<button
												className='text-blue hover:text-blue'
												style={{ fontSize: "1.2em" }}
												onClick={() => handleModifyExpense(index, true)}
											>
												<Edit color='Blue' />
											</button>
											<button
												className='text-blue hover:text-blue'
												style={{ fontSize: "1.2em" }}
												onClick={() => handleModifyExpense(index)}
											>
												<Trash color='Blue' />
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</BaseLayout>
	);
}

export default Budget;
