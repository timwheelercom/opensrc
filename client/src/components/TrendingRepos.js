import React, { Component } from 'react';
// import * as api from '../js/github-api';
import { connect } from 'react-redux';
import { fetchTrendingRepos } from '../actions';

class TrendingRepos extends Component {
	componentDidMount() {
		this.props.fetchTrendingRepos();
	}

	renderTrendingRepos() {
		return this.props.trending.map(repo => {
			return (
				<div className={'col-lg-3 col-md-4 col-sm-6 card-block'}>
					<div className={'card'}>
						<div className={'card-body d-flex flex-column'}>
							<div className={'row'}>
								<a className={'repo-link col-12'} href="#" target="_blank">
									<h5 className={'card-title'}>{repo.repoName}</h5>
								</a>
								{/*<p class="fork-link col-4"><img src="/static/media/github-fork.3421d08d.svg" alt="GitHub Fork Icon">3</p>*/}
							</div>
							<p className={'card-text'}>{repo.repoDesc}</p>
							{/*<img class="language-img" src="/static/media/html5.4b55d3c2.svg">*/}
							{/*<a class="btn issues mt-auto" target="_blank" href="https://github.com/timwheelercom/agile-week/issues">0 Open Issues</a>*/}
							<a className={'btn issues mt-auto'} target="_blank" href="#">
								{repo.starCount}
							</a>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h2 className={'text-center mt-5 mb-5'}>Trending Projects</h2>
				<div className={'row'}>{this.renderTrendingRepos()}</div>
			</div>
		);
	}
}

function mapStateToProps({ trending }) {
	return { trending };
}

export default connect(
	mapStateToProps,
	{ fetchTrendingRepos }
)(TrendingRepos);