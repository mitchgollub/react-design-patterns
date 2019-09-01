# 5 - Proper Data Fetching

## Data Flow

React enforces a pattern called **unidirectional data flow** to make data go from the root to the leaves.  Data flows in a single direction from the top to the bottom of the component tree.  This help simplify component behavior and the relationship between components.

This is the ideal pattern, but not all applications are that simple.  Sometimes a child component has to push data up to its parent.  A Parent might have to be updated when its children chance state.  Two siblings might also need to share data.  We'll explore those scenarios in this chapter.  

## Child-parent communication (callbacks)

Explore the simple Counter component in this example.  The Counter component is parent to the Buttons and Display components.  The child Button component is designed to update the parent with data using callbacks.  This update informs the parent what data to re-render and sends that information to the proper children to re-render.  

Counter 

```javascript
export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        };

        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    static propTypes = {
        counter: number
    }

    handleDecrement() {
        this.setState({
            counter: this.state.counter - 1
        });
    }
    handleIncrement() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
                <Display counter={this.state.counter} />
                <Buttons
                    onDecrement={this.handleDecrement}
                    onIncrement={this.handleIncrement}
                />
            </div>
        );
    }
}
```

Buttons

```javascript
const Buttons = ({ onDecrement, onIncrement }) => {
    return (
        <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    )
}

Buttons.propTypes = {
    onDecrement: func.isRequired,
    onIncrement: func.isRequired
}

export default Buttons
```

Display

```javascript
const Display = ({ counter }) => <h1>{counter}</h1>;
Display.propTypes = {
    counter: number
}

export default Display
```
