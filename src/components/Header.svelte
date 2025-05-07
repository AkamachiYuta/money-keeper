<script lang="ts">
  import { link } from "svelte-routing";
  import ThemeModeChange from "./ThemeModeChange.svelte";

  let path = $state(location.pathname.replace(/\/+$/, "").split("/").pop());

  // ナビゲーションドロワーのリンクがクリックされたとき
  const onclickNavDrawer = () => {
    ui("#nav-drawer");
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

<header>
  <!-- アプリバー -->
  <nav class="">
    <button class="circle transparent" onclick={onclickNavDrawer}>
      <i>menu</i>
    </button>
    <div class="max"></div>
    <button class="ripple square round l m">
      <i>add</i>
    </button>
    <a href="dashboard" class="button ripple fill l m" use:link>
      <i>dashboard</i>
      <span>ダッシュボード</span>
    </a>
    <ThemeModeChange />
    <!-- <a class="button ripple circle fill">
      <i>more_vert</i>
    </a> -->
  </nav>
  <!-- タブバー（スマホ） -->
  <nav class="bottom s">
    <a href="dashboard" class:active={isActivePath("dashboard")} use:link>
      <i>dashboard</i>
    </a>
    <!-- <a href="/" class:active={isActivePath("/")} use:link>
      <i>timeline</i>
    </a> -->
    <!-- <button class="ripple square round extra s">
      <i>add</i>
    </button> -->
    <!-- <a href="/" class:active={isActivePath("/")} use:link>
      <i>calendar_month</i>
    </a>
    <a href="/" class:active={isActivePath("/")} use:link>
      <i>pie_chart</i>
    </a> -->
  </nav>

  <dialog id="nav-drawer" class="left no-padding">
    <nav class="drawer">
      <div class="large-space"></div>
      <header>
        <h5 class="max">{APP_TITLE}</h5>
      </header>
      <a
        href="dashboard"
        class:active={isActivePath("dashboard")}
        onclick={onclickNavDrawer}
        use:link
      >
        <i>dashboard</i>
        <span>ダッシュボード</span>
      </a>
      <!-- <a
        href="/"
        class:active={isActivePath("/")}
        onclick={onclickNavDrawer}
        use:link
      >
        <i>timeline</i>
        <span>タイムライン</span>
      </a> -->
      <!-- <a
        href="/"
        class:active={isActivePath("/")}
        onclick={onclickNavDrawer}
        use:link
      >
        <i>calendar_month</i>
        <span>カレンダー</span>
      </a> -->
      <!-- <a
        href="/"
        class:active={isActivePath("/")}
        onclick={onclickNavDrawer}
        use:link
      >
        <i>pie_chart</i>
        <span>グラフ</span>
      </a> -->
      <a
        href="settings"
        class:active={isActivePath("settings")}
        onclick={onclickNavDrawer}
        use:link
      >
        <i>settings</i>
        <span>設定</span>
      </a>
      <a
        href="about"
        class:active={isActivePath("about")}
        onclick={onclickNavDrawer}
        use:link
      >
        <i>info</i>
        <span>{APP_TITLE}について</span>
      </a>
    </nav>
  </dialog>
</header>
