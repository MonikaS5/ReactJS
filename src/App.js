//import logo from './logo.svg';
import './App.css';
import ArrayDestructFun from './components/ArrayDestructFun';
import ArrayDestructClass from './components/ArrayDestructClass';
import Changetext from './components/Changetext';
import Counter from './components/Counter';
import DestructureFun from './components/DestructureFun';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import DestructureClass from './components/DestructureClass';
import EventClick from './components/EventClick';
import EventClickClass from './components/EventClickClass';
import EventClickParam from './components/EventClickParam';
import EventObject from './components/EventObject';
import EventBinding from './components/EventBinding';
import ComponentViewBind from './components/ComponentViewBind';
import ViewToCompntBind from './components/ViewToCompntBind';
import EventHandler from './components/EventHandler';
import Destructuring from './components/Destructuring';
import EventHandler2 from './components/EventHandler2';
import ParentComponent from './components/PropsMethods/ParentComponent';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />

      <Welcome />
      {/* <Hello myName="John Doe"/> */}
      <Hello myName="Peter Pan"

        myNumber={20}
        any11=" Any data type12345"
        boolean="True"
        arr="[1, 2, 3, 4, 5]" />


      <Greet name="John" skills="MERN Stack" />
      <Greet name="Ron" skills="MEAN Stack">
        <h4>Hello Ron</h4>
      </Greet>
      <Greet name="Peter" skills="Full Stack" />

      <Welcome name="Harry" city="England" />
      <Welcome name="Joe" city="Wales">
        <p>Hello Joe</p>

      </Welcome>
      <Welcome name="Peter" city="England" />


      <Changetext />
      <Counter />

      <DestructureFun name="Tia" courseName="MERN" />
      <DestructureClass name="Harry" courseName="MEAN" />

      <ArrayDestructFun />

      <ArrayDestructClass />

      <Destructuring active="Monika" activeStatus="MERN" />

      <EventClick />
      <EventClickClass />
      <EventClickParam />

      <EventObject />

      <EventBinding />
      <ComponentViewBind />
      <ViewToCompntBind />
      <EventHandler />
      <EventHandler2 />

      <ParentComponent />


    </div>
  );
}

export default App;
