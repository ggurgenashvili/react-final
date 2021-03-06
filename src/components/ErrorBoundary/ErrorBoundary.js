import React from "react";

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className="container">
          <h2 className="text-danger">OOPS, Something went wrong, please represh page</h2>          
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return <div className="container-fluid">{this.props.children}</div>;
  }
}

export default ErrorBoundary;
