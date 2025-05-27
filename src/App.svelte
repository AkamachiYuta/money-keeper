<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Header from "./components/Header.svelte";
  import Introduction from "./pages/Introduction.svelte";
  import DashBoard from "./pages/Dashboard.svelte";
  import Settings from "./pages/Settings.svelte";
  import About from "./pages/About.svelte";
  import NotFound from "./pages/NotFound.svelte";

  const basepath = import.meta.env.BASE_URL;
</script>

<div>
  <Router {basepath}>
    <Header />
    <main class="responsive">
      <div class="large-space"></div>
      <Route path="/">
        <!-- ダッシュボード -->
        <Introduction />
      </Route>
      <Route path="dashboard">
        <!-- ダッシュボード -->
        <DashBoard />
      </Route>
      <!-- 設定ページ -->
      <Route path="settings">
        <Settings />
      </Route>
      <!-- このアプリについて -->
      <Route path="about">
        <About />
      </Route>
      <!-- NotFound -->
      <Route path="/*" component={NotFound} />
      <div class="large-space s"></div>
      <div class="large-space s"></div>
    </main>
  </Router>
</div>
