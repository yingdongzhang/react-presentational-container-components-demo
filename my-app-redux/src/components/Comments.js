import React from 'react';
import { connect } from 'react-redux';
import { Button, Comment, Header } from 'semantic-ui-react';
import randomEmoji from '../randomEmoji';
import { fetchComments, addComment } from '../redux/actions';

class Comments extends React.Component {
  componentDidMount() {
    const { fetchComments } = this.props;
    fetchComments();
  }
  onAddComment = () => {
    const { comments, addComment } = this.props;
    const newComment = {
      id: comments.length + 1,
      author: 'Daniel',
      body: randomEmoji(),
    }
    addComment(newComment);
  }
  render() {
    const { comments } = this.props;
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
        <Button onClick={this.onAddComment} icon='smile outline' basic />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { comments } = state;
  return comments;
}

export default connect(
  mapStateToProps,
  { fetchComments, addComment }
)(Comments);
