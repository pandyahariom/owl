const { Component, useState, xml } = owl;
export class Root extends Component {
    static template = xml`<div t-on-click="update">Hello 
    <t t-if="'Odoo' == state.text">
        <b><t t-esc="state.text"/> :</b>
    </t>
    <t t-else="">
        <t t-esc="state.text"/> :
    </t>
    
    <t t-esc="state.count"/> <br/> <t t-esc="state.hiddenMessage"/> </div>`;
    state = useState({ text: "OWL", count: 0, hiddenMessage: "" });
    update() { 
        this.state.text = this.state.text === "OWL"? "Odoo": "OWL";
        this.state.count = this.state.count>9? 0: this.state.count+1;
        this.state.hiddenMessage = this.state.count > 9? "You clicked too much! On Your next click, I am resetting the count to 0.": "";
    }
}
