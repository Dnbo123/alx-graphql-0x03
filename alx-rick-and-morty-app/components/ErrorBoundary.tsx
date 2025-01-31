import React from 'react';
import type { ReactNode } from 'react';

interface State {
  // Indicates whether an error has been encountered
  hasError: boolean;
}
  
  /**
   * ErrorBoundaryProps is a props interface for the ErrorBoundary component
   * @prop {ReactNode} children - The children of the ErrorBoundary component
   */
  interface ErrorBoundaryProps {
    children: ReactNode;
  }
  
  
  /**
   * ErrorBoundary is a React component that can be used to catch and handle JavaScript errors 
   * anywhere in its child component tree. It can also be used to log error information to an 
   * error reporting service.
   * 
   * @prop {ReactNode} children - The children of the ErrorBoundary component
   */
  class ErrorBoundary extends React.Component<ErrorBoundaryProps , State> {
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    /**
     * getDerivedStateFromError is a static method that is invoked after an error has been thrown by a descendant component.
     * It receives the error that was thrown as a parameter, and should return a value to update state.
     * 
     * @param {Error} error - The error that was thrown by a descendant component
     * @returns {State} - The new state of the ErrorBoundary
     */
    static getDerivedStateFromError(error: Error): State {
      return { hasError: true };
    }
  
    /**
     * componentDidCatch is a lifecycle method that is invoked after an error has been thrown by a descendant component.
     * It receives the error that was thrown and an "errorInfo" object as parameters.
     * The errorInfo object contains information about the component that threw the error, and the error itself.
     * 
     * @param {Error} error - The error that was thrown by a descendant component
     * @param {React.ErrorInfo} errorInfo - The errorInfo object
     */
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.log({ error, errorInfo });
    }
  
    /**
     * render is a lifecycle method that is invoked to render the component.
     * If the component has encountered an error, it renders a fallback UI.
     * Otherwise, it renders the children of the ErrorBoundary component.
     * 
     * @returns {React.ReactNode} - The rendered component
     */
    render(): React.ReactNode {
      // If there is an error, render the fallback UI
      if (this.state.hasError) {
        return (
          <div>
            <h2>Oops, there is an error!</h2>
            {/* Render a button that when clicked, will retry rendering the component */}
            <button onClick={() => this.setState({ hasError: false })}>
              Try again?
            </button>
          </div>
        );
      }
  
      // If there is no error, render the children of the ErrorBoundary component
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;
  