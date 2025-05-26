<script lang="ts">
  import { dndzone } from "svelte-dnd-action";
  import DashboardCard from "../lib/DashboardCard.svelte"; // ★パスを修正！
  import { onMount } from "svelte";

  // カードのデータ型を定義
  interface DashboardItem {
    id: string; // dndzone で必須
    title: string;
    content: string;
  }

  const flipDurationMs = 200; // ドラッグ後のアニメーション時間

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

  onMount(() => {
    const storedOrder = localStorage.getItem("dashboardOrder");
    if (storedOrder) {
      const orderedIds: string[] = JSON.parse(storedOrder);
      // 保存された順序に基づいてdashboardItemsを並べ替える
      // 元の配列からIDを元にカードを見つけて並べ替えるロジックが必要
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
  });

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
  // 初期状態はoriginalDashboardItemsから始まる
  let dashboardItems: DashboardItem[] = [...originalDashboardItems];
</script>

<section id="page-home">
  <h1 class="align-center">ダッシュボード</h1>
  <article>
    <progress class="max inverse-primary-text" value="1802" max="3000"
    ></progress>
    <span>食費</span>
    <h2 class="no-margin">1802円</h2>
    <span>/ 3000円</span>
  </article>

  <div
    class="grid gap-4 auto"
    use:dndzone={{ items: dashboardItems, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each dashboardItems as item (item.id)}
      <DashboardCard title={item.title} content={item.content} id={item.id} />
    {/each}
  </div>
</section>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
</style>
