<script lang="ts">
  import { userTheme } from "../components/theme";

  const oninputUserColor = (event: Event) => {
    const userColorPicker = (<HTMLInputElement>event.currentTarget).value;
    console.log(event);

    if (userColorPicker !== "") userTheme(userColorPicker);
  };
</script>

<section id="page-settings">
  <h2 class="center-align">設定</h2>
  <article>
    <div>ユーザーカラー</div>
    <hr class="medium" />
    <label class="button">
      <input type="color" oninput={oninputUserColor} />
      <i>palette</i>
      色選択
    </label>
  </article>
</section>
