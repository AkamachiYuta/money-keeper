<script lang="ts">
  import { link } from "svelte-routing";
  import ThemeModeChange from "./ThemeModeChange.svelte";

  // ナビゲーションドロワーのリンクがクリックされたとき
  const onclickNavDrawer = () => {
    ui("#nav-drawer");
  };
</script>

<header>
  <!-- アプリバー -->
  <nav class="">
    <button class="circle" onclick={onclickNavDrawer}>
      <i>menu</i>
    </button>
    <div class="max"></div>
    <button class="square round extra l m">
      <i>add</i>
    </button>
    <a href="/" class="button fill l m" use:link>
      <i>dashboard</i>
      <span>ダッシュボード</span>
    </a>
    <ThemeModeChange />
    <!-- <a class="button circle fill">
      <i>more_vert</i>
    </a> -->
  </nav>
  <!-- タブバー（スマホ） -->
  <nav class="bottom s">
    <a href="/" use:link>
      <i>dashboard</i>
    </a>
    <a href="/" use:link>
      <i>timeline</i>
    </a>
    <button class="square round extra s">
      <i>add</i>
    </button>
    <a href="/" use:link>
      <i>calendar_month</i>
    </a>
    <a href="/" use:link>
      <i>pie_chart</i>
    </a>
  </nav>

  <dialog id="nav-drawer" class="left no-padding">
    <nav class="drawer">
      <div class="large-space"></div>
      <header>
        <h5 class="max">{APP_TITLE}</h5>
      </header>
      <a href="/" onclick={onclickNavDrawer} use:link>
        <i>dashboard</i>
        <span>ダッシュボード</span>
      </a>
      <a href="/" onclick={onclickNavDrawer} use:link>
        <i>timeline</i>
        <span>タイムライン</span>
      </a>
      <a href="/" onclick={onclickNavDrawer} use:link>
        <i>calendar_month</i>
        <span>カレンダー</span>
      </a>
      <a href="/" onclick={onclickNavDrawer} use:link>
        <i>pie_chart</i>
        <span>グラフ</span>
      </a>
      <a href="/settings" onclick={onclickNavDrawer} use:link>
        <i>settings</i>
        <span>設定</span>
      </a>
      <a href="/about" onclick={onclickNavDrawer} use:link>
        <i>info</i>
        <span>{APP_TITLE}について</span>
      </a>
    </nav>
  </dialog>
</header>
