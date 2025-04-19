<script lang="ts">
  import { Link } from "svelte-routing";
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
    <Link to="/" class="button fill l m">
      <i>dashboard</i>
      <span>ダッシュボード</span>
    </Link>
    <ThemeModeChange />
    <!-- <a class="button circle fill">
      <i>more_vert</i>
    </a> -->
  </nav>
  <!-- タブバー（スマホ） -->
  <nav class="bottom s">
    <Link to="/">
      <i>dashboard</i>
    </Link>
    <Link to="/">
      <i>timeline</i>
    </Link>
    <button class="square round extra s">
      <i>add</i>
    </button>
    <Link to="/">
      <i>calendar_month</i>
    </Link>
    <Link to="/">
      <i>pie_chart</i>
    </Link>
  </nav>

  <dialog id="nav-drawer" class="left no-padding">
    <nav class="drawer">
      <div class="large-space"></div>
      <header>
        <h5 class="max">{APP_TITLE}</h5>
      </header>
      <Link to="/" onclick={onclickNavDrawer}>
        <i>dashboard</i>
        <span>ダッシュボード</span>
      </Link>
      <Link to="/" onclick={onclickNavDrawer}>
        <i>timeline</i>
        <span>タイムライン</span>
      </Link>
      <Link to="/" onclick={onclickNavDrawer}>
        <i>calendar_month</i>
        <span>カレンダー</span>
      </Link>
      <Link to="/" onclick={onclickNavDrawer}>
        <i>pie_chart</i>
        <span>グラフ</span>
      </Link>
      <Link to="/settings" onclick={onclickNavDrawer}>
        <i>settings</i>
        <span>設定</span>
      </Link>
      <Link to="/about" onclick={onclickNavDrawer}>
        <i>info</i>
        <span>{APP_TITLE}について</span>
      </Link>
    </nav>
  </dialog>
</header>
