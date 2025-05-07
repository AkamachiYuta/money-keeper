<script lang="ts">
  import ColorPicker from "svelte-awesome-color-picker";
  import { userTheme } from "../components/theme";

  // const oninputUserColor = (event: Event) => {
  //   const userColorPicker = (<HTMLInputElement>event.currentTarget).value;
  //   console.log(event);

  //   if (userColorPicker !== "") userTheme(userColorPicker);
  // };

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
    <!-- <label class="button">
      <input type="color" oninput={oninputUserColor} />
      <i>palette</i>
      色選択
    </label> -->
    <button class="active">
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
