import BankService from '../services/bankaccount.service'

const state = () => ({
    accountAmount: 0,
    accountTransactions: [],
    accountNumberError: 0,
})

const mutations = {
    updateAccountAmount(state, amount) {
        state.accountAmount = amount
    },
    updateTransactions(state, transactions) {
        state.accountTransactions = transactions
    },
    updateAccountNumberError(state, error) {
        state.accountNumberError = error
    },
}

const actions = {
    async getAccountAmount({ commit }, number) {
        console.log('récupération du solde du compte');
        let response = await BankService.getAccountAmount(number)
        if (response.error === 0) {
            commit('updateAccountAmount', response.data)
            commit('updateAccountNumberError', 1)
        } else {
            console.log(response.data)
            commit('updateAccountNumberError', -1)
        }
    },
    async getTransactions({ commit }, number) {
        console.log('récupération des transactions');
        let response = await BankService.getTransactions(number)
        console.log(response)
        if (response.error === 0) {
            commit('updateTransactions', response.data)
            commit('updateAccountNumberError', 1)
        } else {
            console.log(response.data)
            commit('updateAccountNumberError', -1)
        }
    },
}

export default {
    state,
    mutations,
    actions
}
