import { h, app } from "hyperapp"

module.exports = (props, children) => {
  return (
    <div class="event-widget">
      <header>event</header>
      <main>
        {children}
      </main>
    </div>
  );
}
