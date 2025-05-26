<script lang="ts">
  import ColorPicker from "svelte-awesome-color-picker";
  import { userTheme } from "../components/theme";

  let themeMode = $state(ui("mode"));
  let themeColor = $state(localStorage.getItem("userThemeColor") ?? "#804040");

  $effect(() => {
    userTheme(themeColor);
    console.log(themeMode);
    console.log(themeColor);
  });
</script>

<section id="page-settings">
  <h2 class="center-align">設定</h2>
  <article>
    <div>ユーザーカラー</div>
    <hr class="medium" />
    <button class="ripple active">
      <i>palette</i>
      色選択
      <menu class="no-wrap transparent color-picker">
        <ColorPicker
          bind:hex={themeColor}
          isDialog={false}
          textInputModes={["hex"]}
          position="responsive"
        />
      </menu>
    </button>
    <button
      class="ripple border circle large-text"
      onclick={() => {
        themeColor = "#f0908d";
      }}
    >
      🍓
      <div class="tooltip">薄紅</div>
    </button>
    <button
      class="ripple border circle large-text"
      onclick={() => {
        themeColor = "#ee7800";
      }}
    >
      🍊
      <div class="tooltip">橙色</div>
    </button>
    <button
      class="ripple border circle large-text"
      onclick={() => {
        themeColor = "#f5e56b";
      }}
    >
      🍋
      <div class="tooltip">刈安色</div>
    </button>
    <button
      class="ripple border circle large-text"
      onclick={() => {
        themeColor = "#aacf53";
      }}
    >
      🍈
      <div class="tooltip">萌黄</div>
    </button>
    <button
      class="ripple border circle large-text"
      onclick={() => {
        themeColor = "#3b7960";
      }}
    >
      🍋‍🟩
      <div class="tooltip">木賊色</div>
    </button>
    <button
      class="ripple border circle large-text"
      onclick={() => {
        themeColor = "#1e50a2";
      }}
    >
      🫐
      <div class="tooltip">瑠璃色</div>
    </button>
    <button
      class="ripple border circle large-text"
      onclick={() => {
        themeColor = "#a59aca";
      }}
    >
      🍇
      <div class="tooltip">藤紫</div>
    </button>
  </article>
</section>

<style>
  .color-picker {
    --focus-color: var(--primary);
    --cp-bg-color: var(--surface-container);
    --cp-border-color: transparent;
    --cp-text-color: var(--on-surface);
    --cp-input-color: var(--surface);
  }
</style>
