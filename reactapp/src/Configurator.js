import './App.css';
import {Component} from "react";

export default class Configurator extends Component {

  configurator;
  viewPort;
  controls;
  c = 0;

  constructor(props) {
    super(props);
    this.c = 0;

    this.externalScriptLoadedCallback = this.externalScriptLoadedCallback.bind(this);

  }

  componentDidMount() {

    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");

    script1.src = "http://libs.paramate.trinckle.com/paramateConfigurator-latest.js";
    script1.id = "script1";

    script2.src = "http://libs.paramate.trinckle.com/paramateControlsAuto-latest.js";
    script2.id = "script2";

    script3.src = "http://libs.paramate.trinckle.com/paramateViewportWebGL-latest.js";
    script3.id = "script3";

    script1.onload = this.externalScriptLoadedCallback;

    script2.onload = this.externalScriptLoadedCallback;

    script3.onload = this.externalScriptLoadedCallback;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);

  }

  externalScriptLoadedCallback(){
    console.log("<<<< " + this.c)
    this.c += 1;
    console.log("<<<< " + this.c)

    if(this.c === 3){

      /*global window.Paramate*/
      /*global Paramate*/
      this.configurator = new window.Paramate.Configurator({
        APIHub: 'https://api.paramate.trinckle.com',
        configuratorId: 'a5e52b93-1a69-4468-9ae1-8d7c1594d77f',
        APIKey: '722914abbb281487206ae7b2cd1dce7f'
      });

      this.viewPort = new window.Paramate.ViewportWebGL({
        configurator:  this.configurator,
        viewportElement: document.getElementById('viewPort')
      });

      this.controls = new window.Paramate.ControlsAuto({
        configurator:  this.configurator,
        containerElement: document.getElementById('controls')
      });

      this.configurator.viewPort =  this.viewPort;
      this.configurator.controls =  this.controls;
      this.configurator.initialize();
    }
  }


  render() {

    return (
        <div>
          <div className="hi" id="viewPort"></div>
          <div id="controls"></div>
        </div>
    );
  }
}
