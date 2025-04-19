<script lang="ts"></script>

<section id="page-about">
  <div class="grid">
    <div class="s12">
      <article class="fill">
        <div class="row">
          <img class="circle large" src="assets/favicon.webp" alt="" />
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
          <img class="circle large" src="assets/icon_provider.svg" alt="" />
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
