import React, { useContext, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { CartContext } from './CartContext/CartContext'; 

function MenuItem({ image, name, price }) {
  const [open, setOpen] = useState(false);
  const { addToCart } = useContext(CartContext); 

  const handleAddToCart = () => {
    addToCart({ image, name, price }); 
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="menuItem">
      <div
        className="menuItemImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1>{name}</h1>
      <p>{price}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddToCart}
        style={{ marginTop: '10px' }}
      >
        Add to Cart
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>🎉 Item Added to Cart!</DialogTitle>
        <DialogContent>
          <strong>{name}</strong> has been added to your cart!
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MenuItem;
