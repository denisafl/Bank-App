'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
 <div class='movements__row'>
          <div class='movements__type movements__type--${type}'>${index + 1}${type}</div>
          <div class='movements__value'>${movement}€</div>
        </div>
`;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
};

const calDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
  const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate / 100).filter((int, i, arr) => {
    console.log(arr);
    return int >= 1;
  }).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
]);

/////////////////////////////////////////////////

//let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD
/*
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

 */

// SPLICE METHOD
/*
console.log(arr.splice(2));
//arr.splice(-1);
console.log(arr);

arr.splice(1, 2);
console.log(arr);

 */

// REVERSE
/*
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
//console.log(arr2.reverse());
//console.log(arr2);


// CONCAT
const letters = arr.concat(arr2);
//console.log(letters);
//console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('-'));

 */
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting the last element
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

 */

/*
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log('----FOREACH----');
movements.forEach(function(movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

 */

// MAP
/*
currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, set) {
  console.log(`${value}: ${value}`);
});

 */

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//const eurToUsd = 1.1;
//const movementsUSD = movements.map(mov => mov * eurToUsd);
//console.log(movements);
//console.log(movementsUSD);

/*
const movementsUSDFor = [];
for (const mov of movements) {
  movementsUSDFor.push(mov * eurToUsd);
}
console.log(movementsUSD);

const movementsDescription = movements.map(function(mov, index, movements) {
  if (mov > 0) {
    return `Movement ${index + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${index + 1}: You withdrew ${Math.abs(mov)}`;
  }
});
console.log(movementsDescription);

 */


const createUsernames = function(accounts) {

  accounts.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]
    ).join('');
  });
};
(createUsernames(accounts));
//console.log(accounts);

const updateUI = function(acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calDisplayBalance(currentAccount);
  // Display summary
  calcDisplaySummary(currentAccount);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  //console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and a welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    // Clear the inputs fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
// Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
// Add the movement
    currentAccount.movements.push(amount);

    // Update the UI
    updateUI(currentAccount);
  } else {
    alert('You are not able to take a loan');
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);
    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;

  }
  inputCloseUsername.value = inputClosePin.value = '';
});

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const depositsFor = [];
for (const m of movements) {
  if (m > 0) {
    depositsFor.push(m);
  }
}
console.log(depositsFor);

const withdrawals = [];
for (const n of movements) {
  if (n < 0) {
    withdrawals.push(n);
  }
}
console.log(withdrawals);

const withdrawals1 = movements.filter(mov => mov < 0);
console.log(withdrawals1);

 */
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function(acc, curr, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr;
}, 0);


const balance = movements.reduce((acc, curr) => acc + curr, 0);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
//console.log(balance2);

 */


// PIPELINE
/*
const eurToUsd = 1.1;
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

 */

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// EQUALITY
console.log(movements.includes(-130));

// CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// FLAT
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// Sorting arrays
const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

console.log(movements);

movements.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(movements);

let sortedState = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sortedState);
  sortedState = !sortedState;
});

//  Empty arrays + fill method
const x = new Array(7);
x.fill(1, 3, 5);
console.log(x);

const arrNew = [1, 2, 3, 4, 5, 6, 7];
arrNew.fill(23, 2, 6);
console.log(arrNew);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (curr, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), elem => Number(elem.textContent.replace('€', '')));

  console.log(movementsUI);
});

// EXERCISE 1
const bankDepositsSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, mov) => mov + acc, 0);
console.log(bankDepositsSum);

// EXERCISE 2
/*
const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
console.log(numDeposits1000);
 */

const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);
console.log(numDeposits1000);

// EXERCISE 3
const { deposits, withdrawals } = accounts.flatMap(acc => acc.movements).reduce((sums, curr) => {
  curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
  // sums[curr > 0 ? 'deposits' : 'withdrawals'] +=curr;
  return sums;
}, { deposits: 0, withdrawals: 0 });

console.log(deposits, withdrawals);

// EXERCISE 4
const convertTitleCase = function(title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

  const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;

  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;

  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = 'HackerRank ';

  // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
  console.log(Number(secondInteger) + firstInteger);
  // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
  console.log(Number(firstDecimal + secondDecimal));
  // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
  console.log(firstString.concat(secondString));
}

performOperation(12, 4.32, 'is the best place to learn and practice coding!');
