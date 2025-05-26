<script lang="ts">
  export let id: string; // カードを識別するためのID
  export let title: string; // カードのタイトル
  export let content: string; // カードの内容 (今回は簡単な文字列)
</script>

<div class="card fill row middle-align s-padding">
  <header>
    <h5>{title}</h5>
  </header>
  <p>{content}</p>
</div>

<style lang="scss">
  /* BeerCSSのカードスタイルをベースに、少し調整 */
  .card {
    background-color: var(--card); /* BeerCSSのカード背景色変数 */
    border-radius: var(--radius); /* BeerCSSの角丸変数 */
    box-shadow: var(--shadow-2); /* BeerCSSの影変数 */
    padding: 16px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column; /* 内容が多いときに縦に並べる */
    gap: 10px;
    cursor: grab; /* ドラッグできることを示すカーソル */
    transition:
      box-shadow 0.2s ease,
      transform 0.1s ease; /* 少しアニメーションを追加 */

    &:active {
      cursor: grabbing; /* ドラッグ中のカーソル */
      box-shadow: var(--shadow-4); /* ドラッグ中は影を濃く */
      transform: scale(1.02); /* 少し拡大してドラッグ中であることを強調 */
    }
  }

  h5 {
    margin: 0;
    color: var(--on-card); /* BeerCSSのテキスト色変数 */
  }

  p {
    margin: 0;
    color: var(--on-card-variant); /* BeerCSSのテキスト色変数 */
  }
</style>
