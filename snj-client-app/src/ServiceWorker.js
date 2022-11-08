import React from 'react';

class ServiceWorker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            responce: false,
            content: false,
        };

        this.onJmakClick = this.onJmakClick.bind(this);
        this.requestToServer = this.requestToServer.bind(this);
        this.afterRequest = this.afterRequest.bind(this);
    }

    onJmakClick () {
        const { request, handler } = this.props;
        this.requestToServer({ request, handler });
    }

    async requestToServer({ request, handler }) {
        // !AJAX
        const responce = await fetch(request);
        const content = await responce.text();
        this.afterRequest({ request, responce, content });
        
        if (typeof(handler) === 'function') {
            handler({ request, responce, content });
        }
    }

    afterRequest({ request, responce, content }) {
        console.log('Request.DONE', { request, responce, content });
        this.setState({
            content: content,
            isLoading: false,
            responce: false,
        });
    }

    render() {
        const { content, request, responce } = this.state;
        console.log('Render.SW', { content, request, responce });

        return (
            <div className="interaction-panel">
                <div className="btn-item" onClick={this.onJmakClick}>JMAK!</div>
                <textarea className="responce-holder">{ content }</textarea>
            </div>
        );
    }
}

export default ServiceWorker;