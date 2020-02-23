import React from 'react';
import './App.css';
import ParallellCoord from './ParallellCoord';
// import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="header">
          <h1 id="headerText">
            World Value Service - Visualization tool
          </h1>
        </div>

        <div id="CoordinateSystem">
          <ParallellCoord />
        </div>

        <div id="DiscoveryProcess">
          <div id="DiscoveryProcess1" className="Discoveryprocess">
            <h2>Discovery Process 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu imperdiet tortor. Maecenas vel tempor
              mauris, vitae dapibus augue. Quisque sit amet blandit nunc, a pulvinar ante. Duis at mi turpis. Etiam ac
              ullamcorper ipsum, non dictum lectus. Nulla eget diam interdum, eleifend sapien nec, mollis velit. Donec
              euismod eleifend dolor dictum euismod.

              Fusce tempor sodales massa, non lobortis lectus euismod a. In hac habitasse platea dictumst. Etiam ac
              nisl ac orci finibus condimentum. Mauris condimentum, enim non vestibulum varius, nulla tellus euismod
              velit, ut tempor dui sapien id elit. Suspendisse blandit tincidunt eros, a maximus metus tempor non.
              Donec facilisis tincidunt velit, nec faucibus nibh tristique ac. Curabitur sit amet magna a velit
              tristique ullamcorper in ac libero. Aenean aliquet posuere tincidunt.

              Proin sagittis ipsum in dolor varius, vitae dapibus purus efficitur. Sed leo sem, mollis et facilisis
              sed, consectetur sodales lorem. Integer libero enim, mattis sit amet orci non, lobortis fringilla
              ligula. Maecenas sagittis egestas mauris vel volutpat. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Fusce at rhoncus arcu. In quis nisl elit. Nulla pretium quis
              libero sit amet convallis. Cras varius, ex vel interdum luctus, lorem nibh ornare eros, sed pellentesque
              neque.
            </p>
          </div>
          <div id="DiscoveryProcess2" className="Discoveryprocess">
            <h2>Discovery Process 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu imperdiet tortor. Maecenas vel tempor
              mauris, vitae dapibus augue. Quisque sit amet blandit nunc, a pulvinar ante. Duis at mi turpis. Etiam ac
              ullamcorper ipsum, non dictum lectus. Nulla eget diam interdum, eleifend sapien nec, mollis velit. Donec
              euismod eleifend dolor dictum euismod.

              Fusce tempor sodales massa, non lobortis lectus euismod a. In hac habitasse platea dictumst. Etiam ac
              nisl ac orci finibus condimentum. Mauris condimentum, enim non vestibulum varius, nulla tellus euismod
              velit, ut tempor dui sapien id elit. Suspendisse blandit tincidunt eros, a maximus metus tempor non.
              Donec facilisis tincidunt velit, nec faucibus nibh tristique ac. Curabitur sit amet magna a velit
              tristique ullamcorper in ac libero. Aenean aliquet posuere tincidunt.

              Proin sagittis ipsum in dolor varius, vitae dapibus purus efficitur. Sed leo sem, mollis et facilisis
              sed, consectetur sodales lorem. Integer libero enim, mattis sit amet orci non, lobortis fringilla
              ligula. Maecenas sagittis egestas mauris vel volutpat. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Fusce at rhoncus arcu. In quis nisl elit. Nulla pretium quis
              libero sit amet convallis. Cras varius, ex vel interdum luctus, lorem nibh ornare eros, sed pellentesque
              neque.
            </p>
          </div>
          <div id="learnings">
            <h2>My learnings</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ipsum nisi, convallis quis justo ut,
              finibus commodo leo. Nullam in elit ut est hendrerit luctus. Proin sed lorem placerat, sagittis dolor
              ut, lacinia mi. Nam gravida in purus in suscipit. Pellentesque tristique porta velit, a congue diam
              egestas ac. Praesent eget tortor consequat, ornare elit eu, tincidunt est. Nam sit amet fermentum ante.

              Quisque fermentum dui magna, ornare posuere ligula bibendum et. Fusce nec egestas tellus. Duis porttitor
              augue vestibulum tincidunt faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
              malesuada nibh dapibus, vehicula enim ac, sollicitudin.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;