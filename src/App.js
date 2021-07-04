import './App.css';

function App() {
  return (
    <div className="container">
      <aside className="vert-hero"></aside>
      <main className="bio">
        <nav className="nav-bar">
          <a href="https://www.linkedin.com/in/clearlythuydoan/" target="_newtab">
            <span>LinkedIn</span>
          </a>
          <a href="http://www.twitter.com/clearlythuydoan" target="_newtab">
            <span className="nav-link">Twitter</span>
          </a>
          <a href="mailto:clearlythuydoan@gmail.com" target="_newtab">
            <span className="nav-link">Email</span>
          </a>
        </nav>
        <h1>Hi! My name is Thuy Doan and this site is a dumpster fire. A ghost from my past. </h1>
        <p>Currently, I work for Prodigy Education as a developer. I love candid conversations, aligning teams, and advocating 
          for change - especially accessibility. Sometimes I bake and my coworkers get to reap the rewards.
        </p>
        <p>Outside of my job at <a href="https://www.prodigygame.com" target="_newtab">Prodigy</a>, I share a lot on Twitter about 
        things I love like KPOP, travel, concerts, small and large moments of daily happiness, thought exercises, languages and more.
        </p>
        <p>
          I've grown so much since I started my developer journey with <a href="https://www.brainstation.io" target="_newtab">
          Brainstation</a> in 2016. That growth is really not evident with this website. So I'm taking some time to, 
          properly re-introduce you to the current me.
        </p>
        <p>For now you get the slightly less suck-ish version of my noob self's website. Stay tuned.</p>
      </main>
    </div>
  );
}

export default App;
