<script lang="ts">
  import { accounts } from "../stores/accounts";
  import { v4 as uuidv4 } from "uuid";
  let {
    addTransaction,
  }: { addTransaction: (transaction: Transaction) => void } = $props();

  // フォームの入力値
  let date: string = $state(new Date().toISOString().slice(0, 10)); // 初期値は関数呼び出しの結果
  let amount: number | null = $state(null);
  let description: string = $state("");
  let payee: string = $state("");
  // accountsストアの初期値が空の場合に備えて、$accounts[0]?.id || '' を使います。
  let selectedAccountId: string = $state($accounts[0]?.id || "");

  // 取引データの型定義
  export interface Transaction {
    id: string;
    date: string; // YYYY-MM-DD 形式
    amount: number;
    description: string;
    payee: string; // 支出先/入金元
    accountId: string; // どの口座から/へか
    type: "income" | "expense"; // 収入か支出か
  }

  function handleSubmit() {
    if (amount === null || amount === 0) {
      alert("金額を入力してください。");
      return;
    }
    if (!selectedAccountId) {
      alert("口座を選択してください。");
      return;
    }

    const transactionType: "income" | "expense" =
      amount >= 0 ? "income" : "expense";

    const newTransaction: Transaction = {
      id: uuidv4(),
      date: date,
      amount: Math.abs(amount),
      description: description.trim(),
      payee: payee.trim(),
      accountId: selectedAccountId,
      type: transactionType,
    };

    // フォームをリセット
    amount = null;
    description = "";
    payee = "";
    date = new Date().toISOString().slice(0, 10);
    // selectedAccountIdはそのままか、初期値に戻すか検討

    // Svelte 5 の新しいイベント発火方法: 親から渡された関数を直接呼び出す
    addTransaction(newTransaction);

    // ダイアログを閉じる
    ui("#dialog-transaction");
  }
</script>

<dialog id="dialog-transaction">
  <h5 class="">新しい取引を追加</h5>
  <div class="field label border">
    <input
      type="date"
      id="dialog-transaction-date"
      bind:value={date}
      required
    />
    <label for="dialog-transaction-date">日付</label>
  </div>

  <div class="field label border">
    <input
      type="number"
      id="dialog-transaction-amount"
      bind:value={amount}
      required
      step="any"
    />
    <label for="dialog-transaction-amount">金額</label>
  </div>

  <div class="field label border">
    <input
      type="text"
      id="dialog-transaction-description"
      bind:value={description}
    />
    <label for="dialog-transaction-description">説明</label>
  </div>

  <div class="field label border">
    <input type="text" id="dialog-transaction-payee" bind:value={payee} />
    <label for="dialog-transaction-payee">支出先/入金元</label>
  </div>

  <div class="field label border">
    <select
      id="dialog-transaction-account"
      bind:value={selectedAccountId}
      required
    >
      {#each $accounts as account}
        <option value={account.id}>{account.name}</option>
      {/each}
    </select>
    <label for="dialog-transaction-account">口座</label>
  </div>

  <button class="button primary" onclick={handleSubmit}>
    <i>add</i><span>取引を追加</span>
  </button>
</dialog>

<style lang="scss">
  /* ... スタイルは変更なし ... */
  .card {
    background-color: var(--card);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-1);
  }
  .field {
    margin-bottom: 1rem;
  }
</style>
