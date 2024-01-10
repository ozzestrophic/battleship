const template = document.createElement("template");
template.innerHTML = `
<style>
    .square {
        width: 32px;
        height: 32px;
        border: solid red 1px;
        box-sizing: border-box;
        
    }
</style>

<div class ="square">

</div>

`;

class GameboardSquare extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

export { GameboardSquare };
