import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = ()=> {
    return(
        <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
                <div className="comment">
                    <a className="avatar">
                        <img src={faker.image.avatar()}/>
                    </a>
                    <div className="content">
                        <a className="author">Matt</a>
                        <div className="metadata">
                            <span className="date">Today at 5:42PM</span>
                        </div>
                        <div className="text">
                            How artistic!
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <a className="avatar">
                        <img src={faker.image.avatar()}/>
                    </a>
                    <div className="content">
                        <a className="author">Elliot Fu</a>
                        <div className="metadata">
                            <span className="date">Yesterday at 12:30AM</span>
                        </div>
                        <div className="text">
                            <p>This has been very useful for my research. Thanks as well!</p>
                        </div>
                    </div>
                </div>
        </div>);
};

ReactDOM.render(<App />, document.querySelector('#root'));