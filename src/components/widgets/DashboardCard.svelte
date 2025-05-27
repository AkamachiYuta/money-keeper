<script lang="ts">
  export let id: string; // カードを識別するためのID
  export let title: string; // カードのタイトル
  export let content: string; // カードの内容 (今回は簡単な文字列)
</script>

<article class="fill s12 m6 l3">
  <h5>{title}</h5>
  <p>{content}</p>
</article>
