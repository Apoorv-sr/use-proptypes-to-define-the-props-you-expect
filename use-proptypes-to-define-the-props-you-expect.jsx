const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line

// Change code above this line

//here we are settting the default value for quantity as 0 for Items component
Items.defaultProps = {
  quantity: 0
};

//In the code below we are putting a verification check that the datatype for quantity prop must always be number otherwise it will throw an error if any other type is passed
Items.propTypes={quantity:PropTypes.number.isRequired}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10}/>
  }
};