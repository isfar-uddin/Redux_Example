import React, {Component} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {fetchPosts} from "../actions/postActions";

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const postItems = this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
        })
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts : propTypes.func.isRequired,
    posts: propTypes.array.isRequired
};

const mapStateTopProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateTopProps, {fetchPosts})(Posts);