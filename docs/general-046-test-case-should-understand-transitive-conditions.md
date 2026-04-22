# Test Case: should understand transitive conditions

If we assign one variable to another and test the new variables properties, we should know that the same applies to the previous variable:

```js
    /**
     * @param {Object} opts
     * @param {Array<CoreUtxo>?} [opts.inputs]
     * @param {Number} [opts.satoshis]
     * @param {Number} [opts.now] - ms
     */
    function mustSelectInputs({ inputs, satoshis, now = Date.now() }) {
      if (inputs) {
        return inputs;
      }

      let fullTransfer = !satoshis;   <=== satoshis is assigned to fullTransfer, which is tested for truthy-ness
      if (fullTransfer) {
        let msg = `'satoshis' must be a positive number unless 'inputs' are specified`;
        let err = new Error(msg);
        throw err;
      }

      let coins = wallet.utxos();
      inputs = DashApi.selectOptimalUtxos(coins, satoshis);   <=== should know that satoshis is NOT undefined

      if (!inputs.length) {
        throw createInsufficientFundsError(coins, satoshis);
      }

      return inputs;
    }
```
