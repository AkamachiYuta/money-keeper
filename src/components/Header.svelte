<script lang="ts">
  import { link } from "svelte-routing";
  import ThemeModeChange from "./ThemeModeChange.svelte";

  let path = $state(location.pathname.replace(/\/+$/, "").split("/").pop());

  // ナビゲーションドロワーのリンクがクリックされたとき
  const onclickNavDrawer = () => {
    ui("#nav-drawer");
  };
  const toggleDialog = () => {
    ui("#dialog-transaction");
  };

  // リンクが押されたときにパスを更新する
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a:not(.button)[href]").forEach((link) => {
      link.addEventListener(
        "click",
        () => (path = location.pathname.replace(/\/+$/, "").split("/").pop()),
      );
    });
  });

  // 現在のページパスかどうかを判定する
  const isActivePath = (href: string | any[]) => {
    return path === href;
  };
</script>

<!-- アプリバー -->
<header class="fixed transparent center-align margin">
  <nav class="toolbar elevate primary">
    <button class="circle transparent" onclick={onclickNavDrawer}>
      <i>menu</i>
    </button>
    <div class="max"></div>
    <button class="ripple transparent l m" onclick={toggleDialog}>
      <i>add</i>
    </button>
    <a href="dashboard" class="button ripple transparent l m" use:link>
      <i>dashboard</i>
      <span>ダッシュボード</span>
    </a>
    <ThemeModeChange />
    <!-- <a class="button ripple circle fill">
        <i>more_vert</i>
      </a> -->
  </nav>
</header>
<!-- タブバー（スマホ） -->
<nav class="bottom max s">
  <a href="dashboard" class:active={isActivePath("dashboard")} use:link>
    <i>dashboard</i>
  </a>
  <!-- <a href="/" class:active={isActivePath("/")} use:link>
        <i>timeline</i>
      </a> -->
  <button class="ripple square round extra s" onclick={toggleDialog}>
    <i>add</i>
  </button>
  <!-- <a href="/" class:active={isActivePath("/")} use:link>
        <i>calendar_month</i>
      </a>
      <a href="/" class:active={isActivePath("/")} use:link>
        <i>pie_chart</i>
      </a> -->
</nav>

<dialog id="nav-drawer" class="left">
  <div class="large-space"></div>
  <header>
    <h5 class="max">{APP_TITLE}</h5>
  </header>
  <ul class="list">
    <li class="wave round">
      <a
        href="dashboard"
        class:active={isActivePath("dashboard")}
        onclick={onclickNavDrawer}
        use:link
      >
        <i>dashboard</i>
        <span>ダッシュボード</span>
      </a>
    </li>
    <!-- <li class="wave round">
        <a
          href="/"
          class:active={isActivePath("/")}
          onclick={onclickNavDrawer}
          use:link
        >
          <i>timeline</i>
          <span>タイムライン</span>
        </a>
      </li> -->
    <!-- <li class="wave round">
        <a
          href="/"
          class:active={isActivePath("/")}
          onclick={onclickNavDrawer}
          use:link
        >
          <i>calendar_month</i>
          <span>カレンダー</span>
        </a>
      </li> -->
    <!-- <li class="wave round">
        <a
          href="/"
          class:active={isActivePath("/")}
          onclick={onclickNavDrawer}
          use:link
        >
          <i>pie_chart</i>
          <span>グラフ</span>
        </a>
      </li> -->
    <li class="wave round">
      <a
        href="settings"
        class:active={isActivePath("settings")}
        onclick={onclickNavDrawer}
        use:link
      >
        <i>settings</i>
        <span>設定</span>
      </a>
    </li>
    <li class="wave round">
      <a
        href="about"
        class:active={isActivePath("about")}
        onclick={onclickNavDrawer}
        use:link
      >
        <i>info</i>
        <span>{APP_TITLE}について</span>
      </a>
    </li>
  </ul>
</dialog>
