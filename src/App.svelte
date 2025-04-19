<script lang="ts">
  // テーマカラー
  const userTheme = (userThemeColor: string = "#000000") => {
    ui("theme", userThemeColor);
    localStorage.setItem("userThemeColor", userThemeColor);
  };

  document.addEventListener("DOMContentLoaded", () => {
    // 初期値またはローカルストレージからセット
    userTheme(localStorage.getItem("userThemeColor") ?? undefined);
    // 設定：テーマカラー カラーピッカー
    document
      .querySelector<HTMLInputElement>("#userColorPicker")
      ?.addEventListener("input", (event) => {
        // const target =
        const userColorPicker = (<HTMLInputElement>event.currentTarget).value;

        if (userColorPicker !== "") userTheme(userColorPicker);
      });
    // 設定：テーマカラー ファイル指定
    // document.querySelector<HTMLInputElement>("#userColorFile")?.addEventListener("input", (e) => {
    //   // const target =
    //   const files = (<HTMLInputElement>e.currentTarget).files;
    //   const file = (files) ? files[0] : "";

    //   if (file !== "") ui("theme", file);
    // });

    // テーマモード
    document
      .querySelectorAll("[data-user=themeMode]")
      .forEach((userThemeMode) => {
        // アイコンの初期値を設定
        const userThemeModeIcon = userThemeMode?.querySelector("i");
        if (userThemeModeIcon)
          userThemeModeIcon.textContent = `${ui("mode") == "dark" ? "light" : "dark"}_mode`;
        // テーマモードボタンを押されたとき
        userThemeMode?.addEventListener("click", () => {
          if (userThemeModeIcon)
            userThemeModeIcon.textContent = `${ui("mode")}_mode`;
          let newMode = ui("mode") == "dark" ? "light" : "dark";
          ui("mode", newMode);
        });
      });

    // ナビゲーションドロワー
    document.querySelectorAll("#nav-drawer a[data-ui]").forEach((a) => {
      a.addEventListener("click", () => {
        ui("#nav-drawer");
      });
    });
  });
</script>

<div>
  <!-- タブバー -->
  <header class="l m">
    <nav>
      <button data-ui="#nav-drawer" class="circle fill">
        <i>menu</i>
      </button>
      <h5 class="max">{APP_TITLE}</h5>
      <button data-ui="#page-home" class="fill">
        <i>home</i>
        <span>ホーム</span>
      </button>
      <button
        data-user="themeMode"
        class="circle fill"
        aria-label="テーマ切り替え"
      >
        <i></i>
      </button>
      <button class="circle fill">
        <i>more_vert</i>
      </button>
    </nav>
  </header>

  <nav class="bottom s">
    <a data-ui="#nav-drawer">
      <i>menu</i>
    </a>
    <a data-ui="#page-home">
      <i>home</i>
    </a>
    <a data-user="themeMode">
      <i></i>
    </a>
    <a>
      <i>more_vert</i>
    </a>
  </nav>

  <dialog id="nav-drawer" class="left no-padding">
    <nav class="drawer">
      <div class="large-space"></div>
      <header class="s">
        <h5 class="max">{APP_TITLE}</h5>
      </header>
      <a data-ui="#page-home">
        <i>home</i>
        <span>ホーム</span>
      </a>
      <a data-ui="#page-settings">
        <i>settings</i>
        <span>設定</span>
      </a>
      <a data-ui="#page-about">
        <i>info</i>
        <span>{APP_TITLE}について</span>
      </a>
    </nav>
  </dialog>
  <main class="responsive">
    <div id="pages">
      <div class="large-space"></div>
      <!-- ホームページ -->
      <section id="page-home" class="page active">
        <article>
          <progress class="max inverse-primary-text" value="1802" max="3000"
          ></progress>
          <span>食費</span>
          <h2 class="no-margin">1802円</h2>
          <span>/ 3000円</span>
        </article>
      </section>
      <!-- 設定ページ -->
      <section id="page-settings" class="page">
        <h2 class="center-align">設定</h2>
        <article>
          <span>テーマカラー</span>
          <div class="button circle">
            <input id="userColorPicker" type="color" />
            <label><i>palette</i></label>
          </div>
          <!-- <div class="button circle">
            <input id="userColorFile" type="file" accept="image/*">
            <label><i>image</i></label>
          </div> -->
        </article>
      </section>
      <!-- このアプリについて -->
      <section id="page-about" class="page">
        <div class="grid">
          <div class="s12">
            <article class="fill">
              <div class="row">
                <img class="circle large" src="icon/favicon.webp" alt="" />
                <div class="max">
                  <h6 class="bold">
                    {APP_TITLE} - {APP_VERSION}
                  </h6>
                  <div></div>
                  <div>{APP_DESCRIPTION}</div>
                  <div>Copyleft 🄯 ADE All Rights Reversed.</div>
                </div>
              </div>
              <nav>
                <a href={APP_REPOSITORY_URL} class="button">リポジトリ</a>
              </nav>
            </article>
          </div>
          <!-- プロバイダ -->
          <div class="s12 m6 l4">
            <article class="fill">
              <div class="row">
                <img class="circle large" src="icon/icon_provider.svg" alt="" />
                <div class="max">
                  <h6 class="bold">{APP_PROVIDER}</h6>
                  <span>開発者</span>
                </div>
              </div>
              <nav>
                <a href={APP_PROVIDER_URL} class="button">公式サイト</a>
              </nav>
            </article>
          </div>
          <div class="s12 m6 l4">
            <article class="fill">
              <div class="row">
                <i class="circle large">handshake</i>
                <div class="max">
                  <h6 class="bold">協力者歓迎</h6>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  </main>
</div>
