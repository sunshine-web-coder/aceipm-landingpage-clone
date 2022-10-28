import "./style.scss";

export default function BlogBanner() {
  return (
    <div className="section BlogBanner">
      <div className="container inBanner">
        <div className="title">
          <h1>The AceIPM Blog</h1>
          <p>
           Nevermore lamplight fantastic velvet dirges have my, placid sculptured upon within gileadtell. His at lenore and was if rapping devil.
          </p>
        </div>
        <div className="searchBox">
          <form>
            <input type="text" placeholder="Search..." />
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </div>
    </div>
  );
}
