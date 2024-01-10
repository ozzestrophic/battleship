const template = document.createElement("template");
template.innerHTML = `
<style>
    .square {
        width: 32px;
        height: 32px;
        border: solid #DDDDDD .5px;
        box-sizing: border-box;     
    }
    .square:hover:not(.shot) {
        background-color: #EEEEEE;
    }

    .ship {
        border: solid blue 1px;
    }

    .shot {
        background-color: red;
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
