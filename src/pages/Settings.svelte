<script lang="ts">
  import { userTheme } from "../components/theme";

  const oninputUserColor = (event: Event) => {
    const userColorPicker = (<HTMLInputElement>event.currentTarget).value;
    console.log(event);

    if (userColorPicker !== "") userTheme(userColorPicker);
  };
  const oninputUserColorFile = (event: Event) => {
    const files = (<HTMLInputElement>event.currentTarget).files;
    const file = files ? files[0] : "";
    if (file !== "") ui("theme", file);
  };
</script>

<section id="page-settings">
  <h2 class="center-align">設定</h2>
  <article>
    <div>ユーザーカラー</div>
    <label class="button">
      <input type="color" oninput={oninputUserColor} />
      <i>palette</i>
      色選択
    </label>
    <label class="button">
      <input type="file" accept="image/*" oninput={oninputUserColorFile} />
      <i>image</i>
      画像を設定
    </label>
  </article>
</section>
