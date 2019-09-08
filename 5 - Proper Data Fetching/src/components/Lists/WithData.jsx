import React from 'react';

const withData = url => Component => (
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: []
      };
    }

    // We're using componentDidMount here to be sure that the API call is
    // called on the browser only.
    // componentWillMount would be suitable to be able to load the data as
    // soon as we can, but 
    // componentWillMount is also fired for server-side rendering.  Firing an
    // async API call when
    // the component gets rendered on the server can give you unexpected results.  
    componentDidMount() {
      const endpoint = typeof url === 'function' ? url(this.props) : url;

      fetch(endpoint)
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  }
)

export default withData;