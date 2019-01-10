import React, { Component } from 'react';
import { Button, Comment, Header } from 'semantic-ui-react';
import randomEmoji from '../random-emoji';

const url = 'http://localhost:3001/comments';

class Comments extends Component {
  state = {
    comments: [],
  }
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers = async () => {
    const data = await fetch(url);
    const comments = await data.json();
    this.setState({
      comments,
    });
  }
  addComment = async () => {
    const newComment = {
      id: this.state.comments.length + 1,
      author: 'Daniel',
      body: randomEmoji(),
    }

    const result = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(newComment),
    });

    if (result.status === 201) {
      this.setState({
        comments: [
          ...this.state.comments,
          newComment,
        ],
      });
    }
  }
  render() {
    const { comments } = this.state;
    return (
      <div>
        <Comment.Group>
          <Header as='h3' dividing>
            Comments
          </Header>
          {
            comments.length > 0 &&
            <div>
              {comments.map(comment => (
                <Comment key={comment.id}>
                  <Comment.Content>
                    <Comment.Author as='a'>{comment.author}</Comment.Author>
                    <Comment.Metadata>
                      <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>{comment.body}</Comment.Text>
                  </Comment.Content>
                </Comment>
              ))}
            </div>
          }
          {
            comments.length === 0 && <p>No comments</p>
          }
        </Comment.Group>
        <Button onClick={this.addComment} icon='smile outline' basic />
      </div>
    );
  }
}

export default Comments;
