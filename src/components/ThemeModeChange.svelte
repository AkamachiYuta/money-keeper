<script lang="ts">
  import { metaTheme } from "./theme";

  let themeMode = ui("mode");
  $: themeModeButton = `${themeMode == "dark" ? "light" : "dark"}_mode`;

  const onclick = () => {
    themeMode = ui("mode") == "dark" ? "light" : "dark";
    ui("mode", themeMode);
    metaTheme();
  };
</script>

<button class="circle fill" aria-label="テーマ切り替え" {onclick}>
  <i>{themeModeButton}</i>
</button>
