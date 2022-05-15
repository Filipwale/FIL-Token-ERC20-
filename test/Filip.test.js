const Filip = artifacts.require("Filip")

contract("Filip", (accounts) => {

    before(async () => {
         filip = await Filip.deployed()
    })

    it("it gives the owner of the token 1M tokens", async () => {
        let balance = await filip.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000000', "Balance should be 1M for contract creator")
    })

    it("can transfer tokens between accounts", async () => {
        let amount = web3.utils.toWei('1000', 'ether')
        await filip.transfer(accounts[1], amount, { from: accounts[0] })

        let balance = await filip.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000', "Balance should be 1K for contract creator")
    })
})  