import {bool, func} from 'prop-types';
import {Modal} from 'antd';
import React from 'react';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

import Grid from './Grid';
import Question from './Question';

class Home extends React.Component {
  handleCancel = () => {
    this.props.setUserHasSeenModal();
  };

  showModal = () => {
    this.props.setUserHasNotSeenModal();
  };

  closeModal = () => {
    this.props.setUserHasSeenModal();
  };

  render() {
    return (
      <Grid>
        <div>
          <div id="launch-info-overview-modal-button">
            <AwesomeButton type="secondary" action={this.showModal}>
              <span>How does this work?</span>
            </AwesomeButton>
          </div>
          <Modal
            visible={!this.props.userHasSeenWelcomeModal}
            footer={
              <AwesomeButton type="primary" action={this.closeModal}>
                <span>Let&rsquo;s go</span>
              </AwesomeButton>
            }
            maskClosable={true}
            closable={true}
            className="info-overview-modal"
            onCancel={this.handleCancel}>
            <div id="info-overview-content">
              <ul>
                <li>
                  <p>
                    Did you know most office workers spend at least{' '}
                    <span className="emphasize stat">45%</span> of their week in
                    meetings?{' '}
                    <span role="img" aria-label="Thinking face" className="emoji">
                      🤔
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    That means on average, we spend more than{' '}
                    <span className="emphasize stat">3 months</span> per year in
                    meetings{' '}
                    <span role="img" aria-label="Shocked face" className="emoji">
                      😳
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Are you willing to spend{' '}
                    <span className="emphasize stat">30 seconds</span> to reduce
                    that number?{' '}
                    <span role="img" aria-label="Volunteering" className="emoji">
                      🙋‍♀
                    </span>
                  </p>
                </li>
                <li>
                  <p id="last-line-home-intro">
                    Answer a few questions and we&rsquo;ll help figure out if
                    you really need to schedule another one{' '}
                    <span role="img" aria-label="Blessed" className="emoji">
                      🙌
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </Modal>
        </div>
        <Question
          leftLink="#/input-from-others"
          rightLink="#/async"
          text="Is there a specific decision that needs to be made?"
        />
      </Grid>
    );
  }
}
Home.propTypes = {
  setUserHasSeenModal: func.isRequired,
  setUserHasNotSeenModal: func.isRequired,
  userHasSeenWelcomeModal: bool.isRequired,
};
export default Home;