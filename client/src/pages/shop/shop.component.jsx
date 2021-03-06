import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

//import CollectionsOverview from "../../components/collections-overview/collection-overview.component";
//import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview.container";

//import CollectionPage from "../collection/collection.component";
//import CollectionsPageContainer from "../collection/collection.container";

//import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

//import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);
import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collection-overview.container")
);
const CollectionsPageContainer = lazy(() =>
  import("../collection/collection.container")
);

export const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props;
  //   fetchCollectionsStart();
  // }

  //const { match/* isCollectionFetching, isCollectionsLoaded */} = this.props;
  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          /*render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
          */
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsPageContainer}
          /*render={(props) => (
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          )}
          */
        />
      </Suspense>
    </div>
  );
};

/*
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: slectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});
*/

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
