const {Component, xml, mount} = owl;

class Task extends Component {
  static template = xml /* xml */`
    <div class="task" t-att-class="props.task_prop.isCompleted ? 'done' : ''">
      <input type="checkbox" t-att-checked="props.task_prop.isCompleted"/>
      <span><t t-esc="props.task_prop.text"/></span>
    </div>`;
    
    // Use task_prop attribute received from Root class as a props to access the task object and its properties
  static props = ["task_prop"];
}

class Root extends Component {

  //For each item of tasks array use element(class) <Task..../> and pass the value of that array element('task') as task_prop attribute to Task class
  static template = xml`
    <div class="task-list">
      <t t-foreach="tasks" t-as="task" t-key="task.id">
         <Task task_prop="task"/>
      </t>
    </div>
  `
  static components = { Task };

  tasks= [
    {id: 1, text: "Learn Odoo", isCompleted: true},
    {id: 2, text: "Learn QWeb", isCompleted: false},
    {id: 3, text: "Learn JavaScript", isCompleted: false},
    {id: 4, text: "Learn OWL", isCompleted: false},
  ]

}
mount(Root, document.body, {dev:true})