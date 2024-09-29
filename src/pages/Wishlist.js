import React from 'react';
import Meta from '../components/Meta';
import WishHeader from '../components/StoreHeader';
import Container from '../components/Container';
import WishCard from '../components/wishCard';

const Wishlist = ({ wishProducts, deleteFavProduct }) => {

  if (wishProducts.length === 0) {
    return (
      <>
        <div className="empty-content d-flex align-items-center justify-content-center">
          <h3 className="contact-title mb-4 gap-15">Your Wishlist Is Empty...</h3>
        </div>
      </>
    )
  } else {

    return (

      <>
        <Meta title={'Wishlist'} />
        <WishHeader title='Wishlist' />
        <Container class1="wishlist-wrapper home-wrapper-2 py-5">
          <div className="row">
            {wishProducts.map((item) => (
              <WishCard
                deleteFavProduct={deleteFavProduct}
                item={item}
              />
            ))}
          </div>
        </Container>
      </>
    )
  }

}

export default Wishlist