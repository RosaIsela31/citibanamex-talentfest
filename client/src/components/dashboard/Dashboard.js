import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Sidebar from '../../citicomponents/principalPage/Sidebar';
import Graphic from '../../citicomponents/principalPage/Graphic';
// import Experience from './Experience';
// import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import PersonalPage from '../../citicomponents/principalPage/PersonalPage';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div>
      <PersonalPage /> 
      <div className='container-dash-sidebar'>
        <Sidebar/>
        <Fragment className='frag-dash'>
          <p className='lead'>
            <i className='fas fa-user' /> Hola {user && user.name}
          </p> <br/>
          <Graphic/>

          {profile !== null ? (
            <Fragment>
              <DashboardActions />
              {/* <Experience experience={profile.experience} />
              <Education education={profile.education} /> */}

              <div className='my-2'>
                <button className='btn btn-danger' onClick={() => deleteAccount()}>
                  <i className='fas fa-user-minus' /> Delete My Account
                </button>
              </div>
            </Fragment>

          ) : (
            <Fragment>
              {/* <p>You have not yet setup a profile, please add some info</p> */}
              {/* <Link to='/mockview' className='btn btn-primary my-1'>
                Create Profile
              </Link> */}
            </Fragment>
          )}
        </Fragment>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
