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
    addTransaction(newTransaction); // ★ここを修正！
  }
</script>

<div class="card p-4 m-2">
  <h2 class="text-xl font-bold align-center">新しい取引を追加</h2>
  <form onsubmit={handleSubmit}>
    <label class="field label border">
      <input type="date" bind:value={date} required />
      日付
    </label>

    <div class="field label border">
      <label>
        <input
          type="number"
          bind:value={amount}
          placeholder="金額 (例: -1500, 5000)"
          required
          step="any"
        />
        金額
      </label>
    </div>

    <div class="field label border">
      <label>
        <input
          type="text"
          bind:value={description}
          placeholder="説明 (例: 昼食代)"
        />
        説明
      </label>
    </div>

    <div class="field label border">
      <label>
        <input
          type="text"
          bind:value={payee}
          placeholder="支出先/入金元 (例: スーパー, 給料)"
        />
        支出先/入金元
      </label>
    </div>

    <div class="field label border">
      <label>
        <select bind:value={selectedAccountId} required>
          {#each $accounts as account}
            <option value={account.id}>{account.name}</option>
          {/each}
        </select>
        口座
      </label>
    </div>

    <div class="align-center">
      <button class="button primary mt-4">
        <i>add</i><span>取引を追加</span>
      </button>
    </div>
  </form>
</div>

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
