const {Component, xml, mount} = owl;
class Root extends Component {
  static template = xml`
    <div class="task-list">
      <t t-foreach="tasks" t-as="task" t-key="task.id">
        <div class="task">
          <input type="checkbox" t-att-checked="task.isCcompleted"/>
          <span t-esc="task.name"/>
        </div>
      </t>
    </div>
  `
  tasks= [
    {id: 1, name: "Learn Odoo", isCompleted: true},
    {id: 2, name: "Learn QWeb", isCompleted: false},
    {id: 2, name: "Learn JavaScript", isCompleted: false},
    {id: 3, name: "Learn OWL", isCompleted: false},
  ]

}
mount(Root, document.body)