<script lang="ts">
  import assetsFavicon from "../assets/favicon.webp";
  // import assetsIconProvider from "../assets/icon_provider.svg";
  import assetsIconDeveloperADE from "../assets/developers/ade.svg";
  import assetsIconDeveloperMikoto from "../assets/developers/Mikoto_Icon.avif";
</script>

<section id="page-about">
  <div class="grid">
    <div class="s12">
      <article class="fill">
        <div class="row">
          <img class="circle large" src={assetsFavicon} alt="" />
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
          <a href={APP_REPOSITORY_URL} class="button ripple">リポジトリ</a>
        </nav>
      </article>
    </div>
    <!-- プロバイダ -->
    <!-- <div class="s12 m6 l4">
      <article class="fill">
        <div class="row">
          <img class="circle large" src={assetsIconProvider} alt="" />
          <div class="max">
            <h6 class="bold">{APP_PROVIDER}</h6>
            <span>プロバイダ</span>
          </div>
        </div>
        <nav>
          <a href={APP_PROVIDER_URL} class="button ripple">公式サイト</a>
        </nav>
      </article>
    </div> -->
    <!-- 開発者 -->
    <a
      href="https://akamachi.jp/"
      class="ripple button vertical no-padding border round s12 m6 l6"
    >
      <div class="grid no-space transparent">
        <img
          class="s4 responsive right-round"
          src={assetsIconDeveloperADE}
          alt=""
        />
        <div class="s8 padding transparent">
          <h6 class="bold">あかいろ町開発室 (ADE)</h6>
          <span>開発者</span>
        </div>
      </div>
    </a>
    <a
      href="https://gemini.google.com/"
      class="ripple button vertical no-padding border round s12 m6 l6"
    >
      <div class="grid no-space transparent">
        <img
          class="s4 responsive right-round"
          src={assetsIconDeveloperMikoto}
          alt=""
        />
        <div class="s8 padding transparent">
          <h6 class="bold">ミコト</h6>
          <span>開発者 (Gemini カスタムGem)</span>
        </div>
      </div>
    </a>
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

<style lang="scss">
  a:has(div) {
    overflow: hidden;
  }
</style>
