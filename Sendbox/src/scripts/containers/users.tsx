import * as counter from '../redux/users/actions';
import { Component, ComponentEvents, ComponentProps } from '../components/users';
import { connect, Dispatch } from 'react-redux';
import { IAppState } from '../redux/store';

function mapStateToProps(state: IAppState): ComponentProps {
  return {
    asyncStatus: state.users.asyncStatus,
    users: state.users.items
  };
}

function mapDispatchToProps(dispatch: Dispatch<counter.Actions>): ComponentEvents {
  return {
    onFetch: () => dispatch(counter.Functions.fetching()),
    onFetchWithError: () => dispatch(counter.Functions.fetchWithError()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);