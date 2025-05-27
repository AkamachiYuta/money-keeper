<script lang="ts">
  import { navigate } from "svelte-routing";
  import Img01 from "../assets/Introduction/01.webp";
  import Img02 from "../assets/Introduction/02.webp";

  const getStart = () => {
    navigate("dashboard");
  };
</script>

<section id="page-introduction">
  <h2>お財布を守るアプリ「MoneyKeeper」</h2>
  <div class="large-space"></div>

  <article class="no-padding">
    <div class="grid no-space">
      <div class="l6 m4 s12">
        <img class="responsive" src={Img01} alt="" />
      </div>
      <div class="l6 m8 s12">
        <div class="padding large-text large-line">
          <h3>お金を前に差し出すのを辞めよう</h3>
          <hr class="medium" />
          <p>
            企業によって
            <span class="primary no-round tiny-padding">積極的な (forward)</span
            >
            消費を促されることの多い現代社会にうんざりしていませんか？
          </p>
          <p class="bold">本当に便利な世の中になったのでしょうか？</p>
          <p class="bold">ポイントは本当にお得なんでしょうか？</p>
          <p class="bold">QRコード決済は本当に便利なんでしょうか？</p>
          <p class="bold">
            「オススメの情報」とやらは本当に必要なんでしょうか？
          </p>
          <p>
            企業による過激なユーザーの囲い込み合戦に巻き込まれ、
            数多の情報や広告に踊らされるのにうんざりしたボクは、
            まずは真に必要な情報だけを表示するための家計簿を欲していました
          </p>
        </div>
      </div>
    </div>
  </article>
  <div class="large-space"></div>

  <article class="no-padding">
    <div class="grid no-space">
      <div class="l6 m8 s12">
        <div class="padding large-text large-line">
          <h3>本当の使いやすさを目指して</h3>
          <hr class="medium" />
          <p>
            各銀行口座やキャッシュレス決済事業者などは、
            APIをクローズドにし、営利目的のために独占していますので、
            自動取得をすることは難しいです。
            しかし、手動で入力する前提であれば、自作することは可能だと考えました
          </p>
          <p>
            また、MoneyF……某有名家計簿アプリからのCSVをインポートする機能を備えれば、
            自動連携したデータを手動で持ってくることも可能になるはずです
          </p>
          <p>
            お金の情報管理を自由に、オープンにすることが、
            MoneyKeeperの最終的な目標です。 自分たちのお金は自分たちのものです。
            その情報をどのように扱うべきかは、自分たちで決定する権利があるはずです
          </p>
        </div>
      </div>
      <div class="l6 m4 s12">
        <img class="responsive" src={Img02} alt="" />
      </div>
    </div>
  </article>
  <div class="large-space"></div>

  <article class="center-align large-text">
    <p>
      もしこの考えに共感いただけるのであれば、
      ぜひあなたのアイデアを教えて下さい
    </p>
    <p>
      MoneyKeeperが、あなたの
      <span class="primary no-round tiny-padding">お財布の番人 (Keeper)</span>
      となれれば幸いです
    </p>
  </article>
  <div class="large-space"></div>

  <article class="fill large large-text middle-align center-align">
    <div>
      <i class="extra">wallet</i>
      <h3>デモアプリを公開中です</h3>
      <p>開発中のため、未実装の機能や重大な不具合があります</p>
      <div class="space"></div>
      <nav class="center-align">
        <button class="ripple" onclick={getStart}>
          わかった、使ってみる
          <i>arrow_right_alt</i>
        </button>
      </nav>
    </div>
  </article>
</section>
