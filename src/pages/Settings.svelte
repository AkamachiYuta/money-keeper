<script lang="ts">
  import ColorPicker from "svelte-awesome-color-picker";
  import { userTheme } from "../components/theme";

  let themeMode = $state(ui("mode"));
  let themeColor = $state(localStorage.getItem("userThemeColor") ?? "#804040");

  // プリセットカラーのリスト
  const presetColors = [
    { hex: "#f0908d", name: "薄紅", emoji: "🍓" },
    { hex: "#ee7800", name: "橙色", emoji: "🍊" },
    { hex: "#f5e56b", name: "刈安色", emoji: "🍋" },
    { hex: "#aacf53", name: "萌黄", emoji: "🍈" },
    { hex: "#3b7960", name: "木賊色", emoji: "🍋‍🟩" },
    { hex: "#1e50a2", name: "瑠璃色", emoji: "🫐" },
    { hex: "#a59aca", name: "藤紫", emoji: "🍇" },
  ];

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

    {#each presetColors as color}
      <button
        class="ripple border circle large-text"
        onclick={() => {
          themeColor = color.hex;
        }}
      >
        {color.emoji}
        <div class="tooltip">{color.name}</div>
      </button>
    {/each}
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
