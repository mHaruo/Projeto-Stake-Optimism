import { Web3 } from 'web3';

export async function getMetaMaskProvider() {

	if (!window.ethereum) throw new Error("MetaMask nao encontrada");

	const web3 = new Web3(window.ethereum);

	const account = await web3.eth.requestAccounts();
	console.log(account);

	if (!account || !account.length) throw new Error('Permiissao nao concedida');

	return web3;
}

export async function getBalance(address) {
	const web3 = await getMetaMaskProvider();
	const balance = await web3.eth.getBalance(address);
	return balance;
}

var web3;
var address = "0x6338eCAe2940523e577f407191064BcE795F1e5E"

if (typeof web3 !== 'undefined') {
	web3 = new Web3(window.web3.currentProvider);
}

else {
	web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
	
}

var abi = [
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "amt",
				"type": "int256"
			}
		],
		"name": "deposite",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "amt",
				"type": "int256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

var contract = new web3.eth.Contract(abi, address);

export async function deposite() {
	var inputval = document.document.getElementById("amountadd").value;

	web3.eth.getAccounts().then(function (account) {
		return contract.methods.deposite_money(inputval).send({ from: account[0] });
	}).then(function (tmp) {
		("amountadd").val("");

	}).catch(function (tmp) {
		alert(tmp);

	})
}
export async function deposit(event) {
		let amount = event.target.closest('amountadd').value;
	}

export async function withdraw() {
	var inputval = document.getElementById("amountrem").value;

	web3.eth.getAccounts().then(function (account) {
		return contract.methods.withdraw(inputval).send({ from: account[0] });
	}).then(function (tmp) {
		("amountrem").val("");

	}).catch(function (tmp) {
		alert(tmp);


	})
}
