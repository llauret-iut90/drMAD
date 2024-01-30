import {bankaccounts, items, shopusers, transactions} from './data'
import {v4 as uuidv4} from 'uuid'

/* controllers: les fonctions ci-dessous doivent mimer ce que renvoie l'API en fonction des requêtes possibles.

  Dans certains cas, ces fonctions vont avoir des paramètres afin de filtrer les données qui se trouvent dans data.js
  Ces paramètres sont généralement les mêmes qu'ils faudrait envoyer à l'API, mais pas forcément.

  Exemple 1 : se loguer aurpès de la boutique


 */

function shopLogin(data) {
    if ((!data.login) || (!data.password)) return {error: 1, status: 404, data: 'aucun login/pass fourni'}
    let user = shopusers.find(e => e.login === data.login && e.password === data.password)
    console.log('je suis dans le controller')
    console.log(user)
    console.log("je suis mort")
    if (!user) return {error: 1, status: 404, data: 'login or password incorrect'}
    if (!user.uuid) {
        user.uuid = uuidv4()
    }
    if (!user.basket) {
        user.basket = {items: []};
    }


    return {
        error: 0,
        status: 200,
        data: {
            name: user.name,
            login: user.login,
            email: user.email,
            session: user.session,
            basket: user.basket,
            orders: user.orders,
            uuid: user.uuid
        }
    }
}

function getAllViruses() {
    return {error: 0, data: items}
}

function getAccountAmount(number) {
    if (number === undefined || number === "") return {error: 1, status: 404, data: 'aucun numéro de compte fourni'}
    let account = bankaccounts.find(e => e.number === number)
    if (!account) return {error: 1, status: 404, data: 'compte inconnu'}
    return {error: 0, data: account.amount}
}

function getTransactions(number) {
    if (number === undefined || number === "") return {error: 1, status: 404, data: 'aucun numéro de compte fourni'}
    let account = bankaccounts.find(e => e.number === number)
    if (!account) return {error: 1, status: 404, data: 'compte inconnu'}
    let transactionsList = transactions.filter(e => e.account === account._id)
    return {error: 0, status: 200, data: transactionsList}
}

// function createOrderFromBasket() {
//     const basket = store.state.shop.shopUser.basket;
//     return {
//         items: basket.map(item => ({
//             item: {
//                 name: item.name,
//                 description: item.description,
//                 price: item.price,
//                 promotion: item.promotion,
//                 object: item.object
//             },
//             amount: item.amount
//         })),
//         date: new Date(),
//         total: basket.reduce((total, item) => total + item.price * item.amount, 0),
//         status: 'waiting_payment',
//         uuid: uuidv4()
//     };
// }

function getOrder(orderId, userId) {
    const orders = shopusers.find(user => user.id === userId).orders;
    return orders.find(order => order.id === orderId);
}

export default {
    shopLogin,
    getAllViruses,
    getAccountAmount,
    getTransactions,
    // createOrderFromBasket,
    getOrder
}