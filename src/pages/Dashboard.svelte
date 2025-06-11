<script lang="ts">
  import { dndzone } from "svelte-dnd-action";
  import { onMount } from "svelte";
  import DashboardCard from "../components/widgets/DashboardCard.svelte";
  import TransactionForm from "../components/DialogTransaction.svelte";
  import type { Transaction } from "../components/DialogTransaction.svelte";
  import { accounts, type Account } from "../stores/accounts"; // accountsストアをインポート

  // カードのデータ型を定義
  interface DashboardItem {
    id: string; // dndzone で必須
    title: string;
    content: string;
  }

  // onMount時に初期データとして使うために、別途保持しておく
  const originalDashboardItems: DashboardItem[] = [
    { id: "1", title: "今月の収支", content: "収入: ¥100,000, 支出: ¥80,000" },
    {
      id: "2",
      title: "カテゴリー別支出",
      content: "食費: ¥30,000, 交通費: ¥10,000",
    },
    { id: "3", title: "残高の推移", content: "グラフが表示されます" },
    { id: "4", title: "最近の取引", content: "〇〇に¥500, △△に¥1,200" },
  ];

  const flipDurationMs = 200; // ドラッグ後のアニメーション時間

  // リアクティブ変数
  let dashboardItems: DashboardItem[] = $state([...originalDashboardItems]);
  let transactions: Transaction[] = $state([]);
  let currentAccounts: Account[] = $state([]);

  // ドラッグ&ドロップのイベントハンドラ
  function handleDndConsider(e: CustomEvent<{ items: DashboardItem[] }>) {
    dashboardItems = e.detail.items;
  }

  function handleDndFinalize(e: CustomEvent<{ items: DashboardItem[] }>) {
    dashboardItems = e.detail.items;
    // カードのIDの配列だけを保存する
    const orderedIds = dashboardItems.map((item) => item.id);
    localStorage.setItem("dashboardOrder", JSON.stringify(orderedIds));
    console.log("Finalized order saved:", orderedIds);
  }

  // TransactionFormからのイベントハンドラ
  function handleAddTransaction(newTransaction: Transaction) {
    transactions = [...transactions, newTransaction]; // 新しい取引を追加
  }

  onMount(() => {
    // ダッシュボードの順序を読み込むロジック
    const storedOrder = localStorage.getItem("dashboardOrder");
    if (storedOrder) {
      const orderedIds: string[] = JSON.parse(storedOrder);
      // 保存された順序に基づいてdashboardItemsを並べ替える
      const reorderedItems: DashboardItem[] = [];
      for (const id of orderedIds) {
        const item = originalDashboardItems.find((d) => d.id === id); // originalDashboardItemsは初期データ
        if (item) {
          reorderedItems.push(item);
        }
      }
      // もし新しいカードが追加されたり、古いカードが削除されたりした場合の考慮も必要
      // 例えば、reorderedItemsに含まれていない新規カードを最後に追加するなど
      const newItems = originalDashboardItems.filter(
        (item) => !orderedIds.includes(item.id),
      );
      dashboardItems = [...reorderedItems, ...newItems];
    }

    // ローカルストレージから取引履歴を読み込む
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      transactions = JSON.parse(storedTransactions);
      console.log("Loaded transactions:", transactions);
    }
  });

  // エフェクト
  // transactionsが変更されたらローカルストレージに保存する
  $effect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    console.log("transactions changed, saving to localStorage:", transactions); // 保存時のログ
  });

  // $state()で定義したリアクティブ変数にストアの値を購読して反映させる
  $effect(() => {
    const unsubscribe = accounts.subscribe((value) => {
      currentAccounts = value;
    });
    return unsubscribe;
  });
</script>

<section id="page-home">
  <h2>ダッシュボード（テスト用）</h2>
  <article>
    <progress class="max inverse-primary-text" value="1802" max="3000"
    ></progress>
    <span>食費</span>
    <h2 class="no-margin">1802円</h2>
    <span>/ 3000円</span>
  </article>

  <TransactionForm addTransaction={handleAddTransaction} />

  <div
    class="grid"
    use:dndzone={{ items: dashboardItems, flipDurationMs }}
    onconsider={handleDndConsider}
    onfinalize={handleDndFinalize}
  >
    {#each dashboardItems as item (item.id)}
      <DashboardCard title={item.title} content={item.content} id={item.id} />
    {/each}
  </div>

  <h2 class="text-xl font-bold mt-8">取引履歴（テスト用）</h2>
  <ul class="list">
    {#each transactions as transaction (transaction.id)}
      <li class="item p-2 my-2 variant-soft">
        <span class="font-bold">{transaction.date}</span>:
        {transaction.type === "expense"
          ? "-"
          : "+"}{transaction.amount.toLocaleString()}円 ({currentAccounts.find(
          (a) => a.id === transaction.accountId,
        )?.name || "不明"})
        {transaction.payee ? ` - ${transaction.payee}` : ""}
        {transaction.description ? ` (${transaction.description})` : ""}
      </li>
    {/each}
  </ul>
</section>
