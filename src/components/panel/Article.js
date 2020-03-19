import React, {Component} from 'react';


class Article extends Component{
    render(){
        return(
            <div className="article">
                <h2>{ this.props.title }</h2>
                <p>{ this.props.body }</p>

            </div>

        );
    }
}
export default Article;