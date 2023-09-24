import LocalSource from "@/datasource/controller";


async function getAccountAmountFromLocalSource(number) {
    return LocalSource.getAccountAmount(number)
}

async function getAccountAmount(number) {
    let response;
    try {
        response = await getAccountAmountFromLocalSource(number)
    } catch (err) {
        response = {error: 1, status: 404, data: 'erreur rÃ©seau, impossible de rÃ©cupÃ©rer le solde du compte'}
    }
    console.log(response)
    return response
}

async function getTransactionsFromLocalSource(number) {
    return LocalSource.getTransactions(number)
}

async function getTransactions(number) {
    let response;
    try {
        response = await getTransactionsFromLocalSource(number)
    } catch (err) {
        response = {error: 1, status: 404, data: 'erreur rÃ©seau, impossible de rÃ©cupÃ©rer les transactions'}
    }
    console.log(response)
    return response
}

export default {
    getAccountAmount,
    getTransactions
}